---
title: "GeoTIFF"
description: "GeoTIFF is a format for spatial raster data, like images from"
---

The GeoTIFF file format is an extension of the established [TIFF format](https://en.wikipedia.org/wiki/TIFF) that adds the ability for the image data to be georeferenced: for the corners of the image to be assigned geographical locations so that it can be placed on a map.

GeoTIFF is a [raster file format](/documentation/raster-data) - storing images, rather than shapes. Placemark primarily deals in vector data - data that's composed of shapes. So GeoTIFF import is relatively limited: Placemark can read a GeoTIFF image and extract the geographical bounds of the image, which can be useful for quickly knowing where a GeoTIFF will be located on a map. The tool does not export or edit GeoTIFFs.

GeoTIFF support is similar to [EXIF](/documentation/exif) support in Placemark, though GeoTIFFs contain bounding boxes and EXIF data only includes a single point for where the photo was taken.

#### References

* ‍[GeoTIFF](https://en.wikipedia.org/wiki/GeoTIFF)

#### Free tools for processing GeoTIFF files

* [QGIS](https://qgis.org/en/site/)
* [GDAL](https://gdal.org/)
