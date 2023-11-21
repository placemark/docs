---
Name: "The application stack: Blitz"
Collection ID: 616750c12c0aece979319ccd
Item ID: 616807299f86a332fbd890ed
Created On: Thu Oct 14 2021 10:32:09 GMT+0000 (Coordinated Universal Time)
Updated On: Sun Jul 31 2022 19:05:07 GMT+0000 (Coordinated Universal Time)
Published On: Sun Jul 31 2022 19:05:12 GMT+0000 (Coordinated Universal Time)
Post Summary: There are lots of different ways to build a web application. It's
  about choosing the one that fits your problem area - here's why I ended up
  with Blitz.js, a level on top of Next.js, for Placemark.
Main Image: ""
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61bb57b824b742ac0b4e953d_Blitz.png
Featured?: "true"
Date: Mon May 10 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

I’m building Placemark with Blitz. [Blitz](https://blitzjs.com/) is a layer on top of [Next.js](https://nextjs.org/), which is itself a layer on top of [React](https://reactjs.org/). Remember when I wrote that pretty popular article about [how React is a little overused](https://macwright.com/2020/05/10/spa-fatigue.html)? Let me explain.

As I wrote [last time here](/post/stack-thinking), it’s really important to understand the kind of thing that you’re building. The kinds of things I’ve built in the past are like this:

* [Mapbox Studio](https://www.mapbox.com/mapbox-studio), a Photoshop-like map styling interface
* [iD](https://github.com/openstreetmap/iD), the default editor for OpenStreetMap
* [Observable](https://observablehq.com/), a code editor and runtime on the web
* $StealthStartupProduct, a collaboration tool for a particular industry

When I wrote *Second Guessing the Modern Web*, I was working at the $StealthStartup. What we were building felt a lot like GitHub or Basecamp, and not at all like the Photoshop/editor/interactive tools I had used. And the toolkit for those heavily interactive tools was adapting really, really poorly into this less-interactive domain. We weren’t reaping the benefits, and we were suffering from the negatives.

### Most of the web is overbuilt

I would wager that a lot of the web is more like that stealth startup’s product than like Mapbox Studio or iD or Placemark. And a lot of successful products on the web are (still) being built with Rails. GitHub is Rails. Gusto. Stripe is a bunch of things, but started with Rails. If I were to build an HR software or a scheduling system or a thing for organizing team standups or a food delivery startup website, I’d think hard about using Rails or something like it.

Placemark has a big interactive component. One “page”, one URL, will basically have 95% of the value of the thing. Dynamic client-side updates will be the norm, not the exception. That’s just the kind of thing it is. So Rails doesn’t make that much sense. Though I am *hyped* about things like [remix](https://remix.run/) and think that server-rendered HTML should be the strategy of a great majority of web apps, I am not building something in that category.

Anyway, if server-rendering centric and client-rendering centric websites are the two categories and it’s the job of each engineering team to choose which category their app belongs in, I’d bet: a lot of teams are incorrectly building things that are client-heavy when their apps are not that dynamic. Perhaps some are building things that are server-heavy when their apps are too dynamic - [hey.com](https://www.hey.com/index.html) comes to mind here: it’s doing a *ton* of server-rendering and trying to provide a really slick client experience. Does it pull off that native experience? Barely.

The general trend though is overbuilding (using React for your blog or mostly-pages-and-forms-website) rather than underbuilding (using Rails for something super-dynamic).

### A fullstack monolith

Placemark is aiming to be primarily monolithic: I want as much connection between backend and front as possible. Rolling out backend changes, trying to keep APIs consistent, managing fleets of servers, all of this is *not building the product*. I want to build the product. Building an API, and then a frontend on that API, doesn’t make sense for this product or this team.

To get to Blitz, I started with Next - built the site in Next for a month, and then started thinking about what to do for the backend. There were options like [Next Auth](https://next-auth.js.org/) to *just* add the authentication piece and then I could use Next’s API routes for the backend, but having rebuilt migrations and a database client and all of that boring, same-seeming stuff in other products, I didn’t want to start with something minimal and then just rebuild the rest.

### Redwood

[Redwood](https://redwoodjs.com/) is another alluring option, but at $StealthStartup I worked with GraphQL for a while and it does *not agree with me*. I don’t mean to say that GraphQL is bad, it’s simply not my preference, and this particular product has little to take from its sort of abstraction. I’m not going to build a native application anytime soon. I have a limited and known number of database queries that’ll be performed, and it’ll be nice to have an escape hatch to optimize them if I want. GraphQL moves around a lot of complexity into parts where I am simply uncomfortable with it living: I want to control queries at the server level, to selectively cache queries, to jump down to SQL when necessary, to control authentication and authorization the traditional way.

Redwood is really well-supported otherwise, thoughtfully designed, connected to a [foundation](https://prestonwernerventures.com/) led by Tom Preston-Werner, one of the GitHub cofounders. Like Next.js, it’s a second-wave (third-wave, maybe?) open source project, and doesn’t depend on some lonely maintainer’s unpaid labor.

### Blitz

[Blitz](https://blitzjs.com/) is billed as *The Fullstack React Framework* and even name-drops Rails in its marketing material.

Within the framework of [choose boring technology](https://boringtechnology.club/), you only get so many ‘innovation dollars’: you can invent a few things, and for the rest you should go with standard parts. Blitz does that pretty well. Its database layer, Prisma, is becoming an industry standard. It doesn’t do anything weird with tests or CSS or how it deals with React. A lot of the decisions in Blitz are transferred directly from Next.js, or inspired directly from Rails.

The one ‘big idea’ in Blitz is that “zero-API data layer”. You can write functions that run on the server, import them on the client, and Blitz takes care of three of the most annoying bits:

* Managing the API route’s routing and the client’s ability to know that route
* Serializing and deserializing the data on both server & client side
* Making the interaction between your server & client “type-safe”, as much as TypeScript can guarantee that

These are pretty big benefits, and they work reliably. And, importantly, it’s pretty clear how this works: it’s not so much magic that you can’t open your network tools and see what’s going on, or open your console and see if the server is complaining about anything.

Blitz has a fancy library, [superjson](https://github.com/blitz-js/superjson), which lets you transfer additional kinds of data between server and client. Just the ability to transfer a Date object is such a relief for me - encoding and decoding dates was such a pain at Observable, where we had a mostly homespun server and API access setup.

My biggest qualm with Blitz - and with Next - is the high level of abstraction they require. Blitz is going to be running Webpack on your frontend files and baking in a lot of transpilation. My app uses WebGL, so obviously we’re not going to support IE9, but Blitz (via Next) will aggressively turn things like [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) into a complex pile of transpiled and polyfilled code. The server-side transpilation makes me even more uncomfortable: what if a future bug’s stack trace is filled with incorrect line numbers because of transpilation? What if there’s a bug in Babel or a minifier - this [absolutely does happen](https://github.com/tmcw/togeojson/issues/44).

But, such is the price of joining a big tent open source project. Other Blitz users will care about older browsers. Their interests won’t perfectly overlap with mine, and just like Rails, the framework will have plenty of things that I don’t use in it.

But for now, it works pretty well! The basic idea of data queries and mutations is simple, effective, works as designed. Blitz makes it possible to build a mostly-normal React app and graft on a backend without all of the indirection and complexity of a split application. I envy those in the future who will use Blitz after a few more years of stabilization and improvements: these full-stack-React frameworks are all relatively new, compared to Rails or Django. But even at this nascent stage, they’re really worth a look.
