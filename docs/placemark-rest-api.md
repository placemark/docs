---
Name: Placemark REST API
Collection ID: 61672c73ba256802311968e5
Item ID: 623ccde385dc38e643b0dd28
Created On: Thu Mar 24 2022 20:00:35 GMT+0000 (Coordinated Universal Time)
Updated On: Mon Oct 17 2022 22:37:32 GMT+0000 (Coordinated Universal Time)
Published On: Mon Oct 17 2022 22:37:37 GMT+0000 (Coordinated Universal Time)
Category: guides
Summary: A read-only API that lets you use your data in Placemark from web maps
  and any application that can access URLs and use GeoJSON data.

---

Placemark offers a REST API for map content. By default, maps are private to your organization and the API is disabled. However, you can enable the API - see [the video on enabling and using the API](/videos/using-the-placemark-api) for details.

### API Endpoints

#### Get all features in a map

**https://api.placemark.io/api/v1/map/{mapid}/featurecollection**

This API provides the contents of a map, as a [GeoJSON](/documentation/geojson) FeatureCollection object. The map needs to be set as public in order for data to be returned.

##### Parameters

* **folder**: specify one or more folders within the given map and only include featuers within those folder.
* **intersect\_latitude** and **intersect\_longitude**: return only polygons and multipolygons that intersect with the given point. Both parameters must be provided and should be decimal numbers, like "?intersect\_latitude=40.001919\&intersect\_longitude=-75.1719". Using intersection parameters will cause the API to **only** return Polygons and MultiPolygons: lines and points will not be returned because they do not geometrically have simple intersections or area.

##### Notes

* All features of the map are included in the FeatureCollection, without respect to folder structure.
* This endpoint supports CORS, so it can be directly used in web map frameworks.

#### Get a single feature

**https://api.placemark.io/api/v1/map/{mapid}/feature/{featureid}**

This API provides a single feature, as GeoJSON Feature object. Like the endpoint for getting a map, this requires that the map identified by **mapid** is public.

You can find the ID for each feature through the "ID" panel when a feature is selected. That ID is also included in the response for the featurecollection endpoint through the "@id" property of each feature.

### Map privacy

By default, maps are private to your team. You can view them, your team can view them, but they aren't accessible via the API. To enable the API, you need to set the map as public, which you can do via the **File** menu and the **API** menu item. Toggling the API on will give you the map's FeatureCollection API endpoint and enable per-feature API endpoints.
