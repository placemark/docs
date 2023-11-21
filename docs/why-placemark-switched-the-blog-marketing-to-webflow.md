---
Name: Why we switched to Webflow
Collection ID: 616750c12c0aece979319ccd
Item ID: 61b0dc50a21a1ff684376141
Created On: Wed Dec 08 2021 16:24:48 GMT+0000 (Coordinated Universal Time)
Updated On: Wed Dec 22 2021 19:33:46 GMT+0000 (Coordinated Universal Time)
Published On: Wed Dec 22 2021 19:36:46 GMT+0000 (Coordinated Universal Time)
Post Summary: Why it might be a good idea to build your marketing site with a
  different technology stack than the one your application uses.
Main Image: ""
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61bb579e7858b762188e048b_Switching%20to%20Webflow.png
Featured?: "true"
Date: Wed Dec 08 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

I recently ported Placemark's marketing site to [Webflow](https://webflow.com/). Initially, the homepage & documentation were maintained in the same [Blitz](https://www.placemark.io/post/the-application-stack-blitz) codebase as the app itself, and the blog used a [Jekyll](https://jekyllrb.com/) setup more or less copied from [my blog](https://macwright.com/). Using Blitz & Jekyll did check most of the boxes for my [general philosophy](https://www.placemark.io/post/stack-thinking), but I decided to take Tyler's advice:

Why? It's not because I didn't want to code my own marketing site. I'm happy to write the HTML and CSS and such, and get into the details. Heck, I *love* making stuff by hand.

And I'm not exactly preparing to onboard a marketing team and farm out that work. Maybe that'll happen in a year or two, but Placemark is a small and focused operation, and I'm also happy to write all the marketing copy.

So why Webflow?

### 1. Marketing content always churns

I've worked on enough marketing pages to know that marketing pages *always change*. They change because the company's trying out a new slogan. Because they're trying to appeal to a different audience. A/B testing some signup optimizations. Leadership changed and they want to make a mark on the company.

Whatever the reason, a lot of these marketing page changes are simple and should be fast. I shouldn't have to redeploy my application in order to change a "Sign up" button to say "Try it for free." These changes are overwhelmingly visual and content-oriented in nature, not functional.

Similarly, marketing should always be growing and evolving. Placemark has a growing [set of documentation](https://www.placemark.io/documentation-index), and it'll have tutorials and feature pages and all kinds of content. Sure, I could manage this as Markdown in a folder and build my own category system, but having all of this live with the application doesn't make much sense.

### 2. React & SPAs still aren't that great for marketing sites

I guess I [wrote about this at length](https://macwright.com/2020/05/10/spa-fatigue.html) a little while ago: there are a lot of things that are difficult to do efficiently with React. I'm using [Blitz](https://www.placemark.io/post/the-application-stack-blitz) as the application stack for Placemark.

Blitz has been working very well for the application: I think my decision back in March to build on it was the right one. But it's basically a layer on top of [Next.js](https://nextjs.org/), which is a layer on top of [React](https://reactjs.org/).

Right now React and its meta-frameworks like Next.js just aren't that great for the performance of simple pages.

To be clear, I think we are on the cusp of React being a good choice for marketing sites. [Server components](https://nextjs.org/blog/next-12#react-server-components), which Next.js and React are starting to support, will make it possible to do things like delivering a page of content as HTML, without sending the JavaScript version of that content again. Right now, you basically have to send it twice. Maybe your framework is smart enough to transform your Markdown into JSX so that you don't have to send a Markdown compiler as well with the pageload, but still - it's far from ideal. React is just not a great way to just send over a webpage. [Remix](https://remix.run/), too, is making progressive enhancement, possibly zero-JavaScript pages possible.

Which is exciting! But this stuff is bleeding edge. In a year or two when it's all mature I'll take another long look at it, but right now, I'd rather not innovate too much when I'm creating a basic marketing site.

### 3. Different performance budgets

The performance budget for the placemark.io marketing site is much different than for the application.

The marketing site needs to have a really fast initial pageload, because both the average customer and the Google web crawler are very discerning when it comes to that initial pageload. The behavior of *successive interactions* matters a lot less: whether clicking a link instantly brings up the next page, or whether some interactive element runs at 60 frames per second or 30.

The Placemark application, on the other hand, loads slowly and then has to run quickly. Even the initial page of the application loads almost 500kb of gzipped resources. That'd be totally unacceptable for a marketing site. But the behavior around the application is different: you load it, then use it for a long period of time. It matters whether the lasso operation to multi-select features runs quickly. It doesn't matter nearly as much how long the initial pageload takes. Applications are like this: anyone who's opened up Photoshop remembers the progress bar.

### Why Webflow in particular?

Why not Jekyll? Well - I want as few pieces of technology that I maintain as possible. I'll pay $20 a month instead of having another build process and framework to worry about.

Webflow has alternatives, like Wix, SquareSpace, and I'm sure lots of others. I went with it because it's what a lot of companies are using. It's okay: some things like the blog editor are janky, but overall it works well. I'm old enough to have used [Dreamweaver](https://en.wikipedia.org/wiki/Adobe_Dreamweaver) and, well, Webflow is Dreamweaver for 2021. Recreating the design of the previous site took less than an hour. It pays to make minimal designs. Oh, and if you want to follow this lead, I do have an [affiliate link to sign up for Webflow](https://webflow.grsm.io/g8z9caejyo5m). Or if you want to just sign up for Webflow, just go to [webflow.com](https://webflow.com/), either way.

I've been happy with this decision: it removed a big chunk of marketing code from the application and removed some of the friction involved in blogging and marketing.
