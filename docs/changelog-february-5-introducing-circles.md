---
Name: "Changelog: February 5 - Introducing Circles!"
Collection ID: 616750c12c0aece979319ccd
Item ID: 63e0669610d0b97ac2607f7b
Created On: Mon Feb 06 2023 02:31:50 GMT+0000 (Coordinated Universal Time)
Updated On: Mon Feb 06 2023 02:31:50 GMT+0000 (Coordinated Universal Time)
Published On: Mon Feb 06 2023 13:27:19 GMT+0000 (Coordinated Universal Time)
Post Summary: Improvements including circle drawing, CSV import types, and
  better autocomplete in the table
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/63e066894fd49b322aa5d781_Circles%20-%20Feb%205.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/63e066894fd49b322aa5d781_Circles%20-%20Feb%205.png
Featured?: "true"
Date: Mon Feb 06 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Product

---

After a brief end-of-year pause, welcome back to the Placemark changelog! We've got some good new stuff to introduce.

‍

### Drawing circles

‍

‍

This one was requested for a long time: the ability to draw circles. I could write about circles for hours, but I'll try to summarize why circles on maps are a *bit odd*, and why this feature includes three different kinds of circles.

Placemark is a tool that really embraces open geospatial [formats](/format-matrix). If you are coming from the world of drawing tools, or even technologies like [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg), the standard for putting graphics in webpages, you might expect those formats to support the idea of a "circle", and be surprised that virtually none of them do. There are a few formats that do support circles, like the tremendously complex [GML](https://en.wikipedia.org/wiki/Geography_Markup_Language) format, but generally none of the geospatial data types that you'll come across support the idea of a circle - not ESRI Shapefiles, not GeoJSON, or KML, or WKT.

The reason why most formats don't support circles is in part because most formats are based on a meta-format, the Simple Features Standard (brace for [PDF link](https://www.ogc.org/standards/sfa)), and most formats only support part of it, and that specification doesn't have circles (though it does have curves). The other reason is that circles are really hard to define.

Placemark's implementation of circle drawing allows for three distinct kinds of circles, but there are certainly more. They are:

1. **Geodesic circles.** These have a constant radius in real-world units. If you're taking about a circle with a "one mile radius", then it's a geodesic circle.
2. **Degrees circles.** These have a constant radius in decimal degrees, longitude and latitude. Let's say you have a circle with a "one degree radius", then that's a circle in degrees. This is probably the kind of circle you'd make if you were writing an algorithm to make circles - [just spinning sine and cosine functions around a circle using some math](https://macwright.com/2013/03/05/math-for-pictures.html).
3. **Mercator circles.** These circles look like circles on a Mercator map, which is the kind of map that Placemark uses: it uses the Mercator projection. The circles that you can draw in this mode *look* right, but they don't have any direct relationship to the kind of circle you'd usually talk about - they aren't a "one mile radius" around anything.

In maps using the Web Mercator projection - the kinds of maps that Placemark supports - the circles that have easy definitions, like "a one mile radius", will often look odd, and the circles that look correct and look like circles, don't have such a simple definition. For example, here's a circle placed over Greenland: if you look closely, it's an ellipse, not a perfect circle.

‍

![A circle placed over Greenland](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/63e06142dd10660b243df578_CleanShot%202023-02-05%20at%2021.08.39%402x.png)

You can really dive into this subject by checking out [Tissot's Indicatrix(es?)](https://en.wikipedia.org/wiki/Tissot%27s_indicatrix), which put circles on common projections to show how each projection deforms the shapes, orientation, and size of circles. Thanks to the [Theorema Egregium](https://en.wikipedia.org/wiki/Theorema_Egregium), we know that this is inevitable and unavoidable as a result of representing a 3D earth as a 2D map, but there are different compromises we can take - different map projections with different kinds of distortion.

And that's how we ended up with a circle drawing tool that supports three different kinds of circles! And, due to the lack of support in the base file formats, those circles are represented by polygons with many nodes.

In Placemark's implementation of circles, those circles keep being the same kind of circle with the same radius when you move them around: if you draw a geodesic circle at the equator with a certain radius, it'll get bigger if you move it north or south, due to the distortion of the Web Mercator projection. You can convert a circle into a polygon, though, by moving one of its nodes while pressing **Command**, or by deleting its "circle" property.

‍

![The "circle" property of a circle](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/63e063183700f091f9d8be04_CleanShot%202023-02-05%20at%2021.16.33%402x.png)

‍

### More improvements

![CSV import options including a new "polyline" option](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/63e06382bb9f18bb9f4dc3da_CleanShot%202023-02-05%20at%2021.18.16%402x.png)

You can now import [CSV](/documentation/csv) files with [encoded polylines](/documentation/polyline)! CSV importing has gotten really powerful - 7 different options within the CSV importer. Oh, and this works for Excel files too. And you can now *export* polylines via the CSV export too - it supports all features with LineString geometries.

‍

![](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/63e0643403e95f6e41023461_CleanShot%202023-02-05%20at%2021.21.24%402x.png)

The feature table has always supported auto-completion drawn from the existing values of features, but it was previously limited to only the some of the most popular values. It's much improved now - even gigantic datasets with lots of distinct values will now have useful autocomplete in the table interface.

‍

### Figma Plugin Changelog

There's plenty new on the [Placemark Figma Plugin](https://www.figma.com/community/plugin/1189962635826293304/Placemark), too! Since[ I introduced it last month](/post/placemark-for-figma), it's gained labeling for streets and areas, as well as vastly improved data limits.

![](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/63e0654f6af00b61636169c8_CleanShot%202023-02-05%20at%2021.24.58%402x.png)

‍

Also new is a settings page that lets you copy the generated map's bounding box so you can use it in other tools (like Placemark, which supports zooming to bounding boxes, importing them as rectangles, exporting them, and more). And font size, for the labels, and the ability to go to the relevant area in Google or OSM. Over 1,500 folks have tried it out - [it's free on the Figma Community site](https://www.figma.com/community/plugin/1189962635826293304/Placemark).

‍

![](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/63e065a23700f02ea7d8f861_CleanShot%202023-02-05%20at%2021.27.23%402x.png)

‍

‍

And that's it for this update. Thanks as always for sending suggestions and supporting Placemark, and here's to a happy 2023!
