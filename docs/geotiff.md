---
Name: GeoTIFF
Collection ID: 61672c73ba256802311968e5
Item ID: 628b837fc7ac456ce7592a68
Created On: Mon May 23 2022 12:52:15 GMT+0000 (Coordinated Universal Time)
Updated On: Mon May 23 2022 12:52:15 GMT+0000 (Coordinated Universal Time)
Published On: Mon May 23 2022 12:52:25 GMT+0000 (Coordinated Universal Time)
Category: formats
Summary: GeoTIFF is a format for spatial raster data, like images from
  satellites or airplanes. Placemark supports importing the bounding box from a
  GeoTIFF image, and there are many other tools to process GeoTIFF images more
  completely.

---

The GeoTIFF file format is an extension of the established [TIFF format](https://en.wikipedia.org/wiki/TIFF) that adds the ability for the image data to be georeferenced: for the corners of the image to be assigned geographical locations so that it can be placed on a map.

GeoTIFF is a [raster file format](/documentation/raster-data) - storing images, rather than shapes. Placemark primarily deals in vector data - data that's composed of shapes. So GeoTIFF import is relatively limited: Placemark can read a GeoTIFF image and extract the geographical bounds of the image, which can be useful for quickly knowing where a GeoTIFF will be located on a map. The tool does not export or edit GeoTIFFs.

GeoTIFF support is similar to [EXIF](/documentation/exif) support in Placemark, though GeoTIFFs contain bounding boxes and EXIF data only includes a single point for where the photo was taken.

#### References

* ‍[GeoTIFF](https://en.wikipedia.org/wiki/GeoTIFF)

#### Free tools for processing GeoTIFF files

* [QGIS](https://qgis.org/en/site/)
* [GDAL](https://gdal.org/)
