---
title: "Simplestyle"
description: "Simplestyle is a specification that lets you control how features are"
---

Placemark supports a version of the **simplestyle specification** that allows you to style map features directly. Simplestyle is available as one of the [Visualization](/documentation/visualization) options in the map interface.

Simplestyle works by using a few properties on each feature that contain color, opacity, and width information. The supported properties are:

* stroke
* stroke-width
* stroke-opacity
* fill
* fill-opacity

Each feature controls:

* stroke: controls the color of lines on the map. The value can be any hex, rgb, named, rgba, or hsla color
* stroke-width: the width of lines on the map
* stroke-opacity: the opacity of lines on the map
* fill: the color of filled features
* fill-opacity: the opacity of the filled feature's fills

### Differences from specification

In contrast to the official specification for simplestyle, Placemark:

* Placemark supports a wide range of color syntaxes, including named, rgb, hsl, rgba and hsla colors. The specification only supports hex.
* marker-size and marker-symbol properties are not supported
* title and description properties are not supported

### References

* [simplestyle-spec](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0) on GitHub
