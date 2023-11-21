---
Name: GeoTIFF
Collection ID: 61672c73ba256802311968e5
Item ID: 628b837fc7ac456ce7592a68
Created On: Mon May 23 2022 12:52:15 GMT+0000 (Coordinated Universal Time)
Updated On: Mon May 23 2022 12:52:15 GMT+0000 (Coordinated Universal Time)
Published On: Mon May 23 2022 12:52:25 GMT+0000 (Coordinated Universal Time)
Body: <p>The GeoTIFF&nbsp;file format is an extension of the established <a
  href="https://en.wikipedia.org/wiki/TIFF">TIFF format</a> that adds the
  ability for the image data to be georeferenced:&nbsp;for the corners of the
  image to be assigned geographical locations so that it can be placed on a
  map.</p><p>GeoTIFF&nbsp;is a <a href="/documentation/raster-data">raster file
  format</a> - storing images, rather than shapes. Placemark primarily deals in
  vector data - data that's composed of shapes. So GeoTIFF import is relatively
  limited:&nbsp;Placemark can read a GeoTIFF&nbsp;image and extract the
  geographical bounds of the image, which can be useful for quickly knowing
  where a GeoTIFF&nbsp;will be located on a map. The tool does not export or
  edit GeoTIFFs.</p><p>GeoTIFF support is similar to <a
  href="/documentation/exif">EXIF</a>&nbsp;support in Placemark, though GeoTIFFs
  contain bounding boxes and EXIF data only includes a single point for where
  the photo was taken.</p><h4>References</h4><ul><li>‍<a
  href="https://en.wikipedia.org/wiki/GeoTIFF">GeoTIFF</a></li></ul><h4>Free
  tools for processing GeoTIFF&nbsp;files</h4><ul><li><a
  href="https://qgis.org/en/site/">QGIS</a></li><li><a
  href="https://gdal.org/">GDAL</a></li></ul>
Category: formats
Summary: GeoTIFF is a format for spatial raster data, like images from
  satellites or airplanes. Placemark supports importing the bounding box from a
  GeoTIFF image, and there are many other tools to process GeoTIFF images more
  completely.

---
