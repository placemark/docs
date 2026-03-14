---
title: "TopoJSON"
description: "An extension of GeoJSON that encodes topology in order to save space."
---

TopoJSON is "an extension of [GeoJSON](/documentation/geojson) that encodes topology." TopoJSON is typically a more compact way to represent data than GeoJSON, because shared borders between polygons can be represented as one line 'arc' rather two overlapping edges. TopoJSON also includes tools for doing simplification using this topology information, so that if you simplify a map of contiguous areas, like states or countries, shared borders are not corrupted.

### References

* [The TopoJSON specification](https://github.com/topojson/topojson)
