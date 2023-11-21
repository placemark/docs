---
Name: "Changelog: March 13"
Collection ID: 616750c12c0aece979319ccd
Item ID: 640e6b13a2fc9f3fb2f76877
Created On: Mon Mar 13 2023 00:15:15 GMT+0000 (Coordinated Universal Time)
Updated On: Mon Mar 13 2023 13:38:09 GMT+0000 (Coordinated Universal Time)
Published On: Mon Mar 13 2023 13:38:38 GMT+0000 (Coordinated Universal Time)
Post Summary: Custom data in the Figma plugin, plus better support for Firefox
  Private Windows
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/640e6b00d52c12081d37ba9a_March%2012%20Changelog.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/640e6b00d52c12081d37ba9a_March%2012%20Changelog.png
Featured?: "true"
Date: Mon Mar 13 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Changelog

---

Some small but mighty updates to Placemark!

### Updated collaboration & map renderer

Under the hood, we've updated [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/) and [Replicache](https://replicache.dev/), two key components of Placemark. We've [used Replicache for collaboration](/post/collaboration-technical-deep-dive) since the start of Placemark, and it's been great, but there have always been issues with Firefox Private Mode.

Firefox's Private Windows are the most strong, and chaotic, form of security controls in browsers. While other browsers will forget persisted information, like information in [IndexedDB](https://web.dev/indexeddb/), more quickly in their private modes. Firefox, on the other hand, doesn't support IndexedDB at all when you're using a private window. For other APIs like [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), Firefox exposes a localStorage object, but using it in any way will immediately throw an error. Replicache has used IndexedDB for a while, so… Placemark has had problems in this situation. Thankfully, Replicache now supports a memory mode, which fixes behavior in private windows!

‍

### Custom data support in the Placemark Figma plugin

‍

The [Placemark Figma plugin](https://www.figma.com/community/plugin/1189962635826293304/Placemark) got a much-requested new feature: support for custom data. You can select any GeoJSON file from your computer, and the features will be overlaid onto the map! Just like the rest of the plugin's output, GeoJSON features become native Figma objects, so you can style them using all of Figma's power. Pretty cool.
