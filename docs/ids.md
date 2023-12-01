---
Name: IDs
Collection ID: 61672c73ba256802311968e5
Item ID: 626f1a3fd608a4d33ba472ba
Created On: Sun May 01 2022 23:39:43 GMT+0000 (Coordinated Universal Time)
Updated On: Wed Aug 24 2022 22:37:09 GMT+0000 (Coordinated Universal Time)
Published On: Wed Aug 24 2022 22:37:28 GMT+0000 (Coordinated Universal Time)
Category: guides
Summary: "Features can have two IDs: your IDs and System IDs. You can use IDs in
  the REST API, imports, and exports to identify features."

---

Placemark supports an **id** for every feature. This is in accordance with the [GeoJSON "id" member](https://datatracker.ietf.org/doc/html/rfc7946#section-3.2), which can either be a string or a number value. It's recommended that ids are unique, but this isn't enforced, because GeoJSON documents with duplicate ids are valid.

#### Formats

* id properties in incoming GeoJSON data are preserved.
* Export to [KML](/documentation/kml), [GeoJSON](/documentation/geojson), and [GeoJSONL](/documentation/geojsonl) formats will maintain IDs.

#### System IDs

Every feature also has a **system ID**, which is guaranteed to be unique across all of Placemark: this is a UUID. System IDs can't be updated or controlled - they're created when features are added. You can use system IDs in order to refer to features at the API level - every feature has its own endpoint in the [REST API](/documentation/placemark-rest-api).

You can optionally include System IDs in [GeoJSON](/documentation/geojson) exports by selecting the option in the export dialog.

#### User vs System IDs

User IDs:

* Can be set to any string or number value that you want.
* Are at the root level of features and are not in the properties object, so you can have both an ID on the feature and an "id" property.
* Can be imported & exported and are preserved.

System IDs:

* Are fixed and not editable.
* Can be used in Placemark's APIs to specify a particular feature.
* Are in the properties object when they're exported: they are the property "@id".

#### Example
