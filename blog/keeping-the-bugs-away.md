---
Name: Keeping the bugs away
Collection ID: 616750c12c0aece979319ccd
Item ID: 61952aa908ee302d689327dd
Created On: Wed Nov 17 2021 16:15:37 GMT+0000 (Coordinated Universal Time)
Updated On: Sat Oct 08 2022 19:39:31 GMT+0000 (Coordinated Universal Time)
Published On: Sat Oct 08 2022 19:40:05 GMT+0000 (Coordinated Universal Time)
Post Summary: How we use error logging, code analytics, uptime monitoring, and
  continuous deployment to power map editing tools you can rely on.
Main Image: ""
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61bb5d99244ca2a4b0c381de_Keeping%20the%20bugs%20away.png
Featured?: "true"
Date: Wed Nov 17 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

In the last two weeks, Placemark's uptime graph has been unhappy, the result of several bugs in its code and the dependencies it relies on. So I've spent time improving the way we track & fix bugs. This post is a bit about the setup, plus some postmortem - some of what has been going wrong, and some of what I've been trying to improve.

The issues, in short, have been:

* A crasher bug in Sentry's instrumentation library, triggered by some odd code I wrote
* A crasher bug in Prisma's implementation of transactions
* Some minor bugs in Blitz, like TypeScript defs inconsistencies

All of these were either already reported, or I spent some time narrowing down the cause as best I can and filing detailed bug reports. Being willing to do that, to spend a day hunting down a bug that you didn't write, seems essential. It's a lot of work, but it's a lot easier for you to isolate and diagnose a bug you're seeing than it is for someone without access to your setup.

### Fixing broken software

All software has bugs. All software development adds bugs. It doesn't matter if you have a fancy type system or robust unit tests. You can reduce the number of bugs, but you can never really get to zero.

What matters is your ability to notice, diagnose, and fix those bugs: to create a feedback loop. In a perfect world, every bug would have a detailed and accurate report that let you track down its origin. Every bug that happens in production can be reproduced locally. And when you have a fix, you can deploy it immediately and confirm that the bug is gone.

That's the goal. We don't live in a perfect world, and usually none of these things are *absolutely* true. For example, the issues with Blitz I encountered only manifested in production. The issues with Sentry produced a bug report that didn't point to any particular system or line of code. Interpreting bugs shouldn't be an art, but it is.

But to even have a fighting chance to achieve these goals, you need a few systems.

**First, error tracking.** I use [Sentry](https://sentry.io/welcome/), because I have a lot of experience using it at Mapbox and Observable, and they have an actively-maintained integration for Next.js, which works okay with Blitz. If you only had one system, I think it'd be error tracking. Sentry aims to hook into all of the ways your application can crash or produce an error, and send all of those errors to its service. Then, you can look at them all on a dashboard and try and fix everything on that list, one by one.

![Sentry dashboard](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/619529fa59d3bc05c33490da_CleanShot%202021-11-17%20at%2011.11.50%402x.png)

Sentry

Ironically, one of my issues was caused *by* Sentry's integration - its low-level hooks into my server were changing the behavior of Node's streams, which caused an internal error in Node, and Node crashes hard when that happens.

![Logtail showing Placemark's log messages](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61952a5e0d84190d1e9e82a7_CleanShot%202021-11-17%20at%2011.14.06%402x.png)

Logtail

**Then, logging.** [Render](https://www.placemark.io/post/hosting-render) has rudimentary logging built in, but I recently added [Logtail](https://logtail.com/) for longer-retention logs that I can search through. Logging & error tracking can really be two sides of the same coin - some errors produce logs, and some logs are captured by Sentry as the context to errors. But there are important details that are captured *only* by logs - errors from system-level software, logs of deployments, debugging information, timing data. Logs are an unstructured mess, but if you spend some time searching through them, they can often answer hard questions about out-of-memory errors and the like.

**Patterns.** Here's the part where it's my fault. There are ways to write code that gives good tracebacks and ways to screw it up. For example, let's say that your code relies on some [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) value, and you aren't using await syntax, but using the ["then"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) method. If you don't also call the [catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) method, you probably have a silent failure in your application.

Brief rant: silent failure is the worst kind of failure. I've noticed a habit of early software engineers that they tend to fix the error, not the bug. They'll see a crash and add [try…catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) around it so that it doesn't complain. The complaining isn't the issue: the bug is. Prefer loud failure. Heck, the Unix philosophy has said this for decades.

> [Rule of Repair](http://www.catb.org/esr/writings/taoup/html/ch01s06.html): When you must fail, fail noisily and as soon as possible.

To fix bad error patterns, I've dialed up some static analysis: the [no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises/) rule in typescript-eslint prevents that uncaught Promise rejection error, and the [require-await](https://typescript-eslint.io/rules/require-await/) rule catches me when I use an async function for no reason - a practice that makes my error reports worse.

![CodeClimate showing code health statistics](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61952a9308ee3054d2932794_CleanShot%202021-11-17%20at%2011.14.51%402x.png)

Code Climate

**And, of course, tests.** I'm using [Code Climate](https://codeclimate.com/), which is remarkably 'free forever' for teams of under 4 people. The tests I run create code coverage statistics that I send to Code Climate and they give nice charts of coverage over time. Code coverage is only one limited way to measure test quality, and ironically the easiest things to test tend to be the least buggy parts of an application. But it's good to have a metric nudging me to write more tests. The next frontier of testing for me is true integration testing and also concurrency testing for the complex backend pieces.

### Improving the deployment loop

There are a few ingredients that have helped tremendously in fixing Placemark & confirming those fixes:

Using a [healthcheck endpoint](https://render.com/docs/deploys#zero-downtime-deploys) with Render, I can do zero-downtime deploys and also prevent broken servers from being deployed. Render simply waits until an endpoint in Placemark returns the right response before replacing the old server with a new one. Deploys take about 4 minutes right now, which I'd love to reduce but feels basically acceptable.

By integrating heavily with [Sentry's releases support](https://docs.sentry.io/product/releases/), my error tracking knows when new versions of Placemark are released. This means that I can mark a bug as "fixed" in one release, and if it crops up in another, I can cross-reference my development history on GitHub against the behavior of deployed code to bisect the regression.

### Onwards and upwards

Thanks to committed maintainers and fast release cycles, this week should see the end of these crasher bugs. But in the meantime, I'm happy to have built some systems that keep the quality up.
