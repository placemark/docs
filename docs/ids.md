---
Name: IDs
Collection ID: 61672c73ba256802311968e5
Item ID: 626f1a3fd608a4d33ba472ba
Created On: Sun May 01 2022 23:39:43 GMT+0000 (Coordinated Universal Time)
Updated On: Wed Aug 24 2022 22:37:09 GMT+0000 (Coordinated Universal Time)
Published On: Wed Aug 24 2022 22:37:28 GMT+0000 (Coordinated Universal Time)
Body: "<p id=\"\">Placemark supports an <strong id=\"\">id</strong> for every
  feature. This is in accordance with the <a
  href=\"https://datatracker.ietf.org/doc/html/rfc7946#section-3.2\"
  id=\"\">GeoJSON&nbsp;\"id\" member</a>, which can either be a string or a
  number value. It's recommended that ids are unique, but this isn't enforced,
  because GeoJSON documents with duplicate ids are valid.</p><h4
  id=\"\">Formats</h4><ul id=\"\"><li id=\"\">id properties in incoming
  GeoJSON&nbsp;data are preserved.</li><li id=\"\">Export to <a
  href=\"/documentation/kml\" id=\"\">KML</a>,&nbsp;<a
  href=\"/documentation/geojson\" id=\"\">GeoJSON</a>, and <a
  href=\"/documentation/geojsonl\" id=\"\">GeoJSONL</a> formats will maintain
  IDs.</li></ul><h4 id=\"\">System IDs</h4><p id=\"\">Every feature also has a
  <strong id=\"\">system ID</strong>, which is guaranteed to be unique across
  all of Placemark: this is a UUID. System IDs can't be updated or controlled -
  they're created when features are added. You can use system IDs in order to
  refer to features at the API&nbsp;level - every feature has its own endpoint
  in the <a href=\"/documentation/placemark-rest-api\"
  id=\"\">REST&nbsp;API</a>.</p><p id=\"\">You can optionally include System IDs
  in <a href=\"/documentation/geojson\" id=\"\">GeoJSON</a> exports by selecting
  the option in the export dialog.</p><h4>User vs System IDs</h4><p>User
  IDs:</p><ul><li>Can be set to any string or number value that you
  want.</li><li>Are at the root level of features and are not in the properties
  object, so you can have both an ID on the feature and an
  \"id\"&nbsp;property.</li><li>Can be imported &amp; exported and are
  preserved.</li></ul><p>System IDs:</p><ul><li>Are fixed and not
  editable.</li><li>Can be used in Placemark's APIs to specify a particular
  feature.</li><li>Are in the properties object when they're exported: they are
  the property \"@id\".</li></ul><h4>Example</h4><div></div>"
Category: guides
Summary: "Features can have two IDs: your IDs and System IDs. You can use IDs in
  the REST API, imports, and exports to identify features."

---
