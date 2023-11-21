---
Name: Joining data
Collection ID: 61672c73ba256802311968e5
Item ID: 62e3fcdfeaa8c9c35a20c450
Created On: Fri Jul 29 2022 15:29:35 GMT+0000 (Coordinated Universal Time)
Updated On: Fri Jul 29 2022 19:19:20 GMT+0000 (Coordinated Universal Time)
Published On: Fri Jul 29 2022 19:57:43 GMT+0000 (Coordinated Universal Time)
Body: "<p id=\"\">Placemark's ability to join data allows you to put new
  datasets on the map, even if they don't have coordinates. To elaborate, let's
  say you want to show a map of US&nbsp;States with their average household
  incomes. It's reasonably simple to find geospatial data with the shapes of the
  US States by <a href=\"https://www.google.com/search?q=us+states+geojson\"
  id=\"\">searching for \"us states geojson\"</a>, and possible to find a CSV
  file of state demographic data, including income. But it's pretty hard to find
  an existing map data file that has both the shape of the states <strong
  id=\"\">and</strong> the income data as properties.</p><p id=\"\">In this way,
  you can often find geospatial data and tabular data that corresponds to the
  shapes in the geospatial data. What's missing is the ability to combine the
  two. That's what joining does.</p><h4 id=\"\">Requirements</h4><p id=\"\">To
  use this technique, you'll need two datasets: a geospatial dataset, like a
  GeoJSON file, or any of the other files supported with <a
  href=\"/documentation/importing\" id=\"\">importing</a>, and a non-geospatial
  file in CSV or Excel formats.</p><p id=\"\">And very importantly, they need a
  <strong id=\"\">matching column</strong>. For example, a US&nbsp;States
  dataset might have state abbreviations like \"NY\"&nbsp;and \"CA\", or a
  countries dataset would have ISO&nbsp;alpha-3 codes for countries, like
  \"USA\"&nbsp;and \"CHN\". What's essential is that this column matches exactly
  between features on the map and in the dataset that you're joining to the
  map.</p><h4 id=\"\">How to join</h4><p id=\"\">Okay, so you've got the files.
  Now you can join data this way:</p><ol start=\"\" id=\"\"><li id=\"\">First,
  import the geospatial file to the map as you would normally.</li><li
  id=\"\">Then start importing the CSV of the non-geospatial data.</li><li
  id=\"\">Select \"<strong id=\"\">Join to geodata</strong>\" under the
  \"<strong id=\"\">Kind</strong>\"&nbsp;option of the Import dialog.</li><li
  id=\"\">Select the columns to join against, both in the file to import and the
  map features.</li><li id=\"\">Click
  import.</li></ol><h4>Tutorial</h4><div></div><p>Want to follow this tutorial
  exactly?&nbsp;You can <a
  href=\"https://gist.github.com/tmcw/d75fce82504b47819e8dd30a3531840d\">downlo\
  ad the files I&nbsp;used from this page (click \"Download ZIP\" in the top
  right).</a></p><h4 id=\"\">What joining does</h4><p id=\"\">Joining matches
  rows in a CSV or XLS file to features on the map, by matching a specific
  column. When a row in the imported file matches a map feature, the data from
  that row is joined to the map feature: the data is merged with the feature's
  properties. If multiple map features match the same row, all of the map
  features will be joined. For example, if you're joining to countries based on
  the state's name, and an island nation is represented as multiple distinct
  Polygon geometries in multiple features (instead of being represented as a
  single MultiPolygon), then all of the matching features will receive the new
  properties.</p><p id=\"\">When a row doesn't match any map feature, the join
  operation will report this and list the non-matching rows.</p><p
  id=\"\">Joined properties that have the same name as existing properties will
  overwrite the existing properties.</p>"
Category: guides
Summary: Joining lets you combine geospatial and non-geospatial data, thus
  multiplying the different datasets you can work with in Placemark.

---
