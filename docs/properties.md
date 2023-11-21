---
Name: Properties
Collection ID: 61672c73ba256802311968e5
Item ID: 62a630c563aafa13b0eb5825
Created On: Sun Jun 12 2022 18:30:29 GMT+0000 (Coordinated Universal Time)
Updated On: Thu Jul 14 2022 18:32:42 GMT+0000 (Coordinated Universal Time)
Published On: Thu Jul 14 2022 18:32:53 GMT+0000 (Coordinated Universal Time)
Body: "<p id=\"\">Something that really distinguishes geospatial data from
  images or drawings is the prominence of <strong id=\"\">properties</strong>.
  Map features aren't just geometries, like a polygon in the shape of Manhattan,
  but also contain data that describes what that shape is, in the world.
  Properties are usually stored as pairs between a \"key\" and a \"value\", like
  key=name, value=Manhattan. You can think of this like rows in a spreadsheet -
  each column is a key, and each row has a value for each key.</p><h4
  id=\"\">Properties are freeform</h4><p id=\"\">Another distinguishing fact
  about properties in geospatial data is that they're freeform. While some
  mapping tools will limit you to input a \"name\"&nbsp;and \"description\", in
  the general sense any feature on a map can have any set of properties - any
  names and any values. Placemark embraces this fact and is not opinionated
  about properties names and values. One of your datasets might refer to things
  with a \"name\" property, another might use \"title\"&nbsp;or \"id\". Any of
  the following will work.</p><h4 id=\"\">Properties are typed</h4><p
  id=\"\">Properties in geospatial data have <strong id=\"\">types</strong>. Any
  value that can be stored as JSON&nbsp;can be used, which
  includes:</p><ul><li>boolean (true
  &amp;&nbsp;false)</li><li>null</li><li>numbers</li><li>strings</li><li>arrays\
  </li><li>objects</li></ul><p id=\"\">A given property might be a number, some
  text, as boolean value like true or false, or even a complex array or object
  for software to use. Placemark supports all property types that are valid in
  GeoJSON, which is one of the most permissive and flexibly-typed
  formats.</p><h4 id=\"\">Properties can be different for different
  features</h4><p id=\"\">While properties can be compared to rows in a table,
  they're more powerful than that. In a given dataset, different features can
  have different sets of properties. If one feature has a property like
  \"height=42\", other features can have a height property, or omit that
  property entirely. In this way, properties are more freeform that
  tables.</p><h4 id=\"\">Rich text properties</h4><p id=\"\">Placemark supports
  editing <a href=\"/documentation/rich-text\" id=\"\">rich text properties</a>,
  which are represented as HTML in code but are edited with a friendly
  non-coding editor. You can upload images that'll be automatically hosted and
  shown in the rich text, as well as add styles like bold, link, strikethrough,
  and headings.</p><p>Rich text is stored as an object, like
  this:</p><div></div><p>When you're using Placemark, you won't have to worry
  about how rich text is stored, but when you're integrating data into a web
  map, you can look for the <strong>@type</strong> property to decide whether to
  display a value with HTML&nbsp;or plain-text.</p><h4>Casting
  properties</h4><p>Placemark supports casting properties, which means
  translating and re-interpreting them between different data types. For
  example, you might import data that contains numbers, but they're stored as
  strings. You can cast the values from string to numeric types to transform a
  value like \"100\" into the value 100.</p><h4>Colors</h4><p>The property
  editor will offer to edit string properties that look like colors with an
  interactive \"color wheel\"&nbsp;editor for color values. The works by
  auto-detecting strings that look like CSS&nbsp;colors, like hex colors ( #f00
  ) or rgb colors ( rgb(244, 244, 244) ).</p>"
Category: guides
Summary: "Properties are part of what makes geospatial data so powerful:
  features can contain data, not just shapes."

---
