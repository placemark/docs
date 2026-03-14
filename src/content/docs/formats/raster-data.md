---
title: "Raster Data"
description: "Pixel-oriented data, often with many color and spectrum bands."
---

Placemark doesn't support editing, creating, or analyzing raster data. We recommend tools like [QGIS](https://www.qgis.org/en/site/) to work with raster data, or if you'd like to write scripts and software to work with that data, the [rasterio](https://rasterio.readthedocs.io/en/latest/) Python library.

Placemark does support importing* *metadata from two kinds of raster data sources: [EXIF](/documentation/exif), which is usually embedded in JPEG photos taken by cellphones with GPS, and [GeoTIFF](/documentation/geotiff), which is a standard format for satellite, terrain, and other kinds of earth observation data. EXIF data contains points and GeoTIFF data contains bounding boxes that can be extracted and displayed on the map.
