---
Name: Comparisons
Collection ID: 61672c73ba256802311968e5
Item ID: 61673a68bfa9246933f6168b
Created On: Wed Oct 13 2021 19:58:32 GMT+0000 (Coordinated Universal Time)
Updated On: Wed Aug 10 2022 01:26:33 GMT+0000 (Coordinated Universal Time)
Published On: Wed Aug 10 2022 01:26:50 GMT+0000 (Coordinated Universal Time)
Category: guides
Summary: How Placemark compares to other tools like QGIS, ArcGIS, and OSM.

---

Here’s how Placemark relates to a few other things in the world of geospatial tools!

### Mapbox

Placemark uses a lot of pieces from [Mapbox](https://www.mapbox.com/) - technology like [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/guides/), the Mapbox geocoding service, and Mapbox's map tiles for the underlying base map. The closest product Mapbox has to Placemark is the Dataset editor in Mapbox Studio, which the author of Placemark contributed to. Placemark focuses entirely on creating, editing, and publishing data, while Mapbox Studio is mainly focused on styling and designing maps.

### geojson.io

The author of Placemark created geojson.io. Placemark aims to be the same, but better. Currently, Placemark supports formats that geojson.io doesn't, like [KMZ](/documentation/kmz) and [FlatGeobuf](/documentation/kml), uses fast new vector tile technology, supports saving maps the cloud, collaborating on them with your team, and sharing them on the site.

### OpenStreetMap

[OpenStreetMap](https://www.openstreetmap.org/) provides the map data that you see in Mapbox's base maps, as well as lots of other places on the internet. OpenStreetMap (OSM) allows map editing through the iD editor (which the creator of Placemark also worked on in its early stages), but the OpenStreetMap map is public, shared between everyone, and strictly refers to certain kinds of data like streets and businesses.

Placemark can support any type of data and is intended to be used for private data as well.

### QGIS

[QGIS](https://www.qgis.org/en/site/) is a powerful desktop tool for editing maps. It's open source and great, but can be a little intimidating to use. Placemark is meant to be simpler and easier to get started with. You might want to use both QGIS and Placemark if you need more advanced analysis.

### ArcGIS

[ArcGIS](https://www.arcgis.com/index.html) is similar to QGIS, but is an older proprietary product. It tends to be more expensive, but is powerful. Unfortunately, ArcGIS promotes and supports proprietary formats.
