---
Name: GeoJSON
Collection ID: 61672c73ba256802311968e5
Item ID: 61672ca25f1efded1d24d3dd
Created On: Wed Oct 13 2021 18:59:46 GMT+0000 (Coordinated Universal Time)
Updated On: Mon May 23 2022 17:52:02 GMT+0000 (Coordinated Universal Time)
Published On: Mon May 23 2022 17:52:07 GMT+0000 (Coordinated Universal Time)
Category: formats
Summary: A popular JSON-based geospatial data format.

---

GeoJSON is a format for geospatial data. It's based on the [JSON](https://www.json.org/json-en.html) format, and extremely popular in web mapping. Because it's a kind of JSON, you can parse GeoJSON easily in most programming languages.

GeoJSON is most similar, in terms of capabilities, to the Shapefile and KML formats: it can store both geometry and properties in the same file. Unlike KML, GeoJSON doesn't specify how to store styling information, so you can't store a "blue polygon", for example - you can only store "a polygon." However, an additional specification called [simplestyle](/documentation/geojson) does define how you can store styles in GeoJSON, and you can view simplestyle-styled features in Placemark.

[TopoJSON](/documentation/topojson) was inspired by GeoJSON and can be used to store some features more efficiently than GeoJSON itself.

### References

* [The GeoJSON format specification (IETF 7946)](https://tools.ietf.org/html/rfc7946)
* [awesome-geojson](https://github.com/tmcw/awesome-geojson), a reference for tools that work with GeoJSON
* [More than you ever wanted to know about GeoJSON](https://macwright.com/2015/03/23/geojson-second-bite.html)
