---
Name: TCX
Collection ID: 61672c73ba256802311968e5
Item ID: 6167301658297176741b1340
Created On: Wed Oct 13 2021 19:14:30 GMT+0000 (Coordinated Universal Time)
Updated On: Thu May 19 2022 21:53:29 GMT+0000 (Coordinated Universal Time)
Published On: Thu May 19 2022 21:58:31 GMT+0000 (Coordinated Universal Time)
Category: formats
Summary: A format for sports data popular as an export from running watches and
  bike computers.

---

TCX, or Training Center XML, is a file format used and popularized by [Garmin](https://www.garmin.com/) to share activity data, usually from GPS smart watches. It's typically used for sharing data about runs, hikes, cycling, and other outdoor activities. TCX is similar to [GPX](/documentation/gpx), but can contain more sport-specific activity details.

#### Using the TCX format

Placemark can import the TCX format, turning its routes into lines and trackpoints into points. We can't currently export the format because Placemark supports many features that TCX does not.

#### Technical details

The Placemark team maintains and uses the [toGeoJSON](https://github.com/placemark/togeojson) JavaScript library to import TCX files.

#### References

* [TCX on Wikipedia](https://en.wikipedia.org/wiki/Training_Center_XML)
