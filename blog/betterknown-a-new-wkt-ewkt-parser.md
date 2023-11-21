---
Name: "Betterknown: a new WKT & EWKT parser"
Collection ID: 616750c12c0aece979319ccd
Item ID: 6306600c3883486dfcccd540
Created On: Wed Aug 24 2022 17:29:48 GMT+0000 (Coordinated Universal Time)
Updated On: Wed Aug 24 2022 17:31:30 GMT+0000 (Coordinated Universal Time)
Published On: Wed Aug 24 2022 17:31:34 GMT+0000 (Coordinated Universal Time)
Post Summary: Placemark's new open source WKT & EWKT parser, and a review of our
  existing open source modules.
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/63065fd488cfb63fda54abaa_Betterknown.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/63065fd488cfb63fda54abaa_Betterknown.png
Featured?: "true"
Date: Wed Aug 24 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

Our approach to open source is pretty simple: use a lot of it, make some of it, and maintain the things we release as best we can. The best open source projects are the ones heavily used by their creators. Placemark is an especially good place for open source projects to mature: when there's a bug in a parser, generator, or another utility, it'll usually show up because of the many different kinds of data and tasks that people do with this system.

### Placemark's open source projects

If you aren't familiar with our open source projects, here are the existing ones:

* [toGeoJSON](https://github.com/placemark/togeojson) is a module that Tom started working on in 2013! Such a long time ago. It converts [KML](/documentation/kml), [GPX](/documentation/gpx), and [TCX](/documentation/tcx) - three very popular, XML-based geospatial formats - into GeoJSON. Over the years it's grown to include lots of little features, like support for folders, feature visibility, streaming parsing, GPX extensions, and a lot more. Placemark's fork is used in the importer. At this point, it's super battle-tested, but with our maintenance it'll keep getting better.
* [toKML](https://github.com/placemark/tokml) converts GeoJSON into KML. This one also goes way back, but it's now maintained under the Placemark umbrella and has gotten features like visibility & folder support, plus TypeScript types to make it easier to integrate into applications.
* [check-geojson](https://github.com/placemark/check-geojson) is the successor to the longstanding [geojsonhint](https://github.com/mapbox/geojsonhint) module, also written by Placemark's creators. It takes geojsonhint's mission a step further by reporting more specific errors and letting you import only the "good" data from partially-valid files.

Today we're adding another one: [betterknown, a new parser and stringifier for WKT](https://github.com/placemark/betterknown).

### Betterknown

WKT parsing & stringification can be a challenge. We wrote [wellknown](https://github.com/mapbox/wellknown), a WKT parser & stringifier, years ago. But it had quite a few basic limitations and was too liberal in the inputs it would accept. Plus, it hasn't been maintained since 2017. Not great. There's also [wkx](https://github.com/cschwarz/wkx), which was maintained until 2020 and is better than wellknown in some ways - its parser is more mature - but also a large dependency and has some inelegant API touches.

Betterknown aims to be the synthesis of the two - wellknown's simplicity, wkx's correctness, and maintained and updated for software in 2022. It combines parts of wkx, crediting Christian Schwarz's amazing work, with new touches and improvements.

* Written in TypeScript, includes its own types
* Only 1.5kb [minified & gzipped](https://bundlephobia.com/package/betterknown@1.0.2)
* [Well-documented](https://placemark.github.io/betterknown/)
* Support for EWKT with pluggable reprojection

Betterknown is powering Placemark's support for WKT import & export, and will get better as we put it through its paces in production. [Try it out - it's now on GitHub!](https://github.com/placemark/betterknown)
