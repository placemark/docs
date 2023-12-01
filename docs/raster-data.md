---
Name: Raster Data
Collection ID: 61672c73ba256802311968e5
Item ID: 6167300b41252493482749fe
Created On: Wed Oct 13 2021 19:14:19 GMT+0000 (Coordinated Universal Time)
Updated On: Mon May 23 2022 12:54:40 GMT+0000 (Coordinated Universal Time)
Published On: Mon May 23 2022 12:54:46 GMT+0000 (Coordinated Universal Time)
Category: formats
Summary: Pixel-oriented data, often with many color and spectrum bands.

---

Placemark doesn't support editing, creating, or analyzing raster data. We recommend tools like [QGIS](https://www.qgis.org/en/site/) to work with raster data, or if you'd like to write scripts and software to work with that data, the [rasterio](https://rasterio.readthedocs.io/en/latest/) Python library.

Placemark does support importing* *metadata from two kinds of raster data sources: [EXIF](/documentation/exif), which is usually embedded in JPEG photos taken by cellphones with GPS, and [GeoTIFF](/documentation/geotiff), which is a standard format for satellite, terrain, and other kinds of earth observation data. EXIF data contains points and GeoTIFF data contains bounding boxes that can be extracted and displayed on the map.
