---
Name: Engineering round up
Collection ID: 616750c12c0aece979319ccd
Item ID: 6175e94da86f1b2d7ec3a4ee
Created On: Sun Oct 24 2021 23:16:29 GMT+0000 (Coordinated Universal Time)
Updated On: Sat Jul 23 2022 20:23:49 GMT+0000 (Coordinated Universal Time)
Published On: Sat Jul 23 2022 20:28:29 GMT+0000 (Coordinated Universal Time)
Post Summary: From DNS to SQL to design, here's what's been changing with the
  Placemark map editor.
Main Image: ""
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61bb5dab7784b73cc77648a2_Development%20round-up.png
Featured?: "true"
Date: Mon Oct 25 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

Last week was a relatively tough week at the Placemark helm. I've found that sometimes Mercury is in retrograde, or my mood doesn't afford me the ability to laugh at my own mistakes or take a walk when something doesn't work on the first or third try. It's doing a disservice to only write about the problems I feel like I *really nailed* and not the frustrations in between. So here's a little of that.

#### DNS & Webflow

I recently ported [Placemark's marketing website](/), and this blog, to [Webflow](https://webflow.com/). Before, the marketing site was part of the same [Blitz](/post/the-application-stack-blitz) application as Placemark itself, and the Blog was a [Jekyll](https://jekyllrb.com/) blog with lots in common with my [macwright.com](https://macwright.com/)'s codebase.

I was mostly taking [Tyler Tringas's advice](https://twitter.com/tylertringas/status/1250521285630836741) on this front, but also following the metrics. Despite everything that Blitz and Next are doing for performance of static marketing sites, they're still overkill, and the old homepage had mediocre performance and SEO. And, speaking of SEO, everything in SEO is uncertain but it seems likely that hosting blog posts like this one on the same domain as the marketing site makes Google more likely to treat them as the same entity.

Webflow is pretty good. The user experience isn't as polished as Figma, but I'm impressed by how well they've implemented some of the CMS-oriented concepts. And the HTML/CSS that Webflow generates is very reasonable. But the porting of everything was tricky: previously the blog was hosted at [Netlify](https://www.netlify.com/) and the website at [Render](/post/hosting-render). After the swap, the application is hosted by Render at app.placemark.io, and the website is hosted by Webflow at [www.placemark.io](https://www.placemark.io/).

So, I reimplemented the site in Webflow, which only took a few hours, wrote a lot of new documentation, and ported over all the blog posts. Then it was just a matter of adding a new subdomain in Cloudflare, pointing Render to that subdomain, and pointing Webflow to www.

It's *never* that simple, with DNS and domains. I forgot to update an environment variable in Render that let the main application know which domain it was being hosted on. I tried to proxy app.placemark.io through Cloudflare immediately, which broke Render because Render couldn't confirm that they controlled that domain.

#### SQL, darned SQL

Placemark is generally using [Prisma as an ORM](https://www.prisma.io/).

I have mixed feelings about this. Not quite about Prisma - Prisma is a high-quality project with an active and intelligent team of developers behind it. But about using an ORM.

I think that development moved quickly away from ORMs after [Ruby on Rails](https://rubyonrails.org/) started yielding room for Node.js, and then Go and other more modular, performance-oriented tools. This was in part because Ruby on Rails's ActiveRecord can be abused, easily. You can create truly baffling SQL queries by using ActiveRecord without regard to the database underneath.

But it's also because of performance. The absolute best performance that an ORM can offer is no greater than a hand-written query. And very often, ORMs produce lower-quality queries than handwriting.

I hadn't written much SQL at all until I worked at [Observable](https://observablehq.com/), but there I learned the value of really, really understanding Postgres. Database queries are one of the few things in the web stack that you can reliably guess will be a performance bottleneck and be correct in that assumption. Applications spend *a lot* of time in the database layer, regardless of what particular database they're using.

So I spent a few years learning how to do more and more with a single query. There are some queries in the Observable codebase that might still remain which will really open your third eye, so to speak. We used [CTEs](https://www.postgresql.org/docs/9.1/queries-with.html) and recursive subqueries and all kinds of magic to produce succinct, thoroughly performant little gems of database magic. And bugs, of course.

Anyway, there is a part of Placemark in which querying and updating the database is the main thing I'm doing, and in which performance of those queries is absolutely central - the collaboration loop. This is the [Replicache push endpoint](https://doc.replicache.dev/guide/remote-mutations). It matters, a tremendous amount, and relies on some fairly sophisticated assumptions about the database layer. It relies heavily on database transactions and a reliable, monotonic, mutex-like counter.

This is where last week was tough: I've been using Prisma's support for transactions, which is unfortunately a bit fringe. Prisma really would prefer that you [implement transactions in your application](https://www.prisma.io/blog/how-prisma-supports-transactions-x45s1d5l0ww1), but that doesn't quite work for most of the problems I'm tackling. And I ran into a mysterious issue, most likely in Prisma, related to upserting in a transaction, that led to the CPU spinning and the application giving up on future requests. It was frustrating. The leaves are falling in Brooklyn, so it's a good time to go on walks, which I did.

#### Next up

On the bright side, I've shipped a few important things and am planning some more.

I implemented client-side undo/redo, using unidirectional, mutable undo objects. This was a stark departure from the undo systems I've worked on in the past that had [immutability](https://macwright.com/2021/03/05/immutable-approaches.html) as a core assumption. I'll probably write about this soon, though it's very similar (and directly inspired by) [Figma's undo system](https://www.figma.com/blog/how-figmas-multiplayer-technology-works/#implementing-undo)

The [multi-feature-selection](https://twitter.com/placemarkio/status/1450120324226420738) state now lets you edit properties of multiple features at once. This pattern has been around for ages in Adobe Illustrator, and more recently in Mapbox Studio and Figma, and I always wanted to implement it. Feels good!

Quite a few different things are vying for the next slot on the *implementation conveyor belt*, but the most likely is *presence* and to give more life to the existing multi-player editing. Placemark is in a similar place to Observable at some point in 2020 - multi-player is now deeply embedded in its programming model, but not exposed in many UI elements. And the other thing is a server-side store of versions - another thing that will partly emerge naturally from the principles of the programming model I've set out, but there's a lot of tradeoffs I need to balance for the implementation.

‍
