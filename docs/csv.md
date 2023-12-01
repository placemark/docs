---
Name: CSV
Collection ID: 61672c73ba256802311968e5
Item ID: 61673068fd7aacb0b5254330
Created On: Wed Oct 13 2021 19:15:52 GMT+0000 (Coordinated Universal Time)
Updated On: Thu May 19 2022 21:55:34 GMT+0000 (Coordinated Universal Time)
Published On: Thu May 19 2022 21:58:31 GMT+0000 (Coordinated Universal Time)
Category: formats
Summary: A text-based file format that's popular as a spreadsheet export.

---

CSV, or comma-separated values, is a common way to store tabular data. You can often import and export CSV files with spreadsheet and database software. Not all CSV files have geospatial data: they are usually just tables. Placemark supports different kinds of CSV files:

* Longitude, latitude data that is read as a point per row
* [ZIP Codes](/documentation/zip-codes), which are matched with a database and transformed into points

TSV files, which use tabs to separate columns, and DSV files - delimiter-separated files, which can use other separators like ; - are functionally equivalent to CSV files. Importing those files is supported in the same way.

CSV has no standardized way to represent data types other than points, so CSV files are not traditionally used for data like lines or polygons.
