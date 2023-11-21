---
Name: Rich text
Collection ID: 61672c73ba256802311968e5
Item ID: 62a744096ab896540e9d2e0b
Created On: Mon Jun 13 2022 14:04:57 GMT+0000 (Coordinated Universal Time)
Updated On: Mon Jun 13 2022 14:04:57 GMT+0000 (Coordinated Universal Time)
Published On: Mon Jun 13 2022 14:06:45 GMT+0000 (Coordinated Universal Time)
Body: <p><a href="/documentation/properties">Properties</a> in Placemark support
  rich text! At the basic level, this is HTML. You can add rich text properties
  to a feature by clicking the "expand" button in the property editor or
  property table and selecting Rich text, or you might get rich text by
  importing a GeoJSON&nbsp;or KML&nbsp;file with existing rich text properties.
  In KML, rich text can exist in the <a
  href="https://developers.google.com/kml/documentation/kmlreference">&lt;description&gt;
  tag of a feature</a>, and you can edit HTML in Google Earth.</p><p>The
  representation of rich text in GeoJSON looks like this:</p><div></div><p>That
  is, it's a property value, an object with a @type indicating it's HTML, and a
  value that is that HTML&nbsp;as a string.</p><p>Why isn't the HTML just a
  string?&nbsp;Because it's important to differentiate between the two:&nbsp;if
  you're using Mapbox GL&nbsp;JS&nbsp;or Leaflet to show a popup, the way for
  you to embed text is different than the way to embed HTML&nbsp;in that popup.
  Similarly, if you’re integrating with an application in React, you'll need to
  use a different technique to embed HTML&nbsp;versus text.</p>
Category: guides
Summary: How to work with rich text properties in your data and in external
  applications.

---
