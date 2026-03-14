---
title: "GeoJSONL"
description: "A version of the GeoJSON format that is optimized for big datasets."
---

GeoJSONL is a variation on the [GeoJSON](/documentation/geojson) format that puts each Feature object on its own line, so that GeoJSONL files can be read more efficiently by certain programs. Placemark always reads and writes files from start to end, so the performance differences attributed to GeoJSONL do not apply. But if you are interacting with a service or program that produces or expects GeoJSONL, you can import and export this file format.

GeoJSONL is also called [GeoJSONSeq](https://gdal.org/drivers/vector/geojsonseq.html), [GeoJSON Text Sequences](https://github.com/geojson/geojson-text-sequences), and ndgeojson.

#### References

* [Newline-delimited GeoJSON](https://stevage.github.io/ndgeojson/)
* [GeoJSONL: An optimized format for large geographic datasets](https://www.interline.io/blog/geojsonl-extracts/)
