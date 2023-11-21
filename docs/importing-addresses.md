---
Name: Importing addresses
Collection ID: 61672c73ba256802311968e5
Item ID: 629fc6e14d02f756f81b916f
Created On: Tue Jun 07 2022 21:45:05 GMT+0000 (Coordinated Universal Time)
Updated On: Tue Jun 07 2022 21:47:25 GMT+0000 (Coordinated Universal Time)
Published On: Mon Jun 13 2022 14:06:45 GMT+0000 (Coordinated Universal Time)
Body: "<p>Placemark supports importing addresses from <a
  href=\"/documentation/csv\">CSV</a> and <a
  href=\"/documentation/excel\">XLSX</a>&nbsp;files. This is a common kind of
  data: say, a list of libraries with addresses rather than longitude, latitude
  values. We hope that this functionality is useful, but there are some
  important notes.</p><p>Addresses can be in two forms:</p><ul><li>As a
  <strong>single column</strong>, combined. For example - <strong>1600
  Pennsylvania Avenue NW, Washington, D.C.</strong></li><li>In multiple
  <strong>structured</strong> columns. For example, Address:&nbsp;<strong>1600
  Pennsylvania Avenue NW</strong>, City: <strong>Washington,
  D.C.</strong></li></ul><h4>If your data is already structured in multiple
  columns, use the structured import</h4><p>Giving the geocoder the information
  that, \"Maryland\" is the state you're looking in rather than the name of a
  street or a point of interest will make geocoding results much more
  accurate.</p><h4>Try to clean and fix your data first</h4><p>When using
  addresses in import, try to clean your data and include as much information as
  possible. Even though we as people know that, say, \"1600 Pennsylvania
  Avenue\" is the White House's address, there are two different places with
  that address in Washington DC, plus locations with the same address in
  Baltimore, Brooklyn, and Pennsylvania.</p><h4>Be careful of missing
  data</h4><p>Another thing you'll see in address datasets is missing values. A
  volunteer might write \"No Address\"&nbsp;for rows without an address, or
  worse, something like \"Somewhere in Maryland\". These, of course, aren't
  really places, and Placemark will produce features with null geometries given
  these inputs.</p>"
Category: guides
Summary: Importing map data from addresses in CSV or Excel files is really
  powerful, but address are amongst the trickiest kinds of data. Important notes
  for you to go forward.

---
