---
title: "Polyline"
description: "A simple, compact data format that just encodes lines."
---

Encoded Polylines are efficient, text-based ways to store line geometries. This is one of the most minimal formats: they're used to represent a single line geometry, without any properties or styling.

Here's an example encoded polyline:

Polylines are very popular in Google technology, and also in routing and directions systems. The route line when you request directions is usually available as a polyline - for example, in the [Mapbox directions API](https://docs.mapbox.com/api/navigation/directions/#retrieve-directions).

#### References

* [Encoded Polyline Algorithm Format](https://developers.google.com/maps/documentation/utilities/polylinealgorithm)
