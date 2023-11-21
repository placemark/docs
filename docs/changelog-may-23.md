---
Name: "Changelog: May 23"
Collection ID: 616750c12c0aece979319ccd
Item ID: 628b9777ff7f0730f1ff23b9
Created On: Mon May 23 2022 14:17:27 GMT+0000 (Coordinated Universal Time)
Updated On: Sat Jul 23 2022 20:30:28 GMT+0000 (Coordinated Universal Time)
Published On: Sat Jul 23 2022 20:32:39 GMT+0000 (Coordinated Universal Time)
Post Summary: Dragging, right-clicking, importing, drawing… it's all better with
  a big batch of improvements!
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/628ba9c410ab8025e17391b0_CleanShot%202022-05-23%20at%2011.34.47%402x.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/628ba9c410ab8025e17391b0_CleanShot%202022-05-23%20at%2011.34.47%402x.png
Featured?: "true"
Date: Mon May 23 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Changelog

---

Welcome back to the Placemark changelog! Since [last time](/post/changelog-may-13), we've implemented plenty of features, fixes, and general improvements to make Placemark the best way to make maps.

‍

‍

### What's new

* **Improved **[**TopoJSON**](/documentation/topojson)** support:** each object in the TopoJSON file now becomes its own folder in Placemark. TopoJSON supports a primitive idea of grouped features, known as objects: for example, a TopoJSON file for the political boundaries of the United States might contain national, state, and congressional boundaries in their own groups. In the latest Placemark, these become [folders](/post/using-folders-to-organize-your-map-data) when they're imported.
* **You can now convert MultiPolygons into lines.** We've always supported a lot of different geometry operations - transforming polygons into lines, lines into points, points into convex hulls, splitting and joining features, you name it. This one completes the set.
* **You can now drag multiple features in the tree panel.** The left panel in Placemark, which shows the structure of your map's features and folders, supports some more operations. You can select multiple features in the panel and drag all of them into a new position or drag them into a different folder. The same goes for other "multi" actions in the left panel: if you have multiple features selected in the list and you right-click, you can now delete or modify all of them with the right-click menu.
* **Drawing new features places them in the current folder.** This was a much-requested feature: if you have a feature or a folder selected, and then you go to draw a new one, that new feature now ends up in the folder you'd expect - the one you previously had selected. It's hard to explain, but if you've noticed this you'll get it. Placemark is now smarter about where it puts new features.
* **Performance! **Sparing the long technical write-up, the core of how Placemark handles data has been rewritten with performance in mind. You should notice this especially with large datasets: previously we'd have to load a lot of data every time that a small change was made, but now it's much smoother. Performance is a forever task, so this is just one step toward the goal of buttery-smooth performance always.
* **Open source updates:** the [toGeoJSON](https://github.com/placemark/togeojson), [toKML](https://github.com/placemark/tokml), and [check-geojson](https://github.com/placemark/check-geojson) JavaScript modules that we sponsor have all been updated to support Node.js's native ESM module system.

![A Placemark map on a phone, sitting on a table](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/628bad3ac2ec40f42b902026_mobile.jpeg)

Placemark on a phone!

* **Improved mobile support.** Placemark works on phones! As part of the last design pass, the layout on phones, or extremely narrow computers, has been improved so that you can edit and browse data while on the go.

‍

![Screenshot of the geospatial file format table](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/628b9b6e10ab8072c17348a6_CleanShot%202022-05-23%20at%2010.34.07%402x.png)

[File format matrix](/format-matrix)

Check out the new [file format matrix](/format-matrix), which pulls together a lot of information into one easy spot. It covers all of the file formats currently supported by Placemark. The idea for this came up because of the surprising diversity of geospatial formats. At one end you have something like the [Polyline](/documentation/polyline) format, which can store a single line geometry only - no attributes, no styles, nothing else - and at the other you have something like [KML](/documentation/kml), which supports all geometries, hyperlinks, descriptions, styles, flight paths, you name it. Other formats, like [GPX](/documentation/gpx), are used heavily in their field, like fitness trackers, but rarely used for anything else.

Bigger isn't better, though. Complex formats like KML and - we haven't implemented it yet, but GML - suffer from their complexity, and can be especially hard to use in web applications. Formats like [GeoJSON](/documentation/geojson) are a great middle ground, and there are new formats trying to combine the best attributes of the existing ones.
