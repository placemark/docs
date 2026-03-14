---
title: "Types"
---

Placemark supports many different types of property values. Any value that's valid [JSON](https://www.json.org/json-en.html) can be the value of a property. So that includes the following:

* string (text)
* numbers
* boolean (true and false)
* null
* arrays & objects

So, for example - you could have a "height" attribute with numeric values, a "name" attribute with string values, and a "tags" attribute that is an array.

#### Types are flexible in Placemark

In contrast to systems that are based on strict data tables, the types of your attributes in Placemark are not constrained by a schema: one feature can have a "name" that's a string, and another feature can have a "name" attribute that's an array of numbers.

This flexibility can be powerful, and is necessary because many formats support mixed values.

#### Default types

Placemark chooses a type to use by default when you initially set an attribute.
