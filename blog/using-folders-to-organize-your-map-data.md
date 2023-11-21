---
Name: Using folders to organize your map data
Collection ID: 616750c12c0aece979319ccd
Item ID: 627d330a66bd7dd66de94275
Created On: Thu May 12 2022 16:17:14 GMT+0000 (Coordinated Universal Time)
Updated On: Sat Oct 08 2022 19:35:39 GMT+0000 (Coordinated Universal Time)
Published On: Sat Oct 08 2022 19:37:54 GMT+0000 (Coordinated Universal Time)
Post Summary: Nestable, nameable, hidable folders are a great way to organize your maps.
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/627d324af926427408f245a9_folders.jpg
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/627d324af926427408f245a9_folders.jpg
Featured?: "true"
Date: Thu May 12 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Product

---

Here's a Placemark feature that was spawned out of user feedback and has been a real game-changer: folders.

![](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/627d324af926427408f245a9_folders.jpg)

Folders are everywhere: in your computer's operating system, in some email clients, in many photo-editing tools, and more. But many map editing tools don't have them.

This is partly an artifact of history. Older geospatial formats are extremely limited in what they can do. Popular formats like [ESRI Shapefile ](/documentation/shapefile)and [GeoJSON](/documentation/geojson) doesn't support folders.

In fact, the only common geospatial format that supports folders is [KML](/documentation/kml). Targeting great KML support is part of the reason why Placemark supports folders, but it isn't the only one.

Folders are just really useful.

Often to make a map, you're going to import multiple files. Placemark supports [importing a lot of different file formats](/documentation/importing), and there's a lot of map data you can find on the map, just by searching for, say, "DC Metro Stations KML." But you don't want to just combine all of those files into the same mess of map data. With folders, you can keep different datasets separate while editing them as one map.

Here's an example with DC Metro stations. Metro Lines are in one folder, Metro Stations are in another. I was cropping the lines to show just a few segments of Metro access in DC. With folders, I could cross-reference the Metro stations but only export the edited lines.

![A map showing subway lines in DC, styled](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/627d31ca72023be7b7b81053_CleanShot%202022-05-12%20at%2011.56.47%402x.png)

Using folders to map DC Metro Stations

Plus, you can nest folders. Here's that same "metro map" concept expanded to multiple cities - I created a DC folder using the "Add folder" icon on the left side, and a San Francisco folder for Muni data.

![A map showing multiple folders with multiple transit systems as data](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/627d31de1ad1ef7e6169a153_CleanShot%202022-05-12%20at%2012.00.55%402x.png)

Nesting folders to map both DC & San Francisco

When I go to export, I can choose to just export the SF data, DC data, all of the data, or some subset. If I export to KML, the folder structure is preserved - otherwise features in nested folders are flattened.

![Export dialog showing the ability to export only one folder](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/627d31f10fb453c48f59d83e_CleanShot%202022-05-12%20at%2012.02.39%402x.png)

Choosing which folders to export

You can also lock and hide folders, using the Lock & Eye icons next to them. This is super useful if, for example, you're using a map of districts or regions as a reference point to edit other data and you don’t want to accidentally select the underlying data.

![Layers list showing the ability to toggle layer visibility](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/627d31ff90a1ee6bd58bfa90_CleanShot%202022-05-12%20at%2012.08.13%402x.png)

Showing & hiding folders

#### A standard for folders in JSON

What we're doing with folders is a bit new, but following Placemark's philosophy of building with open source and contributing back, we've published [a proposed standard for representing geospatial data in a GeoJSON-like format, but with folders, called geojson-folders](https://github.com/placemark/geojson-folders). The discussion on that format will run for a while before there's a 1.0 release of the specification, which will also work out of the box with Placemark's open-sourced format converters, [toGeoJSON](https://github.com/placemark/togeojson) and [tokml](https://github.com/placemark/tokml).

‍

#### Start mapping with folders!

[Sign up for a Placemark account](/pricing) and start using folders today!
