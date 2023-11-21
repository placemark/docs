---
Name: "Changelog: August 16"
Collection ID: 616750c12c0aece979319ccd
Item ID: 62f5b182c23d655dd6285e27
Created On: Fri Aug 12 2022 01:48:50 GMT+0000 (Coordinated Universal Time)
Updated On: Tue Aug 16 2022 15:44:29 GMT+0000 (Coordinated Universal Time)
Published On: Tue Aug 16 2022 15:44:35 GMT+0000 (Coordinated Universal Time)
Post Summary: Better WKT support, hide individual features, import CSV files
  with GeoJSON columns, and more!
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62fbb7f6163bd46b4752777e_Changelog%20-%20Aug%2016.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62fbb7f6163bd46b4752777e_Changelog%20-%20Aug%2016.png
Featured?: "true"
Date: Tue Aug 16 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Changelog

---

It's been a busy, and fun week at the Placemark factory! Let's dive in. Oh, and would you rather read news about Placemark as a monthly email, rather than a blog post? [Now you can do just that - sign up for email updates.](https://confirmsubscription.com/h/y/13501B63095BB913)

‍

##### WKT

The [WKT](/documentation/wkt) format has gotten a lot of improvements. Despite only being able to encode geometries and not properties (check out the [format matrix](/format-matrix)), it's pretty complex and has a lot of optional or vaguely-specified features. But Placemark aims to support it all, and we've made another effort to!

* "ZM" coordinates are supported
* GeometryCollections can be imported
* The "EMPTY" form of Geometries, like POINT EMPTY, is now supported.

You can now import files of **any size your browser can handle** when you're working in draft mode. They won't be saved to the server, but you can use the mode to work with those files for the length of your browser session.

‍

##### KML & Visibility

![](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62fbb9c2cf876008e67011cb_layer-visibility.png)

Controlling layer visibility

You can now toggle the visibility of individual features, not just folders. This support translates to and from the [KML format](/documentation/kml) support, too:

* Imported KML features with individual \<visibility> tags will get a "visibility" property
* Exported data with a "visibility" property will be translated into KML visibility when it's exported to KML.

These changes are also available as part of Placemark's sponsored open source projects, [toGeoJSON](https://github.com/placemark/togeojson) and [toKML](https://github.com/placemark/tokml).

‍

##### CSV files with GeoJSON and WKT columns

GeoJSON support now can handle GeoJSON or WKT geometries in columns of a [CSV](/documentation/csv) file. These are common when you export data from systems like Google BigQuery. Now you can use them in Placemark.

‍

##### Dragging features into folders

It's much easier to drop features into folders now, and the visual distinction of a feature being in a folder versus just below it is easier to notice.

‍

##### Dividing multiple Multi-geometries

![](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62fbbb5a26e811366f99b363_divide.png)

The "Divide Features" operation now supports multi-selections. This operation lets you take a MultiPoint, MultiGeometry, MultiLineString, or GeometryCollection, and split it into multiple features with "single" geometry types, like LineString, Point, and Polygon. Now it works with multi-selections, so if you have a big dataset with mixed Polygon & MultiPolygons, you can select-all and normalize all the MultiPolygons to Polygons. This can be super useful for massaging data into a format that some downstream scripting prefers.
