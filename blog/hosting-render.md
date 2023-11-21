---
Name: "Hosting: Render"
Collection ID: 616750c12c0aece979319ccd
Item ID: 6168070ae33643d76aa7d454
Created On: Thu Oct 14 2021 10:31:38 GMT+0000 (Coordinated Universal Time)
Updated On: Sat May 14 2022 21:09:42 GMT+0000 (Coordinated Universal Time)
Published On: Sat May 14 2022 21:09:58 GMT+0000 (Coordinated Universal Time)
Post Summary: Here's why we use Render, instead of options like AWS, to host our map editor.
Main Image: ""
Thumbnail image: ""
Featured?: "false"
Date: Fri May 14 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

Placemark is using [Render](https://render.com/) for hosting. But to start with - in the tradition of [stack thinking](https://blog.placemark.io/2021/05/06/stack-thinking.html), it’s best to talk about the right *kind* of hosting to use.

As I’ve [joked about](https://twitter.com/tmcw/status/1389990393744445440), I picture there being three eras and kinds of web hosting.

The first is “VPS” style hosting: you pay for a Linux computer in a datacenter, you can SSH and FTP into it, and other people might be using the same computer. Slicehost was a good example of this, or DreamHost back in the day. You get backups of the computer, maybe, but essentially it’s a computer like your laptop: you manually set it up, configure things, and hope that it never crashes or disappears. Hopefully you wrote down what you did. If you want to update your code, you SSH into the computer and load new code onto it.

The second is “Heroku” style hosting. Instead of a particular computer that you keep using, you treat computers as ephemeral. You follow the [12 factor app](https://12factor.net/) commandments to make all of the configuration repeatable and contained in predictable units. [Heroku](https://www.heroku.com/) pushed this idea really quickly, turning the clock forward on web development in general.

The third is “AWS” style hosting. Google Cloud, Azure, etc are all basically following that template. Like Heroku-style hosting, you encapsulate your configuration. But instead of deploying a Rails app or Node.js or something else, you might be deploying a multi-billion dollar company’s infrastructure, so you can’t make many assumptions about anything. So the level of abstraction is much, much lower: instead of a Dyno running some mostly-configured Linux distribution, every little knob and dial is exposed. The networking is all yours to customize. With Docker, you don’t need to follow 12factor at all - just write a shell script that sets up some very particular system, and clone it to your heart’s content.

AWS style hosting is the industry standard right now. Most startups are doing it. AWS offers higher-level wrappers of varying quality to replicate parts of the Heroku-like experience. Investors love to know that you’re using one of the four main cloud platforms, so risk is minimized. You can get a few thousand dollars of AWS or GCP credits in many different ways. And the scalability is near-infinite: you have to be at the scale of [Dropbox](https://www.wired.com/2016/03/epic-story-dropboxs-exodus-amazon-cloud-empire/) for AWS to stop making sense.

I think many of these startups are making a mistake. That is not to say that there are no benefits of an AWS or GCP stack using Kubernetes and all of the latest technology. But that, especially in the first few years of a startup’s existence, and especially for startups with less intense server needs, the unavoidable complexity of low-level cloud platforms is a net negative for growth and productivity.

There are absolutely startups that will have intense server needs even at the earliest stages. If you’re building a continuous integration service or some advanced, high-performance API business, then, absolutely - go forth. What Mapbox does, for example, fits the flexibility and power of AWS. But Observable ran great on Heroku for at least the first few years of its existence (I don’t know if they’ve switched, it seems likely, eventually). And my most recent experience, trying to build on Kubernetes/GCP with a small team, quickly unveiled the massive downsides of that approach. Working with Lambda and the AWS stack for other projects has been an ongoing pain. People say that I should use a higher level of abstraction - which isn’t clear, one of the 5 different CloudFormation-like configuration abstractions or one of the serverless.com/up-like service abstractions, I’m not sure. I just don’t think it’s the right tool for most jobs.

Placemark is not, initially, going to be a server-intensive application. It’s not an API as a service. It’s not a big data processing platform. There might be a few components where speed is important, but that will be mostly speed-as-in-latency rather than speed-as-in-throughput.

### I just don’t like devops

And, personally – all of these decisions are personal at some level – I don’t like devops. I like a lot of things, as any [reader of macwright.com](https://macwright.com/) might notice. And I’ve learned to like a lot of things after working on them for a while. I do not like devops, in the same way I do not like tinkering with my computer’s configuration all that much. The computer is a tool to do things, not an end in itself. I don’t see any novelty in setting up the millionth Node.js server on the internet in a new and interesting way. Customers probably won’t notice. My homespun network configuration is not going to be much better than Heroku’s defaults.

So: I think a PaaS (platform as a service) makes more sense for this kind of thing than AWS-style hosting. Which then begs the question: which.

### Why not Heroku?

I keep saying “Heroku”, and I’ve had mostly positive experiences with Heroku. But it’s hard to see the future for Heroku. Though they’ve shipped a lot of new features after being acquired by Salesforce, I still can’t see how the Heroku and Salesforce plans intersect. It’s scary that Heroku is probably a small percentage of Salesforce’s revenue, and obviously not one of their crown jewels. Heroku’s [changelog](https://devcenter.heroku.com/changelog) is mostly just version bumps. Hosting has gotten cheaper, but Heroku hasn’t, and things like HTTP/2 are standard now, but Heroku doesn’t support them.

That’s not to say that Heroku’s a bad option. They’ve had 14 years of product development and bug fixes: it’s a mature product. Many of the issues with Heroku are fixed, or are known and have workarounds. Heroku isn’t cutting-edge anymore: it’s [boring technology](https://mcfunley.com/choose-boring-technology), in the good way.

But still, I’m not sure about the rest of the Heroku story. And there are a lot of companies taking that initial inspiration from Heroku-around-2010 and running with it.

### Vercel

I started Placemark building with [Vercel](https://vercel.com/), which has the most slick developer experience of any tool I’ve used, ever. But I’m using [Blitz](https://blog.placemark.io/2021/05/10/blitz.html), which doesn’t work very well with it. Vercel deploys with serverless functions and has an incredibly advanced and clever way of [hosting Next.js](https://vercel.com/docs/next.js/overview) apps. If I were building against a serverless database or if my Blitz app hit an API instead of connected to a database, Vercel would work great. But as it is: connecting to a traditional Postgres database from serverless functions is a whole deal. With Vercel, you need an upgraded account, and under the hood you’d probably want something like the [AWS RDS Proxy](https://aws.amazon.com/blogs/compute/using-amazon-rds-proxy-with-aws-lambda/) to keep those database connections fast. How do you pool database connections with Lambda functions? There’s an answer, but not a simple one.

### PaaS options

So that leaves me with a few other options: [platform.sh](https://platform.sh/), [fly.io](https://fly.io/), [Digital Ocean apps](https://www.digitalocean.com/products/app-platform/), and [Render](https://render.com/). Fly is really attractive for a slightly different problem set than what I have: I don’t want to ship a Docker app, at least initially, and, though fly has a [continuous deployment strategy](https://fly.io/docs/app-guides/continuous-deployment-with-github-actions/) with GitHub Actions, I want something where that is central to the product and incredibly well-supported. Platform.sh is basically the same: lots of promise, but continous deployment is still manual. I gave Digital Ocean apps a shot. It would be nice to go with a battle-tested existing host’s new product. But the initial experiments didn’t go well: the database failed to boot, and there’s no [local-network database access](https://www.digitalocean.com/community/questions/how-to-secure-database-connection-to-app-platform), as far as I can tell.

### Render

Using Render has been great so far. Blitz has a [really fast setup guide](https://blitzjs.com/docs/deploy-render) for it. The web interface is functional and shows everything I need to see to feel like I know what’s going on. And Render’s product is moving fast in the right direction: using [a quality CDN](https://community.render.com/t/all-static-sites-are-now-powered-by-fastly/598), hinting about moving to bare metal servers, supporting fancy [preview environments](https://render.com/docs/preview-environments) that are just like Vercel’s PR previews but for the whole stack.

I sense that the pendulum is swinging back toward Heroku-style hosting, so the moment that I post this, a few startups will launch that I haven’t mentioned in this article. Is [Railway](https://railway.app/) good? Anyway, as I said before: it’s important to choose the right kind of thing. I think Render is the right kind of thing, and I’m quite satisfied with it so far. I’m spending my time building Placemark, not configuring networking.
