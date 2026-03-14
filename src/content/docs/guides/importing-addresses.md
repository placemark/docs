---
title: "Importing addresses"
description: "Importing map data from addresses in CSV or Excel files is really"
---

Placemark supports importing addresses from [CSV](/documentation/csv) and [XLSX](/documentation/excel) files. This is a common kind of data: say, a list of libraries with addresses rather than longitude, latitude values. We hope that this functionality is useful, but there are some important notes.

Addresses can be in two forms:

* As a **single column**, combined. For example - **1600 Pennsylvania Avenue NW, Washington, D.C.**
* In multiple **structured** columns. For example, Address: **1600 Pennsylvania Avenue NW**, City: **Washington, D.C.**

#### If your data is already structured in multiple columns, use the structured import

Giving the geocoder the information that, "Maryland" is the state you're looking in rather than the name of a street or a point of interest will make geocoding results much more accurate.

#### Try to clean and fix your data first

When using addresses in import, try to clean your data and include as much information as possible. Even though we as people know that, say, "1600 Pennsylvania Avenue" is the White House's address, there are two different places with that address in Washington DC, plus locations with the same address in Baltimore, Brooklyn, and Pennsylvania.

#### Be careful of missing data

Another thing you'll see in address datasets is missing values. A volunteer might write "No Address" for rows without an address, or worse, something like "Somewhere in Maryland". These, of course, aren't really places, and Placemark will produce features with null geometries given these inputs.
