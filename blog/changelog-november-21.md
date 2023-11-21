---
Name: "Changelog: November 21"
Collection ID: 616750c12c0aece979319ccd
Item ID: 63769b34db029f4caa7daada
Created On: Thu Nov 17 2022 20:36:04 GMT+0000 (Coordinated Universal Time)
Updated On: Mon Nov 21 2022 15:17:35 GMT+0000 (Coordinated Universal Time)
Published On: Mon Nov 21 2022 15:17:41 GMT+0000 (Coordinated Universal Time)
Post Summary: Big and little improvements to how you can make custom maps and
  edit geospatial data with Placemark
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/637b9596aaccb8cc35125fad_Changelog%20-%20Nov%2021.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/637b9596aaccb8cc35125fad_Changelog%20-%20Nov%2021.png
Featured?: "true"
Date: Mon Nov 21 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Product

---

There's a lot of small and big improvements around here lately!

### Improved KML import with Schema

Placemark tries to maintain and respect the data types of everything it imports and exports. The attributes that come in a [KML](/documentation/kml) file are by default strings: unlike GeoJSON, which inherits from JSON, the XML format that KML is a subset of doesn't have the idea of a "literal number." But KML does have a way to specify attribute types, with a Schema object.

And… long story short, Placemark now supports the Schema object, so if you're importing some KML that's been carefully generated to declare something a number, string, or boolean attribute, that type will be imported into the map.

This upgrade comes from Placemark's [toGeoJSON module](https://github.com/placemark/togeojson), which is open source and free for anyone to use! And specifically, thanks to a contribution by [Per Liedman](https://github.com/perliedman). Thanks!

### Better folder selection

![](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/63769b61ce670c56378e7d28_CleanShot%202022-11-17%20at%2015.36.35%402x.png)

Selecting all the features in a folder by clicking on the folder

Placemark has a really powerful selection system: you can select a feature, vertexes within a feature, multiple features, a folder, you name it. Folder selections have been upgraded so that if you select a folder, the feature editor lets you edit all the features in that folder, including those in nested folders.

### Export to SVG using the current viewport

![Exporting features in the current viewport](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/63769ba018ccbf5a09282051_CleanShot%202022-11-17%20at%2015.37.31%402x.png)

The fresh new SVG export system already got an upgrade: you can now export your current viewport’s features as SVG. Plus new projections - [Azimuthal Equal Area](https://en.wikipedia.org/wiki/Lambert_azimuthal_equal-area_projection) and [Conic Equidistant](https://en.wikipedia.org/wiki/Equidistant_conic_projection). Fun!

### Search for features by their attributes

![Searching for features using their properties](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/63769aeb986017625b131b8c_CleanShot%202022-11-17%20at%2015.34.03%402x.png)

Looking for a feature? Now the search interface - that you can trigger with **command-k**, or by clicking on the magnifying lass - includes features! So you can search for a feature property, zoom to, and select it, really quickly.

### Improved dragging

![](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/63769c50d4563f3eac07f247_CleanShot%202022-11-17%20at%2015.40.16%402x.png)

It might not look that flashy, but the experience of dragging a feature or a folder in the left pane has gone through another thorough improvements. Creating a sortable, nested list that supports other interactions, scales to thousands of items - not easy! Thanks to [dndkit](https://dndkit.com/) and [virtual](https://tanstack.com/virtual/v3), the building blocks that make this possible, but whew, it is not easy.
