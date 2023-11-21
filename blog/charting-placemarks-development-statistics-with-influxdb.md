---
Name: Charting development statistics with InfluxDB
Collection ID: 616750c12c0aece979319ccd
Item ID: 6169918f25ce34f7ddf2e9ce
Created On: Fri Oct 15 2021 14:34:55 GMT+0000 (Coordinated Universal Time)
Updated On: Sat Oct 08 2022 19:31:27 GMT+0000 (Coordinated Universal Time)
Published On: ""
Post Summary: How we use GitHub Actions and a time-series database, InfluxDB, to
  track vital software development metrics.
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/6169909c5ff830116270f2ab_CleanShot%202021-10-15%20at%2010.30.31%402x.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/616990d125ce348340f2df58_CleanShot%202021-10-15%20at%2010.31.26%402x.png
Featured?: "false"
Date: Fri Oct 15 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

A little while ago, I wrote [an article about two wishes for dev tooling](https://macwright.com/2021/07/05/two-wishes-for-dev-tooling.html), in which one of the main wishes was a way to monitor code quality in a less pass/fail sense than normal testing. What if, instead of just tracking whether [eslint](https://eslint.org/) reported any severe problems with your codebase, you could also keep track of how many warnings it logged? If instead of just tracking whether tests passed or failed, you could also keep track of how long they took to run? I'm using [Code Climate](https://codeclimate.com/) for some code quality measures, but I wanted a way to track arbitrary other things, just like how GitHub Actions can run arbitrary code and give you some sort of output.

I finally got the kick of inspiration I needed reading [Nelson Minar's blog about tracking CO₂ levels with a sensor, Telegraf, InfluxDB, and Grafana](https://nelsonslog.wordpress.com/2021/09/23/kaiterra-laser-egg-monitor-in-telegraf/). Now, for my DIY system, I'm only going to use one of those components: InfluxDB.

![InfluxDB dashboard screenshot](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/616990d125ce348340f2df58_CleanShot%202021-10-15%20at%2010.31.26%402x.png)

InfluxDB is a tool built for serious, large, complex data problems. I'm using it here for simple, unserious vanity metrics. But in my defense, these metrics are eventually useful. The example above, the size of my node\_modules directory on disk, isn't really that important. Sure, it'll have some effect on how the size of the server VM, but a fraction of this code will be transferred to the client or even loaded and used - a lot of this is dead code, or non-code things in modules like long README files or tests that they forgot to exclude from the npm package. But, on the other hand, you'll run into the occasional module that's not just 100kb on disk, but 5mb, and that's an issue. Or a new dependency that makes one of Placemark's [geospatial data converters](https://placemark.io/) take 5mb of data to boot up. So it's good to know.

So I'm tracking a lot of these metrics right now:

* The number of TODO comments in my codebase
* How long it takes for tests to run
* The size and number of JavaScript chunks created by Webpack
* The number of modules listed in package.json
* The number of warnings from eslint

That's just the start, though. Adding a new metric is extremely easy, and I'm still sending a relatively tiny amount of data to InfluxDB.

### How it works

This is thankfully pretty simple. I use [InfluxDB Cloud](https://www.influxdata.com/influxdb-pricing/), with their free, rate-limited plan for now. I might upgrade to a pay-as-you-go plan, which would be a few dollars a month to have better information retention. And then I send statistics from GitHub Actions. RIght now those stats are sent from every test run, and they aren't even segmented by branch, but Placemark uses a simple branching model - one feature branch at a time, with a stable and continuously-deployed main branch.

InfluxData themselves maintain a [GitHub Action](https://github.com/influxdata/influxdb-action) that'll download and install the client, and optionally, the server, for you. I store the configuration values in my repository's secrets, load them up with influx config create, and now I'm ready to start logging some data!

Here's the first data point that I count: the number of TODO comments in the codebase:

This is using the [line protocol](https://docs.influxdata.com/influxdb/v2.0/reference/syntax/line-protocol/), and appending each new metric to the same file. Then, at the end of the whole process, I just write that whole file to the database:

And, voila! Data is stored in a fancy, flexible time-series database. I'd bet something similar is possible with another database, like [TimescaleDB](https://www.timescale.com/), and you could even get this kind of process going with Google Sheets as a backend. It works pretty well, and at this point is a solution that costs nothing and doesn't require any new infrastructure-building.

![InfluxDB showing statistics about Placemark](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/6169909c5ff830116270f2ab_CleanShot%202021-10-15%20at%2010.30.31%402x.png)

A dashboard made from the statistics I've reported from continous integration tests

I only have a few days of data, but already I'm starting to get a little extra satisfaction from dropping dependencies and then seeing the number go down. It's fun to know.
