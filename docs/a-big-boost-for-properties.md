---
Name: A big boost for properties
Collection ID: 616750c12c0aece979319ccd
Item ID: 62a6439961f5b66ce31b30f7
Created On: Sun Jun 12 2022 19:50:49 GMT+0000 (Coordinated Universal Time)
Updated On: Sat Oct 08 2022 19:36:29 GMT+0000 (Coordinated Universal Time)
Published On: Sat Oct 08 2022 19:37:54 GMT+0000 (Coordinated Universal Time)
Post Summary: Rich text, images, improved keyboard shortcuts, and a lot of
  improvements for the data that lives in geospatial files.
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62a754f421cd928de87a3a39_Properties%20(1).png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62a754f421cd928de87a3a39_Properties%20(1).png
Featured?: "true"
Date: Mon Jun 13 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Product

---

Placemark’s support for properties just got a really big improvement

‍

![](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62a755b26ec75092c9904ed1_Properties%20\(2\).png)

‍

We've always supported all the kinds of [properties](/documentation/properties) that geospatial data can have - arbitrary names and values, plus values can have types like string, true/false, JSON values, and more. And because a property like a "description" field might contain paragraphs of an article, you could pop up a larger property text editor. But there's always more to improve about properties - especially when people are writing reviews, research, and guides using the property editor. So this week brings some big improvements.

‍

### Rich text properties

![Popover showing the ability to embed images in rich text](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62a74628b85a96b782795b22_image%201%20\(1\).png)

Now you can edit a property and switch between different kinds of values - Text, Rich text, JSON, and Color. The rich text editor can do everything you'd expect from a rich text interface, like adding links, bold, headings. Plus, you can even add images! Building your index of the best restaurants or map of bird sightings? Rich text lets you do it all in one tool.

Rich text plays nice with importing & exporting! When you export features with rich text as GeoJSON, the rich text becomes a descriptive object containing HTML. Importing KML files with HTML in their \<description> tags - like you can author in Google Earth - will yield rich text in Placemark, and vice-versa for exporting KML.

‍

### Editing colors

![Popover editing color values](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62a7466414a52d0eefc142df_image%202.png)

The improved color picker detects valid colors and lets you edit colors using direct hex-code input or with a selector UI.

‍

### Keyboard shortcuts

Keyboard shortcuts have been improved - you can navigate the whole properties panel, and the feature panel, using arrow keys.

‍

### True and false values

![Property editor with a checkbox for boolean features](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62a7469bc349647e7101935e_image%203.png)

True and false values get a new UI, too - you can toggle them with a checkbox. And if you need to change the type of a property, it's easy to just convert it to something different.

‍

### Converting between types

![Property editor popover with type selector](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62a746c9424faa5009c9027f_image%204.png)

Need to change a property's type? You can do that too - convert your plain text to rich text, clean up data that has numbers stored a strings, you can do it all.

### Open source improvements

The code that adds this support for HTML values in KML is open source, part of [Placemark's supported toGeoJSON and toKML modules](/open-source). You can use it in your applications today, and all of the users of those JavaScript modules can upgrade for the new support.
