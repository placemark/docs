---
Name: "Changelog: December 15"
Collection ID: 616750c12c0aece979319ccd
Item ID: 639b886c0178742359dd5a92
Created On: Thu Dec 15 2022 20:49:48 GMT+0000 (Coordinated Universal Time)
Updated On: Thu Dec 15 2022 20:53:13 GMT+0000 (Coordinated Universal Time)
Published On: Thu Dec 15 2022 20:53:17 GMT+0000 (Coordinated Universal Time)
Post Summary: Rectangles, right angles, and open source modules!
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/639b885df91be0f600f0d778_Changelog%20-%20Dec%2015.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/639b885df91be0f600f0d778_Changelog%20-%20Dec%2015.png
Featured?: "true"
Date: Thu Dec 15 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Product

---

Here's what's new in Placemark!

### 20% off till the end of the year!

Inflation is roaring and most services are increasing their prices, but we're doing the opposite: Placemark is now 20% off for new accounts, till the end of the year!

### Lots of new open source

The Placemark Open Source Strategy™️ is simple: we incubate modules as part of Placemark itself, making sure that they work in production. Then, when they're stable and ready to go, they get released as open source modules, that Placemark then uses. So when you use a module from the Placemark GitHub organization, you're using the same thing that Placemark uses. This motivates us to maintain these modules, and hopefully a few of the folks using the open source code also hear about and use Placemark.

So what's new in open source?

* [GeoJSON Rewind](https://github.com/placemark/geojson-rewind): this is a module that Tom wrote in 2014 back at Mapbox, which has been refreshed, with TypeScript types, better tests, thorough documentation, and a more understandable API. Explaining what it does is a job for another post: what it does is esoteric but essential in the world of maps.
* [Micro TOTP](https://github.com/placemark/micro-totp): inspired by [Drew DeVault](https://drewdevault.com/2022/10/18/TOTP-is-easy.html), this module implements the basic parts of the [Time-based one time password](https://en.wikipedia.org/wiki/Time-based_one-time_password) algorithm, and is a key ingredient of Placemark's upcoming support for 2FA.
* [geo-viewport](https://github.com/placemark/geo-viewport): another refreshed classic, this module lets you convert between zoom / centerpoint map configurations and extent-based ones.

### Drawing & resizing rectangles

This feature has been requested pretty often! When you draw a rectangle in Placemark, you're drawing *a rectangular polygon* - which means that if you then move one of the corners of that rectangle, it moves like a shape would, not like a rectangle would. It immediately stops being a rectangle. This makes sense, but isn't always what people expect. But now, you can resize rectangles as rectangles:

‍

‍

In classic Placemark style, this behavior works in a few extra places. Let's say you have a MultiPolygon with multiple rectangles - those you can also modify like rectangles. Or a polygon with rectangular inner rings. That works too. If it's a closed, rectangular ring, it just works. And you can hit **Cmd**, while dragging, to turn your rectangles into irregular polygons.

Another related *orthogonal-themed* drawing improvement: when you're drawing lines or polygons, you can now hold down the Shift key to draw at right angles:

‍

‍

As you might have noticed in that video, this also comes with a new hints interface for drawing that will show you how to edit lines, polygons, and rectangles:

![Mode hint](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/639b86ce8a927f14a1533ef5_CleanShot%202022-12-15%20at%2015.42.26%402x.png)

### Reauth & SAML

* If you get logged out while editing a map, Placemark will now intelligently ask you to log in again, rather than doing the usual flow of redirecting to the sign-in page.
* SAML is now generally available, for Enterprise plans. If you're interested, reach out!
