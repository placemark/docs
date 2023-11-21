---
Name: Joining data and more
Collection ID: 616750c12c0aece979319ccd
Item ID: 62e43bb2f83b9e4f3ad1abfb
Created On: Fri Jul 29 2022 19:57:38 GMT+0000 (Coordinated Universal Time)
Updated On: Fri Jul 29 2022 20:10:30 GMT+0000 (Coordinated Universal Time)
Published On: Fri Jul 29 2022 20:10:36 GMT+0000 (Coordinated Universal Time)
Post Summary: Geospatial data meets tabular, with the new join feature
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62e43ba7576bb98d14d921c5_Joins.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62e43ba7576bb98d14d921c5_Joins.png
Featured?: "true"
Date: Fri Jul 29 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Product

---

Finding map data can be frustrating. It's one thing to find the geospatial part - the boundaries, street centerlines, points - but even harder to find data with the right attributes. You might end up with an identifier, a name, maybe a few helpful properties, but it's unlikely that you can find something like a pre-made dataset of US states with income data, or country boundaries with their formation dates. There's no "one stop shop" for data like that, and there probably won't ever be one. Instead, we need great tools for working with the data we have.

Which brings us to today: Placemark now supports joins.

![States data joined with income data](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62e4358a8f93467b78ed602b_CleanShot%202022-07-29%20at%2015.31.10%402x.png)

What's a join? It's when you take a geospatial file, like a GeoJSON file of states, and put it on your map. Then you take a spreadsheet, like a table of states and their average incomes, and add that to the map too - and Placemark matches the table with the map data, and makes you an *enhanced* new file with the extra data. It's like an Microsoft Excel "Merge", or a database "JOIN."

‍

![](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62e43d904302cd413349285c_Joins%20\(1\).png)

‍

Joins let you create custom, hybrid datasets by adding extra attributes to geospatial data from tabular data. We think you'll really like it.

All you need is tabular data - a CSV or an Excel file - with a column that matches the map data. Maybe that's a state's name, or a country's ISO code, or a zip code against ZCTAs. Placemark does the matching, combines the attributes, and updates your map with the new data.

Here's a tutorial example of joins in action:

‍

Check out the [new documentation page on joining tabular data](/documentation/joining-data) for all the details!

## Other updates

![Showing summary statistics for geometry information](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62e437e32daf32b9aff02ce4_CleanShot%202022-07-29%20at%2015.40.11%402x.png)

The geometry information menu, noted by the ruler icon, now works with multi-selections - so you can select multiple features on the map and get a summary of their geometry types as well as information like total area for polygons and total length of lines.

‍

![Custom winding order for GeoJSON](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62e43841eaa8c960f5240a7a_CleanShot%202022-07-29%20at%2015.41.59%402x.png)

The already quite flexible GeoJSON export got even more custom: you can specify the winding order of the exported GeoJSON files. 99.9% of the time you shouldn't worry about this at all. But in that 0.1%, in which you're using d3-geo or Azure Cosmos DB, you'll want to select the second option, "D3" to wind polygons in the opposite direction to the one specified in the GeoJSON specification. If that's you, check it out, and see the new [documentation on winding order](/documentation/winding-order).
