---
title: "Placemark thematic maps, v2"
description: "Making thematic maps, custom styles, and exporting better than ever."
date: 2022-07-08
---

This week we're rolling out a big update to Placemark's support for **thematic mapping**. In this case, that means mostly choropleth maps - in which some number determines the color of an area - and classified maps, which map discrete values to different colors.

We had some thematic mapping features, before, but this update really starts from scratch to make it all way better.

* We now support both **linear** and **quantile** classifications for choropleth maps. This is a big boost for datasets that have outliers: with a linear scale, you'll get almost no color differentiation for most features if there's one feature with a really high or really low relative value.
* You can now use **literal styles** - [simplestyle](/documentation/simplestyle) - at the same time as data-driven styles. This lets you easily override data-driven styles with your own.
* There's a new UI for literal styles which makes them way simpler. Now you don't have to remember which properties control literal styles, and there are convenient number & color inputs for each of the parts of a literal style.
* The color ramps are improved - we're starting with the renowned presets from [ColorBrewer](https://colorbrewer2.org/#type=sequential\&scheme=BuGn\&n=3), and all of the options available are safe for most forms of colorblindness. You can choose whether to interpolate colors between stops, or treat them like steps.
* You can export these ramps now, to both [Mapbox GL](https://docs.mapbox.com/mapbox-gl-js/api/) styles (which you can also use with [Maplibre](https://maplibre.org/)) and Leaflet styles.
