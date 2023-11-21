---
Name: "Tech brief: JSON Pointer"
Collection ID: 616750c12c0aece979319ccd
Item ID: 6168068788f0af0909d07ffa
Created On: Thu Oct 14 2021 10:29:27 GMT+0000 (Coordinated Universal Time)
Updated On: Sat Oct 08 2022 19:40:01 GMT+0000 (Coordinated Universal Time)
Published On: Sat Oct 08 2022 19:40:05 GMT+0000 (Coordinated Universal Time)
Post Summary: How JSON pointer lets you target and modify certain parts of JSON
  objects, and how this can be really useful for GeoJSON.
Main Image: ""
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61bb57d9a8202ea14aeee2ac_JSON%20Pointers.png
Featured?: "true"
Date: Fri Aug 27 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

A big part of Placemark is modifying [GeoJSON](/documentation/geojson). GeoJSON is a standard for geospatial data, stored as a particular structure of JSON. I love the format - the spec is precise and friendly and the format is relatively easy to use, but modifying it can get complex.

For example, a MultiPolygon in GeoJSON might look like this:

‍\
The arrays of numbers are vertexes. How do you move a vertex? Well, it’s a bit tricky. I’m - currently - doing [immutability by hand](https://macwright.com/2021/03/05/immutable-approaches.html), instead of using immer or Immutable.js. I might move to immer eventually. Immer is about [2-3 slower than handwriting](https://immerjs.github.io/immer/performance), which would actually make a bit of a difference in some parts of my application.

So, to modify a vertex in this, you might write something like

You could, obviously, do this a number of ways - like using a deep clone instead of only cloning the parts you’ll change (for a slight performance hit) or using Object.assign or a shallow clone to copy the object. But the issue is not some performance gotcha, but that this method is going to be different for all the types of GeoJSON objects. I wanted to figure out a way to say “set this path of an object,” so that part of my code could determine the path and the other part could do the setting.

Hence, [JSON Pointer](https://datatracker.ietf.org/doc/html/rfc6901), another fine IETF spec. This lets you write strings, like geometry/0/0, that let you address different parts of an object to get or set.

Variations of this concept have been around for a while. lodash had [\_.at](https://lodash.com/docs/4.17.15#at), which accepts property paths, and there are great standalone modules like [dot-prop](https://www.npmjs.com/package/dot-prop) that support a slightly different syntax.

But JSON Pointer standardizes that syntax, which means you can use it with a variety of modules that implement the standard. And with [JSON Patch](https://jsonpatch.com/), another lovely IETF format. And then JSON Patch opens up opportunities to implement things like [Cambria](https://www.inkandswitch.com/cambria.html).

The only issue I found with JSON Pointer is that all of the implementations will mutate their inputs. Hence [I wrote a slightly modified version](https://gist.github.com/tmcw/86c958655202885a71c89cfcc5e6b850) of the [jsonpointer](https://www.npmjs.com/package/jsonpointer) module that adds a clone method. Thus I can do things like:

The upside of this is also that, by abstracting the task of getting pointers from the task of setting values in objects, I can gracefully handle of of the ‘gotchas’ of the GeoJSON format: that the first and last coordinates in a polygon [should be the same](https://datatracker.ietf.org/doc/html/rfc7946#section-3.1.6), so if you’re dragging the first point of a polygon, you should also be modifying the last point of the polygon to match it. In Placemark’s setCoordinate method, I can just get multiple pointers and set those multiple positions, like this:

‍\
And, well, that’s it! I’m intrigued by the JSON Pointer / JSON Patch combination. It reminds me faintly of [Redux](https://redux.js.org/), the React state mangement framework famous for introducing reducers and actions - a version of the [command pattern](https://en.wikipedia.org/wiki/Command_pattern) - to JavaScript and React. And I’ve seen that you can go overboard with that. I’m using [Recoil](https://recoiljs.org/) in Placemark instead of Redux and the simplicity of just setting state is excellent.

But JSON Pointer and possibly JSON Patch solve a very immediate problem - the difficult of digging down into objects in JavaScript. And by describing the part of the data that’s about to change, they also make it possible to efficiently preserve immutability, as I’m doing. And down the line, they might tie neatly into a collaboration model - but that’s a topic for another day.
