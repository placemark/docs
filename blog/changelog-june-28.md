---
Name: "Changelog: June 28"
Collection ID: 616750c12c0aece979319ccd
Item ID: 62bb3981f0557efd58d80b84
Created On: Tue Jun 28 2022 17:25:21 GMT+0000 (Coordinated Universal Time)
Updated On: Sat Jul 23 2022 20:32:29 GMT+0000 (Coordinated Universal Time)
Published On: Sat Jul 23 2022 20:32:39 GMT+0000 (Coordinated Universal Time)
Post Summary: OSM XML support, duplication, basic support for iPads, bulk
  invites, and bug fixes in this week's changelog.
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62bb3975a1d2664546d530fc_Changelog%20June%2028.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62bb3975a1d2664546d530fc_Changelog%20June%2028.png
Featured?: "true"
Date: Tue Jun 28 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Changelog

---

A lot has moved in the last few weeks! Let's dive in to all the improvements, fixes, and features in Placemark.

#### Features

You can now edit maps on your mobile devices, like iPads. Touch support has been improved across the board - fixes to dragging files, improving drawing tools on the iPad, and making sure that the whole UI looks and works great on those devices.

![Placmark importing an OpenStreetMap XML file](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62bb3891bde3bbf67a86b451_CleanShot%202022-06-28%20at%2013.21.01%402x.png)

Importing OSM XML straight from overpass turbo's API

Placemark got support for a new file format: [OSM](/documentation/osm). That means you can use tools like [overpass turbo](https://overpass-turbo.eu/) to pull features from [OpenStreetMap](https://www.openstreetmap.org/), or even use OpenStreetMap's API directly to import open map data.

You can now invite multiple people to a team simultaneously with the invitation form. It also supports email-style lines like **John Smith \<john@foo.com>** so you can quickly invite a team that you know from their emails.

Double-clicking on a feature in the left panel now zooms to it.

![Filtering a geospatial table by folders](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62bb38234a4a6c6934dd773b_CleanShot%202022-06-28%20at%2013.19.15%402x.png)

Filtering the table view by folder

You can filter the feature table by folders. This is especially useful because different folders tend to have features with different sets of attributes - reducing this down to just one folder can make the table a lot more readable.

![](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62bb3840d36e04731fcfcd1f_CleanShot%202022-06-28%20at%2013.19.46%402x.png)

Duplicating a folder

Duplication! You can now duplicate features, entire folders of features, as well as maps themselves. Duplicating a map will preserve its entire folder structure and all of its features, and copy its name and description.

The quota for how many maps you can make is now 500, up from 50 before.

#### Fixes

* Chromium on Linux wasn't able to save or open files because of a bug in its implementation of the [File System Access API](https://web.dev/file-system-access/). We've added a workaround that fixes file access in Placemark. This means you can use the [converter](/post/introducing-our-free-map-file-converter) and [import & export](/videos/importing-data) on Linux now.
* Due to a Firefox bug, you couldn't scroll textareas in dialog boxes. We've deployed a workaround that fixes that.
* Sorting features didn't work when in a Draft. This is fixed, bringing the Draft mode, which doesn't store features on the server, back up to par with the normal mode which supports real-time collaboration.
