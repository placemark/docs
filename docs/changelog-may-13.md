---
Name: "Changelog: May 13"
Collection ID: 616750c12c0aece979319ccd
Item ID: 627d3fc73bcd06593872f47f
Created On: Thu May 12 2022 17:11:35 GMT+0000 (Coordinated Universal Time)
Updated On: Wed Aug 10 2022 01:34:02 GMT+0000 (Coordinated Universal Time)
Published On: Wed Aug 10 2022 01:35:11 GMT+0000 (Coordinated Universal Time)
Post Summary: "Friday update: here's what's new! FlatGeobuf and fixes and features."
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/627ec5598f82a71b28bb823b_Changelog%20May%203.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/627ec5598f82a71b28bb823b_Changelog%20May%203.png
Featured?: "true"
Date: Fri May 13 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Changelog

---

We've been hard at work with big performance improvements and new features, but that doesn't mean that sweet, sweet incremental improvements fall by the wayside. Here's what's new in Placemark:

### Features

* **FlatGeobuf format support!** [FlatGeobuf](http://flatgeobuf.org/) is an efficient binary format that's been making waves in the world of geospatial technology. You can import & export p with Placemark, and since the format has the same basic capabilities as GeoJSON, all of its features are supported.

![Placemark in dark mode, showing DC metro stations](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/627ec5f37fde0759350564e5_CleanShot%202022-05-13%20at%2016.56.03%402x.png)

The new dark mode in action

* **Dark mode is enhanced** with custom scrollbars and zoom controls. If you're a vampire, live in the dark, or both, there'll be less blinding white in the interface. Toggle dark mode with the sun icon in the top menu-bar.
* The style of point data has been rethought to stand out on a larger variety of background maps.
* You can now **pay for Placemark **with a variety of additional methods, not just credit cards. Alipay, WeChat Pay, and lots of European-friendly bank redirect methods like Bancontact and iDEAL are now turned on.
* **You can now toggle "Show All" when editing a feature's properties. **Some people think of geospatial data like a table, in which most features will have the same properties like rows in a spreadsheet. Others think of it more as freeform properties, in which different features have different keys and values attached. With "Show all" clicked, you'll see all the columns in the dataset. With it turned off, you'll see only the properties on the object you have selected.
* **You could always use "paste" to **[**add GeoJSON features to the map**](/documentation/importing)**,** but now you can also hit "paste" on the map index page, and it'll create a new map and open the "Import text" dialog for you to import.

### Fixes

* Lots of operations having to do with Folders are improved: if you were splitting a line in a folder, previously the two parts would end up outside that folder. Now when you do an operation on features, the results end up in the same folder as those features.
* You can now right-click a folder on the left side & zoom to the extent of all its features.

### Did you know?

When you have a feature selected on the map, you can just hit "copy" and it'll copy the GeoJSON for that feature to your clipboard. Multiple features selected, it'll copy a FeatureCollection. Then you can paste that GeoJSON in your code editor, on another map, wherever you like!
