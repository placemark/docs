---
Name: Shapefile
Collection ID: 61672c73ba256802311968e5
Item ID: 61f4359e688b3666c9a70a93
Created On: Fri Jan 28 2022 18:27:42 GMT+0000 (Coordinated Universal Time)
Updated On: Fri Jan 28 2022 18:27:42 GMT+0000 (Coordinated Universal Time)
Published On: Fri Jan 28 2022 18:28:13 GMT+0000 (Coordinated Universal Time)
Category: formats
Summary: The shapefile is an old, popular, and limited file format that
  Placemark supports the import and export of.

---

The shapefile, or ESRI Shapefile, is an old and popular file format that's supported by most desktop GIS systems, but is rarely used directly in web maps. Shapefiles can be a moderately efficient way to transfer larger amounts of spatial data, but they have quirks and limitations that you should be wary of:

* A shapefile is not one file, but a collection of files - typically .shp, .dbf, and .prj, but there are more than 10 different files that are often also included in the group.
* The data attached to a shapefile, contained in the .dbf file, limits the length of attribute names and values to 255 characters.
* A given shapefile can only contain one kind of feature, whether point, polygon, or linestring.

Placemark supports shapefiles as a .zip file containing .shp, .dbf, and .prj, or as those files dropped or selected into the map in one operation.

References

* [Shapefile on Wikipedia](https://en.wikipedia.org/wiki/Shapefile)
