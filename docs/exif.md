---
Name: EXIF
Collection ID: 61672c73ba256802311968e5
Item ID: 61672fa7eeffcceb66c9492f
Created On: Wed Oct 13 2021 19:12:39 GMT+0000 (Coordinated Universal Time)
Updated On: Thu May 19 2022 21:56:56 GMT+0000 (Coordinated Universal Time)
Published On: Thu May 19 2022 21:58:31 GMT+0000 (Coordinated Universal Time)
Category: formats
Summary: A kind of geospatial data that's included in some JPEG photos to keep
  track of where they were taken.

---

Exif is a standard for storing additional information in an image file, usually a [JPEG](https://en.wikipedia.org/wiki/JPEG) file. Placemark supports extracting Exif data from JPEG files that you drag & drop onto the map or [import](/documentation/importing) with the **Open file…** functionality, and showing their geolocation, if they have any, on the map.

For privacy reasons, many JPEG files don't contain geospatial Exif data even if the raw image does and the camera has GPS hardware.

#### Technical details

Placemark's support for importing EXIF data is derived from the [exif-js JavaScript module](https://github.com/exif-js/exif-js) implementation of the format.

#### References

* [Exif on Wikipedia](https://en.wikipedia.org/wiki/Exif)
