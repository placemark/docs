---
title: "WKT"
description: "A text-based format that doesn't have the ability to contain attributes"
---

WKT, or *Well-Known Text, *is a text-based format for geospatial data. It's very common in databases. Unlike formats like [GeoJSON](/documentation/geojson) or [KML](/documentation/kml), WKT can only store one feature at a time and has no way to store properties: formats that use WKT store properties in another way, like in other columns of a database table. In this sense, it's similar to the [Polyline](/documentation/polyline) format, which can only store a single line - but WKT can store any kind of geometry.

Here's an example of a line encoded as WKT:

WKT is often stored and sometimes transferred as WKB, a binary version of the same format that has additional geometry types and is much more efficient to store and process.

* [WKT on Wikipedia](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry)
