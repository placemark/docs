---
title: "Rich text"
description: "How to work with rich text properties in your data and in external"
---

[Properties](/documentation/properties) in Placemark support rich text! At the basic level, this is HTML. You can add rich text properties to a feature by clicking the "expand" button in the property editor or property table and selecting Rich text, or you might get rich text by importing a GeoJSON or KML file with existing rich text properties. In KML, rich text can exist in the [\<description> tag of a feature](https://developers.google.com/kml/documentation/kmlreference), and you can edit HTML in Google Earth.

The representation of rich text in GeoJSON looks like this:

That is, it's a property value, an object with a @type indicating it's HTML, and a value that is that HTML as a string.

Why isn't the HTML just a string? Because it's important to differentiate between the two: if you're using Mapbox GL JS or Leaflet to show a popup, the way for you to embed text is different than the way to embed HTML in that popup. Similarly, if you’re integrating with an application in React, you'll need to use a different technique to embed HTML versus text.
