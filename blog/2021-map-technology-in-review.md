---
Name: 2021 Map technology in review
Collection ID: 616750c12c0aece979319ccd
Item ID: 61c3920233dfbeac844b6a7a
Created On: Wed Dec 22 2021 21:00:50 GMT+0000 (Coordinated Universal Time)
Updated On: Sat Oct 08 2022 19:33:50 GMT+0000 (Coordinated Universal Time)
Published On: Sat Oct 08 2022 19:37:54 GMT+0000 (Coordinated Universal Time)
Post Summary: From image formats to satellites, what seemed inspiring in
  geospatial technology this year.
Main Image: ""
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61c4921e54d0ca62a1eab475_Map%20tech%202021.png
Featured?: "true"
Date: Thu Dec 23 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Product

---

With so much happening in the geospatial industry, it's hard to keep track of everything, much less to find some overarching storyline in it all. Nevertheless, in an attempt at sense-making, I'm going to try and highlight the things that felt like *big news* this year, and what's on the horizon. Let's dive in!

### Planet goes public

![A satellite rendering of a cube set](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61c39358a3ec8421b93c61a0_planet.jpg)

Planet Labs satellite launch from the ISS ([PD](https://en.wikipedia.org/wiki/Planet_Labs#/media/File:Planet_Labs_satellite_launch_from_ISS.jpg))

[Planet Labs](https://www.planet.com/), a satellite company famous for deploying lots of small satellites, went public through a [SPAC merger](https://en.wikipedia.org/wiki/Special-purpose_acquisition_company). There aren't many imaging-satellite companies out there, so this is pretty big news. Plus, they make really neat looking photos. We're still very far away from the day that an ordinary person can point a satellite at the earth and take a custom picture with just a website, but we're getting there.

![Off-nadir imagery showing a steep set of mountains](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61c393ab60e088d41db2b3bd_planet-mountains.jpg)

SkySat sample image ([CC-BY-SA 4.0](https://en.wikipedia.org/wiki/SkySat#/media/File:Monte_Fitz_Roy_19Mar2018_SkySat.jpg))

### Second-generation API companies sprout up

One of the more interesting company evolutions I've seen is Foursquare. It started as a social-mobile-local app, which Dennis Crowley thought would [segue into a recommendation engine](https://www.inc.com/chris-beier-and-daniel-wolfman/dennis-crowley-foursquare.html), but instead grew into a two-sided business which produces marketing & spatial data for businesses and investors. Now their [website is just about the second part of the business](https://foursquare.com/), not the first, and they do things like [acquire geospatial analytics companies](https://foursquare.com/products/unfolded/).

Learning from that, it seems like we're skipping some steps now: [Iggy is just doing the data & machine-learning part](https://www.askiggy.com/) that some startups want. On a similar wavelength, [Next Billion](https://nextbillion.ai/) is just intentionally building the product that a company like Uber or GrubHub would want, an API-centric thing specifically for gig and delivery use-cases.

### Adaptive projections hit the mainstream

![Mapbox map demonstrating new support for projections](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61c393664a869456dbc78141_mapbox-gl-projections.png)

Map projections - [the way you transform a 3D globe onto a 2D page](https://macwright.com/2012/01/27/projections-understanding.html) - have long been a point of conflict in the world of maps. The default projection for most web maps, Web Mercator, does an exceptionally bad job at representing a global view of the world with correct sizes.

So every year someone rediscovers that Web Mercator distorts land masses, and we have a big conversation about how, for zoomed-out maps, that's true and problematic. But Web Mercator has been dominant for a long time, for a number of practical and happenstance reasons that I won't get into here.

This year, [Mapbox GL JS introduced proper adaptive projections](https://docs.mapbox.com/mapbox-gl-js/guides/projections/), allowing people to use any projection they like for the global view, while transitioning back to Web Mercator for zoomed-in maps. And Google Maps has been showing a sphere for zoomed-out views, which also transitions to Web Mercator for zoomed-in maps. So, a big swath of web maps can finally shake free the bonds of Web Mercator as a global view.

This wasn't evenly distributed. The version of Google Maps you can use as a developer doesn't really support custom projections yet - there's [a very, very hacky example](https://developers.google.com/maps/documentation/javascript/examples/map-projection-simple), which isn't very useful.

### Hot new image formats

WebGL-powered vector mapping tech aside, a lot of maps have satellite data and other sorts of raster data - and *lots of it*. So efficient raster formats have been a big focus for a long time.

The state of the art used to be [WebP](https://developers.google.com/speed/webp), but new as of last year, [AVIF](https://caniuse.com/avif) is the new kid of the block, and browser support is growing. AVIF was announced in 2020, but it takes a while for browser support to be high enough for switching to become worthwhile.

The obvious metric for these formats is size versus quality. WebP did a bit better than JPEG, and AVIF improves upon WebP. But if you're working in maps and mostly use JPEG, the other big advance is the *alpha channel*. The JPEG format doesn't support an alpha, or transparency, channel, so it doesn't work well for any image overlay on a map that doesn't cover the entire earth. These new formats do! Plus, WebM video supports alpha transparency, so you could do animated video overlays on a map. Niche stuff. But cool.

### Two semi-anonymous mesh networks emerge

That is, [contact tracing](https://covid19.apple.com/contacttracing) and [AirTags](https://www.apple.com/airtag/). This kind of passive, always-on tracking has been tried before with [beacons](https://developer.apple.com/ibeacon/), but that approach didn't catch on, or at least I've never encountered it in any setting.

Whether this sort of tracking technology becomes ubiquitous in the long-term is anyone's guess. The rollout [has not gone very well](https://www.theverge.com/2021/11/10/22774124/ios-15-2-beta-2-airtag-tracker-scan-privacy-invasion): people are [really scared](https://www.theverge.com/2021/6/3/22516178/apple-airtags-tracking-devices-update-play-sound-privacy-android-app) of AirTags. But technology always simultaneously tests and affects people's expectations and privacy tolerance. And penetration of technology is always uneven: my security-conscious friends almost entirely swear off smart-home technology, but around 1 in 4 Americans [have a smart speaker](https://rainnews.com/npr-edison-smart-audio-report-finds-157-million-smart-speakers-are-in-u-s-households/) with an always-on microphone in their house.

### What didn't happen

There aren't any fully-autonomous, legally-operated cars in America. The self-driving car storyline was central to some of the geospatial world's marketing about HD maps. From what I'm seeing of the early prototypes, self-driving isn't coming anytime soon.

Augmented reality is still very hypothetical. But virtual reality had a big year, judging by the number of people using [Zwift]() to virtually bicycle in the alps, from the comfort of their Peloton nook.

### What's on the horizon

I'll make some guesses about what's next. It's fun to guess!

* I think that "edge compute", the idea that's currently being pushed by [Cloudflare Workers](https://workers.cloudflare.com/) and [Deno Deploy](https://deno.com/deploy), is a match made in heaven for a lot of geospatial tech. Tile-based web maps are wildly parallel and extremely performance-critical. There are use-cases like optimizing vector tiles based on the style they're paired with, that would fit into the edge compute model very neatly. Or things like optimizing your JPEG map tiles to WebP and AV1 - a perfect fit for edge compute.
* Collaboration technology had a *huge* year, as everyone transitioned into remote work or doubled-down on remote work being a semi-permanent state. Some of the tech underpinning collaboration, like [CRDTs](https://crdt.tech/), seems like it could revolutionize parts of geospatial technology in the long run. That said, map data is possibly one of the hardest things to fit into collaboration - it's large, complex, and has inter-relations.
* Map technology tends to be performance-critical - it's one of the things pushing adoption of WebGL, binary formats in the frontend, and basically all vector maps use cutting-edge tech like WebWorkers. So there's big potential for it to level-up with [Rust](https://www.rust-lang.org/), for better control over memory and performance, and [WebAssembly](https://webassembly.org/), to run that memory-managed code in the browser. So far this hasn't happened! There are experiments of cross-compiling desktop map renderers to the web, but they tend to be slow and half-baked. But it seems likely that in the next few years we see a new map renderer that cuts out the JavaScript.
