---
title: "KML"
description: "Google Earth's native format and a popular export from consumer mapping tools."
---

KML is a format for geospatial data. It's based on XML in the same way that [GeoJSON](/documentation/geojson) is based on JSON: a KML file is a particular structure and kind of XML file. KML was created by Keyhole, a company Google acquired and turned into Google Earth, and is now maintained by Google and the OGC.

KML has some unique features, mostly by virtue of being designed with Google Earth in mind. It can store styles alongside geometry. It can store "flight paths" for automatically panning and sweeping through maps. KML files can also contain NetworkLink objects, which let them refer to other KML files that could be on the internet or local.

KML can contain styles for features - a line in KML can be "red" or "blue". This is a relatively unique feature in geospatial data - see the [format feature matrix](/format-matrix) for official style support. KML styles are transformed into [simplestyle](/documentation/simplestyle) when they're imported into Placemark and you can view them by changing your map's [visualization](/documentation/visualization) mode to simplestyle.

#### Technical details

The Placemark team maintains and uses the [toGeoJSON](https://github.com/placemark/togeojson) JavaScript library to import KML files. KML files can be both imported & exported with Placemark.

#### References

* [KML Reference on Google](https://developers.google.com/kml)
