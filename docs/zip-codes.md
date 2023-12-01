---
Name: ZIP Codes
Collection ID: 61672c73ba256802311968e5
Item ID: 616af1dd44b2f643f935f04b
Created On: Sat Oct 16 2021 15:38:05 GMT+0000 (Coordinated Universal Time)
Updated On: Sat Oct 16 2021 15:41:21 GMT+0000 (Coordinated Universal Time)
Published On: Sat Oct 16 2021 15:45:34 GMT+0000 (Coordinated Universal Time)
Category: guides
Summary: The US's ZIP Codes are a way of roughly grouping addresses. Placemark
  supports importing them when they're included in a CSV file.

---

Placemark's support for [CSV](/documentation/csv) files includes specific support for ZIP Codes, the postal codes used in the USA. Data out in the world tends to use ZIP Codes, because people usually know which code they live in, and those codes track to something like a town or city area.

Geographers have a mixed relationship with the codes. They're designed for mail *routes*, to group houses in a certain order so that your mail carrier can efficiently deliver one neighborhood's mail at a time. So they're collections of house or addresses: a ZIP code doesn't have a specific area, it's a collection of points. There can be a group of houses with one ZIP code, and then a house with a different ZIP code right in the middle of those houses. This is something to be aware of when using ZIP codes. If you're deciding how to group data in the first place, [Census Tracts](https://en.wikipedia.org/wiki/Census_tract) might be a better choice.

If you already have data with ZIP codes, you can import them in Placemark using the CSV importer, and choosing the ZIP code option. This will turn them into geographical centerpoints. ZIP codes change, year by year. Currently Placemark's ZIP database is based on the 2020 data released by the US Census.
