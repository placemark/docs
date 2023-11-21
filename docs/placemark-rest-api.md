---
Name: Placemark REST API
Collection ID: 61672c73ba256802311968e5
Item ID: 623ccde385dc38e643b0dd28
Created On: Thu Mar 24 2022 20:00:35 GMT+0000 (Coordinated Universal Time)
Updated On: Mon Oct 17 2022 22:37:32 GMT+0000 (Coordinated Universal Time)
Published On: Mon Oct 17 2022 22:37:37 GMT+0000 (Coordinated Universal Time)
Body: "<p id=\"\">Placemark offers a REST&nbsp;API&nbsp;for map content. By
  default, maps are private to your organization and the API&nbsp;is disabled.
  However, you can enable the API&nbsp;- see <a
  href=\"/videos/using-the-placemark-api\" id=\"\">the video on enabling and
  using the API</a>&nbsp;for details.</p><h3 id=\"\">API&nbsp;Endpoints</h3><h4
  id=\"\">Get all features in a map</h4><p id=\"\"><strong
  id=\"\">https://api.placemark.io/api/v1/map/{mapid}/featurecollection</strong\
  ></p><p id=\"\">This API&nbsp;provides the contents of a map, as a <a
  href=\"/documentation/geojson\" id=\"\">GeoJSON</a> FeatureCollection object.
  The map needs to be set as public in order for data to be returned.</p><h5
  id=\"\">Parameters</h5><ul id=\"\"><li id=\"\"><strong
  id=\"\">folder</strong>: specify one or more folders within the given map and
  only include featuers within those folder.</li><li id=\"\"><strong
  id=\"\">intersect_latitude</strong> and <strong
  id=\"\">intersect_longitude</strong>:&nbsp;return only polygons and
  multipolygons that intersect with the given point. Both parameters must be
  provided and should be decimal numbers, like
  \"?intersect_latitude=40.001919&amp;intersect_longitude=-75.1719\". Using
  intersection parameters will cause the API to <strong id=\"\">only</strong>
  return Polygons and MultiPolygons:&nbsp;lines and points will not be returned
  because they do not geometrically have simple intersections or
  area.</li></ul><h5 id=\"\">Notes</h5><ul id=\"\"><li id=\"\">All features of
  the map are included in the FeatureCollection, without respect to folder
  structure.</li><li id=\"\">This endpoint supports CORS, so it can be directly
  used in web map frameworks.</li></ul><h4 id=\"\">Get a single feature</h4><p
  id=\"\"><strong
  id=\"\">https://api.placemark.io/api/v1/map/{mapid}/feature/{featureid}</stro\
  ng></p><p id=\"\">This API provides a single feature, as GeoJSON&nbsp;Feature
  object. Like the endpoint for getting a map, this requires that the map
  identified by <strong id=\"\">mapid</strong> is public.</p><p id=\"\">You can
  find the ID for each feature through the \"ID\" panel when a feature is
  selected. That ID is also included in the response for the featurecollection
  endpoint through the \"@id\" property of each feature.</p><h3 id=\"\">Map
  privacy</h3><p id=\"\">By default, maps are private to your team. You can view
  them, your team can view them, but they aren't accessible via the API. To
  enable the API, you need to set the map as public, which you can do via the
  <strong id=\"\">File</strong> menu and the <strong id=\"\">API</strong> menu
  item. Toggling the API&nbsp;on will give you the map's FeatureCollection
  API&nbsp;endpoint and enable per-feature API endpoints. </p>"
Category: guides
Summary: A read-only API that lets you use your data in Placemark from web maps
  and any application that can access URLs and use GeoJSON data.

---
