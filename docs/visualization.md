---
Name: Visualization
Collection ID: 61672c73ba256802311968e5
Item ID: 61756182666233794441aff7
Created On: Sun Oct 24 2021 13:37:06 GMT+0000 (Coordinated Universal Time)
Updated On: Thu Mar 24 2022 20:02:41 GMT+0000 (Coordinated Universal Time)
Published On: Thu Mar 24 2022 20:02:46 GMT+0000 (Coordinated Universal Time)
Category: guides
Summary: The state of our support for interactive, dynamic map visualizations.

---

Placemark makes it possible to view data with styles, for visualization, QA, and other sorts of tasks. You can access this interface by clicking the eye icon in the top right. Because geospatial data does not have a generally-agreed on way to express styles, there are different ways provided to visualize the same data.

### Categorical

With the categorical option, you choose one property in your dataset to drive the visualization. Values from that property will then be assigned to different colors. For example, if you're analyzing blocks of land and each feature has a property like "terrain", you could set the features with "terrain=sand" to be displayed differently than those with "terrain=water". The categorical style is usually used with string properties that have a specific, restricted set of values.

### Ramp

With the ramp option, you choose a property in your dataset that contains numeric values, and you can map those values to a color range. For example, if you're measuring per-capita GDP of countries, you could choose the normalized GDP property and make the lowest values blue and the highest green, or any other ramp color combination.

### Simplestyle

Where the categorical and ramp options *interpret* data into styles, the simplestyle option reads style information from your data. This is using principles from the [simplestyle-spec](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0) project. Supported properties include:

* fill
* fill-opacity
* stroke
* stroke-opacity
* stroke-width

The values of the "fill" and "stroke" properties need to be valid colors in hexadecimal, like in CSS - for example, #ace. The values for fill-opacity and stroke-opacity should be numbers between 0 and 1. The value for stroke-width should also be a number, and can have any value, but should be >0, otherwise the line will not be displayed.

The simplestyle spec itself defines marker color & symbol properties. These are not supported in Placemark.
