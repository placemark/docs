---
title: "Drawing"
description: "How you can draw, edit, and manage the shapes and geometries that make"
---

Placemark supports drawing all of the standard geometry types: lines, points, and polygons. Click one of the drawing modes on the top-left bar to start drawing. You can also use keyboard shortcuts to enter each drawing mode: the numbers 1-5 will select each mode.

[GeoJSON](/documentation/geojson) and several other file types support multi-features, which let multiple lines, points, or polygons share the same properties. Drawing a feature on the map will always draw a single feature, but if you draw a feature and select it and some other feature, a 'link' icon will appear in the top bar that lets you combine those features into a multi feature. If the features are of different geometry types, they'll be combined into a GeometryCollection.

#### Drawing rectangles

You can click the square drawing tool to draw a rectangle, and then draw by clicking and dragging. Holding shift while drawing a rectangle will constrain the shape to a square, in map coordinates.

Rectangles aren't persisted, currently, so modifying them after drawing will not retain their right angles.
