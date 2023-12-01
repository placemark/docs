---
Name: FlatGeobuf
Collection ID: 61672c73ba256802311968e5
Item ID: 6283f61e6bdb0d3767ae03b9
Created On: Tue May 17 2022 19:23:10 GMT+0000 (Coordinated Universal Time)
Updated On: Fri Jun 03 2022 15:55:11 GMT+0000 (Coordinated Universal Time)
Published On: Fri Jun 03 2022 16:26:13 GMT+0000 (Coordinated Universal Time)
Category: formats
Summary: A new, efficient format for storing geospatial data that's similar to
  GeoJSON but produces smaller files and can be useful for some cloud computing
  challenges.

---

Placemark supports the relatively-new [FlatGeobuf](http://flatgeobuf.org/) format for both importing & exporting features. FlatGeobuf supports roughly the same features as [GeoJSON](/documentation/geojson), but in contrast to GeoJSON's text encoding, FlatGeobuf is a binary file format that's made to be small and efficient.

* The default file extension for FlatGeobuf is **fgb**.
* FlatGeobuf doesn't support complex properties like arrays or objects. Exporting to FlatGeobuf will turn these properties into strings.

#### Technical details

Placemark uses the [FlatGeobuf reference implementation](https://github.com/flatgeobuf/flatgeobuf) JavaScript module to import & export its format.
