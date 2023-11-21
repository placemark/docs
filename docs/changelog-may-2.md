---
Name: "Changelog: May 2"
Collection ID: 616750c12c0aece979319ccd
Item ID: 626ae0a4a2a8057f42b16452
Created On: Thu Apr 28 2022 18:44:52 GMT+0000 (Coordinated Universal Time)
Updated On: Sat Oct 08 2022 19:34:49 GMT+0000 (Coordinated Universal Time)
Published On: Sat Oct 08 2022 19:37:54 GMT+0000 (Coordinated Universal Time)
Post Summary: Announcing XYZ layer support, faster collaboration, faster API,
  edit feature IDs, and better polygon rendering.
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62700692b2dc2847a03cbd34_Changelog%20May%202.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62700692b2dc2847a03cbd34_Changelog%20May%202.png
Featured?: "true"
Date: Mon May 02 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Changelog

---

‍

* The [REST API](/documentation/placemark-rest-api) is now a lot faster to update: if you're editing a map and using the API, it'll now update within seconds, rather than with a 30 minute cache.
* Collaboration is faster than ever. Changes are visible about 40ms faster than before.
* Windows & Linux keybindings: you can hit Ctrl+S, Ctrl+O, and more to perform actions quickly. Check the cheatsheet in the application for more details.
* Small polygons now render even when you’re zoomed out.

![A dataset of islands shown on a map in Placemark](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/6270045c9bfc24dbe49b7dd3_CleanShot%202022-05-02%20at%2012.18.16%402x.png)

Improved rendering of small polygons

* XYZ Layer support! You can now pull in traditional image tiles to your map.

![Placemark showing an XYZ background layer](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/627004b3f2199b012a908a61_CleanShot%202022-05-02%20at%2012.19.46%402x.png)

Custom XYZ layers in the map

* You can now edit [Feature ID](/documentation/ids) data. Feature IDs are preserved when you import & export KML and GeoJSON.

![Placemark showing Feature ID UI](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/6270050141fc063c09e78cdf_CleanShot%202022-05-02%20at%2012.21.12%402x.png)

The new Feature ID interface

‍

That's it, folks! You might also notice many design improvements & fixes this week. There are more to come. See you next week!
