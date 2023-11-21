---
Name: "Polyline: a spruced-up polyline utility"
Collection ID: 616750c12c0aece979319ccd
Item ID: 633f273beb4a6e2800f2a219
Created On: Thu Oct 06 2022 19:06:35 GMT+0000 (Coordinated Universal Time)
Updated On: Thu Oct 06 2022 19:17:13 GMT+0000 (Coordinated Universal Time)
Published On: Thu Oct 06 2022 19:17:22 GMT+0000 (Coordinated Universal Time)
Post Summary: A new encoded polyline converter that works well with TypeScript
  and modern applications.
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/633f265ec8fd3d9c239af681_Polyline.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/633f265ec8fd3d9c239af681_Polyline.png
Featured?: "true"
Date: Thu Oct 06 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

To make a great application, we have to use quality ingredients. Placemark needed an [encoder and decoder for the Google Encoded Polyline](/documentation/polyline) format, so we decided to create a freshened up module for it. It's based off of the [Mapbox module](https://github.com/mapbox/polyline) (originally from the same author as Placemark), but ready for today's applications. Check out the [@placemarkio/polyline module](https://github.com/placemark/polyline).

![Placemark Polyline module code sample](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/633f29aa16f70e224850843c_CleanShot%202022-10-06%20at%2015.16.25%402x.png)

What does that mean? Well, a few things. The ergonomics of a good JavaScript module have changed dramatically in the last few years. It's important to support ESM imports, so that you can use JavaScript's native module system and also[ use systems like Observable](https://observablehq.com/@tmcw/polyline) with your modules, without a build step. Plus, you'll want TypeScript types, and embedded documentation, so you can be sure that you won't run into TypeErrors in production. It's good to have [standard, generated documentation, too](https://placemark.github.io/polyline/). Plus, few - or no - dependencies and a small bundle size.

I'm a big fan of JavaScript and excited about its future, but I won't lie - getting all of this to work is hard. It's really easy to make a module that works when you use it with Node, but doesn't work with a browser or a bundler. Thanks to work on [betterknown](/post/betterknown-a-new-wkt-ewkt-parser), check-geojson, and other [open source modules](/open-source) published by Placemark, a lot of knowledge and configuration can be reused from one project to another. That way I can publish modules that support Node.js's very new entry points, while also supporting CommonJS and UMD usage.

But enough about JavaScript nitpicks: what @placemarkio/polyline brings is:

* Included, robust TypeScript types with embedded documentation
* ESM & UMD entry points
* Standardized longitude, latitude order in all functions
* Reduced dependencies for a lighter install
* Active maintenance

[You can install **@placemarkio/polyline**](https://github.com/placemark/polyline), use it to encode and decode Google Encoded Polylines and GeoJSON back and forth. It's what Placemark uses for this conversion, when you import and export features. Check it out!
