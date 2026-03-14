---
title: "FlatGeobuf"
description: "A new, efficient format for storing geospatial data that's similar to"
---

Placemark supports the relatively-new [FlatGeobuf](http://flatgeobuf.org/) format for both importing & exporting features. FlatGeobuf supports roughly the same features as [GeoJSON](/documentation/geojson), but in contrast to GeoJSON's text encoding, FlatGeobuf is a binary file format that's made to be small and efficient.

* The default file extension for FlatGeobuf is **fgb**.
* FlatGeobuf doesn't support complex properties like arrays or objects. Exporting to FlatGeobuf will turn these properties into strings.

#### Technical details

Placemark uses the [FlatGeobuf reference implementation](https://github.com/flatgeobuf/flatgeobuf) JavaScript module to import & export its format.
