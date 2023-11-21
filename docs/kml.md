---
Name: KML
Collection ID: 61672c73ba256802311968e5
Item ID: 61672ff1dc4d7323329a3d22
Created On: Wed Oct 13 2021 19:13:53 GMT+0000 (Coordinated Universal Time)
Updated On: Mon May 23 2022 17:47:13 GMT+0000 (Coordinated Universal Time)
Published On: Mon May 23 2022 17:52:07 GMT+0000 (Coordinated Universal Time)
Body: "<p>KML is a format for geospatial data. It's based on XML in the same way
  that <a href=\"/documentation/geojson\">GeoJSON</a> is based on JSON: a KML
  file is a particular structure and kind of XML file. KML was created by
  Keyhole, a company Google acquired and turned into Google Earth, and is now
  maintained by Google and the OGC.</p><p>KML has some unique features, mostly
  by virtue of being designed with Google Earth in mind. It can store styles
  alongside geometry. It can store \"flight paths\" for automatically panning
  and sweeping through maps. KML files can also contain NetworkLink objects,
  which let them refer to other KML files that could be on the internet or
  local.</p><p>KML&nbsp;can contain styles for features - a line in KML can be
  \"red\" or \"blue\". This is a relatively unique feature in geospatial data -
  see the <a href=\"/format-matrix\">format feature matrix</a> for official
  style support. KML&nbsp;styles are transformed into <a
  href=\"/documentation/simplestyle\">simplestyle</a> when they're imported into
  Placemark and you can view them by changing your map's <a
  href=\"/documentation/visualization\">visualization</a> mode to
  simplestyle.</p><h4>Technical details</h4><p>The Placemark team maintains and
  uses the <a href=\"https://github.com/placemark/togeojson\">toGeoJSON</a>
  JavaScript library to import KML files. KML files can be both imported
  &amp;&nbsp;exported with Placemark.</p><h4>References</h4><ul><li><a
  href=\"https://developers.google.com/kml\">KML Reference on
  Google</a></li></ul>"
Category: formats
Summary: Google Earth's native format and a popular export from consumer mapping tools.

---
