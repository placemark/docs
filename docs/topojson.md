---
Name: TopoJSON
Collection ID: 61672c73ba256802311968e5
Item ID: 616730235609873af7fdea41
Created On: Wed Oct 13 2021 19:14:43 GMT+0000 (Coordinated Universal Time)
Updated On: Sat Oct 16 2021 15:43:12 GMT+0000 (Coordinated Universal Time)
Published On: Sat Oct 16 2021 15:45:34 GMT+0000 (Coordinated Universal Time)
Category: formats
Summary: An extension of GeoJSON that encodes topology in order to save space.

---

TopoJSON is "an extension of [GeoJSON](/documentation/geojson) that encodes topology." TopoJSON is typically a more compact way to represent data than GeoJSON, because shared borders between polygons can be represented as one line 'arc' rather two overlapping edges. TopoJSON also includes tools for doing simplification using this topology information, so that if you simplify a map of contiguous areas, like states or countries, shared borders are not corrupted.

### References

* [The TopoJSON specification](https://github.com/topojson/topojson)
