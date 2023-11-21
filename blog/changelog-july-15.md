---
Name: "Changelog: July 15"
Collection ID: 616750c12c0aece979319ccd
Item ID: 62d1badd5e164f618a210281
Created On: Fri Jul 15 2022 19:07:09 GMT+0000 (Coordinated Universal Time)
Updated On: Fri Jul 15 2022 19:08:03 GMT+0000 (Coordinated Universal Time)
Published On: Fri Jul 15 2022 19:08:16 GMT+0000 (Coordinated Universal Time)
Post Summary: Great arcs, big tables, better statistics, and more!
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62d1ba71c6f4e31155217b6f_Changelog_%20July%2015.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62d1ba71c6f4e31155217b6f_Changelog_%20July%2015.png
Featured?: "true"
Date: Fri Jul 15 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Changelog

---

*A few big features are around the corner, but in the meantime, the features & fixes keep rolling!***‍**

**Shapefile import now supports the cpg file.** This'll fix some [Shapefile](/documentation/shapefile) imports that use unusual character encodings. The Shapefile format is, in this year 2022, more of an oral tradition, a loose conglomeration of ideas, rather than a standard. And the CPG (codepage) file was introduced to communicate the file encoding of its attribute file, the DBF. Thankfully many modern file formats piggyback on an existing encoding metadata system like XML's or just support UTF encodings, like JSON.

**You can cast properties to rich text through the table interface.** Plus, when you [cast a property](/documentation/properties) to rich text - [which we introduced recently, along with a nice new editor for rich text](/post/a-big-boost-for-properties) - it'll turn strings into rich text strings and also let you turn rich text back into a plain string of HTML.

‍

**You can draw a great arc with Placemark now!** Just select any two points, right-click or use the geometry menu, and choose great arc. Fancy!

‍

**You can now make the side panels really wide.** The table view in Placemark is, if I may say so myself, really nice. So nice that you might want to work with primarily the table view and have it take up most of your screen. This is now possible! You can make the map just a sliver of the right side of the screen and make the table view take up the rest. Big tables ftw.

‍

**The statistics view now shows minimum & maximum for numbers, and most common values for strings. **Plus, it reflects any searching or filtering you've applied to the table view, and you can use search & statistics at the same time.

‍

![Vertex count in the geometry panel](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62d1bac85c29269c9421c5b7_CleanShot%202022-07-15%20at%2015.05.51%402x.png)

You can now see the number of vertices in a feature - LineString, Polygon, etc, in the geometry information panel.

**The symbolization editor now includes CARTO Colors as options for ramps.** Back in 2016, [CARTO](https://carto.com/carto-colors/) introduced this set of color presets, which are great, and make a good complement to the existing [ColorBrewer](https://colorbrewer2.org/#type=sequential\&scheme=BuGn\&n=3)-based presets. Personally, I think CARTO colors tend to be better on dark-background maps, and ColorBrewer works a bit better on lighter maps. All of these colors are professionally picked and designed with colorblindness in mind.
