---
Name: Polyline
Collection ID: 61672c73ba256802311968e5
Item ID: 61672ffe5d953fb7ff9c8a6a
Created On: Wed Oct 13 2021 19:14:06 GMT+0000 (Coordinated Universal Time)
Updated On: Thu May 19 2022 21:57:10 GMT+0000 (Coordinated Universal Time)
Published On: Thu May 19 2022 21:58:31 GMT+0000 (Coordinated Universal Time)
Category: formats
Summary: A simple, compact data format that just encodes lines.

---

Encoded Polylines are efficient, text-based ways to store line geometries. This is one of the most minimal formats: they're used to represent a single line geometry, without any properties or styling.

Here's an example encoded polyline:

Polylines are very popular in Google technology, and also in routing and directions systems. The route line when you request directions is usually available as a polyline - for example, in the [Mapbox directions API](https://docs.mapbox.com/api/navigation/directions/#retrieve-directions).

#### References

* [Encoded Polyline Algorithm Format](https://developers.google.com/maps/documentation/utilities/polylinealgorithm)
