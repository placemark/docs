---
title: "ZIP Codes"
description: "The US's ZIP Codes are a way of roughly grouping addresses. Placemark"
---

Placemark's support for [CSV](/documentation/csv) files includes specific support for ZIP Codes, the postal codes used in the USA. Data out in the world tends to use ZIP Codes, because people usually know which code they live in, and those codes track to something like a town or city area.

Geographers have a mixed relationship with the codes. They're designed for mail *routes*, to group houses in a certain order so that your mail carrier can efficiently deliver one neighborhood's mail at a time. So they're collections of house or addresses: a ZIP code doesn't have a specific area, it's a collection of points. There can be a group of houses with one ZIP code, and then a house with a different ZIP code right in the middle of those houses. This is something to be aware of when using ZIP codes. If you're deciding how to group data in the first place, [Census Tracts](https://en.wikipedia.org/wiki/Census_tract) might be a better choice.

If you already have data with ZIP codes, you can import them in Placemark using the CSV importer, and choosing the ZIP code option. This will turn them into geographical centerpoints. ZIP codes change, year by year. Currently Placemark's ZIP database is based on the 2020 data released by the US Census.
