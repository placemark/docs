---
Name: Winding order
Collection ID: 61672c73ba256802311968e5
Item ID: 62e3e5d503d7c3246584edfd
Created On: Fri Jul 29 2022 13:51:17 GMT+0000 (Coordinated Universal Time)
Updated On: Fri Jul 29 2022 13:51:17 GMT+0000 (Coordinated Universal Time)
Published On: Fri Jul 29 2022 19:57:43 GMT+0000 (Coordinated Universal Time)
Category: guides
Summary: An option to export GeoJSON from Placemark that is compatible with the
  d3-geo module

---

In almost all cases, you won't need to worry about winding order, but if you're trying to use [GeoJSON](/documentation/geojson) that you export from Placemark with [d3-geo](https://github.com/d3/d3-geo), this is the page for you.

#### Tl;dr

![Winding order option screenshot](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62e3e3f13047421b090a9b97_CleanShot%202022-07-29%20at%2009.38.46%402x.png)

If you're trying to use GeoJSON that you export from Placemark in d3-geo and encountering issues, set the winding order to "D3" when you export.

#### What is winding order?

Winding order is the order of the coordinates along the ring of a polygon geometry. Some specifications require these coordinates to be ordered clockwise, others counter-clockwise. Winding order can be useful in some narrow circumstances to determine what's the "outside" of a Polygon (or MultiPolygon) and what is the inside.

#### The Winding Order Option

Placemark gives you the choice of winding order for one format: GeoJSON. Other formats are either unopinionated about winding order or have a well-established standard for which order in which to wind coordinates.

GeoJSON is unique, in that it has three ideas:

* In the original GeoJSON specification, there was no stipulation of winding order. You could wind rings however you'd like.
* In the fully-standardized revised GeoJSON specification (aka [RFC 7946](https://datatracker.ietf.org/doc/html/rfc7946)), polygons should follow the right-hand rule - exterior rings are counterclockwise, interior clockwise. However, for backward-compatibility, this is not required. Polygons with differently-wound coordinates should still work fine.
* The [d3-geo](https://github.com/d3/d3-geo) tools require the **opposite** of the specification - exterior rings should be clockwise wound. And if you have them incorrectly wound, then many functions in d3-geo will not function properly.

#### Spherical polygons

The reason why d3-geo is so particular about winding order is that it supports spherical polygons - polygons that might cover the whole earth’s surface except for one small area. Imagine a polygon of all the earth except for a city outline: in this case the outer ring of that polygon has the same coordinates as a polygon covering just the city, but the polygon should be interpreted as everything *except* that area. Using winding order you can represent this. Placemark currently doesn't support this kind of polygon - you can represent this instead by creating a polygon with an outer ring of the full world extent and an inner ring of the city's shape.
