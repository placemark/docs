---
Name: It's still too hard to make maps
Collection ID: 616750c12c0aece979319ccd
Item ID: 61f032dfa2fb87c592be68a5
Created On: Tue Jan 25 2022 17:26:55 GMT+0000 (Coordinated Universal Time)
Updated On: Sat Oct 08 2022 19:34:15 GMT+0000 (Coordinated Universal Time)
Published On: Sat Oct 08 2022 19:37:54 GMT+0000 (Coordinated Universal Time)
Post Summary: It's too hard to make a map. It's also hard to say what making a map is.
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61f032be92293f4877f6972d_still-hard-map.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61f032be92293f4877f6972d_still-hard-map.png
Featured?: "true"
Date: Tue Jan 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Product

---

One reason why I'm building Placemark is that *it's still too hard to create maps*. I think that's true, but I also enjoy precision, and I know that statement is all too vague.

Most of the vagueness is caused by that phrase "create maps." Off the top of my head, making a map might mean:

* Opening Google Earth or Google My Maps and dropping a few points with descriptions onto a map, and sharing that.
* Building a full-fledged web application that centers on an embedded map using [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/) or the [Google Maps API](https://developers.google.com/maps).
* Designing a new cartographic style for [OpenStreetMap](https://openstreetmap.org/) or using vector tiles or rendering with [Mapnik](https://mapnik.org/).
* Processing raw raster data to produce mosaics, and then turning those mosaics into satellite maps.
* Working on a dataset by editing the data itself in OpenStreetMap, or creating a derived dataset by writing complex SQL queries to generate vector tiles.

Some of these tasks are completely orthogonal. You can spend all day creating an interactive web map experience without changing cartographic styles or creating geographic data.

![The iD interface for editing OpenStreetMap ](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61f03104b3cacd794204cb17_CleanShot%202022-01-25%20at%2012.18.51%402x.png)

The OpenStreetMap Editor, including OSM data, © OpenStreetMap contributors

You can edit OpenStreetMap all day long without touching a line of code or choosing a color.

![A screenshot of a minimal OpenStreetMap style](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61f03125a6eecf92e615b016_sanfrancisco-15.jpeg)

Mike Migurski's HighRoad project, which correctly orders stacked highways and bridges

There are major contributions to cartography that are things like [highway stacking orders](https://github.com/migurski/HighRoad), which exist in a space between data, code, and style.

It's complicated because map creation is a system inside of a system. Some real-world inputs flow into it – national borders from the United Nations, images from a satellite, GPS coordinates – and outputs like websites and PDFs and images flow out of it. And in the middle is the complex map creation ecosystem.

Why is that ecosystem complex?

### Diverse uses

In part because of all of those different kinds of inputs and outputs: the world of maps is so varied and its data is so expansive that there are few one-size-fits-all technologies. [Shapefiles](/documentation/shapefile) were a popular format, but are painful to use with web applications, so you might want to use [GeoJSON](/documentation/geojson) instead. If the data's too large for that, you've got [OSM XML](https://wiki.openstreetmap.org/wiki/OSM_XML) and databases like [PostGIS](https://wiki.openstreetmap.org/wiki/PostGIS). The world would be simpler if there was just one format, but it's not just [the challenge of consensus](https://xkcd.com/927/) causing the format diversity.

### Data isn't visual

It's also complex because map data isn't visual: with the exception of the [KML format](/documentation/kml), a geographical line or point doesn't have a color or width or any other set style properties. It's analogous to the difference between HTML and CSS - map styles define [presentation semantics](https://en.wikipedia.org/wiki/Presentation_semantics). But it's a stark difference to how things like graphics editors - which look, on the surface, quite similar, work.

### A lot of map-makers are professionals

Before apps like SnapChat and TikTok swept through an entire generation, video editing was *hard*. If you were learning how to use Final Cut or Premier, chances were that you'd watch tutorials, take a class, or actually read the manual. Even iMovie is pretty complex. When these desktop applications reigned, a lot of the people making videos were working on capital-v Video projects, films or commercials or shorts, and they were willing to spend the time to sweat the details.

But now that everyone has a 4k video camera in their pocket and social capital to be won by publishing 30 second shorts, investment in easy, tailored video editing tools is rushing in. There's a market in the low to medium range of skill and commitment that there wasn't before.

A lot of the people editing maps today are still pros. They're working for your city planning department or National Geographic or some oil drilling concern. They are deeply about specific capabilities and outcomes and are willing - not happy, but willing - to put up with kludgy software to get there.

Placemark aims to reinvent part of the map-making process. It won't replace the whole ecosystem, or make mapmaking truly easy for everyone in that list. We're starting with data - creating, editing, collaborating on data. I think that part is still too hard, and the tools could be better. Data editing is an afterthought for companies whose main business is an API or something else. It's the centerpiece of Placemark, the place we'll expand out from.
