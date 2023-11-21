---
Name: Collaboration technical deep-dive
Collection ID: 616750c12c0aece979319ccd
Item ID: 6310f94ea1c21f494597b480
Created On: Thu Sep 01 2022 18:26:22 GMT+0000 (Coordinated Universal Time)
Updated On: Mon Sep 05 2022 21:34:47 GMT+0000 (Coordinated Universal Time)
Published On: Mon Sep 05 2022 21:35:00 GMT+0000 (Coordinated Universal Time)
Post Summary: Gritty details on how Placemark implements collaboration.
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/6310f94605461a0673e167e7_Technical%20collaboration.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/6310f94605461a0673e167e7_Technical%20collaboration.png
Featured?: "true"
Date: Thu Sep 01 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

Editing a map in Placemark is instant and collaborative. There's no "save" button. Changes are saved instantly. If someone else in your organization is looking at the same map, they see the changes, even as you drag a single vertex of a complex shape.

This might be old-hat for web applications like Notion or Figma, but it's pretty unique for a map editor. Maps are complicated and large, and powering collaboration on geospatial data is a tricky problem. Placemark hasn't solved it completely – there's a lot further to go – but here's some information about how it all works.

### Synopsis

Placemark stores data in [Postgres](https://www.postgresql.org/), uses [Replicache](https://replicache.dev/) as a client library to pull and push data to the server, and [Jotai](https://github.com/pmndrs/jotai) to connect that data to React components.

### Replicache

Placemark uses [Replicache](https://replicache.dev/) as a key part of a collaboration stack that also includes Postgres, Jotai, and Server-Sent Events.

Here's what Replicache does in the stack:

* Manages the main document of Placemark, the map, and the changes to that map.
* Handles optimistic updates - when you do something like dragging a point, you'll first see the update just as your browser *anticipates* it locally, then Replicache pushes an update to the server, then it'll resolve the server's new version of that point with your local version.
* Handles conflict resolution, if someone else is modifying the same map at the same time.
* Manages an IndexedDB database on the client side that stores the latest version of the map, which can be used to speed up the initial pageload.

Replicache is a client, not a backend. It works with your own backend - in my case, with Placemark's Postgres datastore.

### Postgres

Postgres is our database - it stores map features, indexed by unique IDs, and using transactions in Postgres we're able to coordinate multiple people editing the same map. As this part of the application scales, it'll likely evolve to use something like [Neon](https://neon.tech/) or [Crunchy Data](https://www.crunchydata.com/), or move to a two-tiered database system with a "fast" transactional database and a "slow" object store.

Collaborative geospatial data is a funny thing.

Collaborative applications often put read & write performance at the absolute top of their lists, using something like [Scylla](https://www.scylladb.com/) in Discord's case. Others use [Redis](https://redis.io/) and other memory-centric databases that sacrifice structure, relations, durability, and data type richness for pure speed.

On the other hand, the geospatial industry heavily uses object stores like S3 to store big, read-only data cheaply. Or they use heavily-indexed [PostGIS](https://postgis.net/) tables with geospatial columns, and use the database for so much more than just querying - you can do full-fledged analysis and transformation tasks with PostGIS queries.

Placemark is caught in the middle. Object stores like S3 aren't viable for its needs because of transactional, incremental, and frequent writes. Super fast and mostly scalable unstructured databases like Cloudflare K/V store or DynamoDB are too unstructured for its rather important relational connections between data and strict schema.

### Why not PostGIS?

For now, Placemark uses Postgres. Just Postgres, no PostGIS.

It's been a pretty common question - why not use PostGIS? PostGIS is a great project and so ubiquitous that it's usually a surprise that Placemark doesn't use it yet.

I might use PostGIS in the future, but at the present, each feature on a map is stored in a [jsonb](https://www.postgresql.org/docs/9.4/datatype-json.html) column.

* PostGIS provides a great spatial index system, but Placemark doesn't have any need for a server-side spatial index at this point. You're editing the data – all the data.
* Avoiding using all of the features of Postgres means it'll be easier to switch to either PostGIS or a different storage system in the future.
* Indexes are a cost - they make data changes slower and take up space. Placemark's goals include performance against changing data, which means that when any indexes *are* introduced to this crucial part of the application, they'll need to be carefully benchmarked.
* PostGIS provides great spatial operations partially by binding to [CGAL](https://www.cgal.org/). These are super nifty! But Placemark's collaboration model and [undo/redo system](https://www.placemark.io/post/how-placemark-implements-undo-redo-to-make-map-making-safe-and-chill) mean that implementing a server-side mutation like that will be a rather unique challenge – mutations within the undo/redo system will have to become more complex.
* One goal of Placemark is to provide a "pristine" representation of imported data, which can even mean things like preserving arbitrary properties attached to GeoJSON. Storing geometry data in PostGIS would change this behavior, because you're implicitly converting everything to WKB.

So, while PostGIS is a great addition eventually, it doesn't make as much sense in the short run. Unlike many geospatial applications, this is an editor first and it focuses more on read/write performance, raw data, and collaboration than it does on preprocessing or server-side computation.

### Jotai

Replicache provides a way to [read directly from its database](https://doc.replicache.dev/api/interfaces/ReadTransaction) by scanning records. Placemark previously used this - every time that data updated, I'd scan the map's data and collect it into an array, and update the page. Unfortunately, this became a bottleneck: the larger the map grew, the longer each change would take to propagate to an updated map.

To work around this bottleneck, I rearchitected Placemark's data model to store data in both Replicache's IndexedDB *and* in memory, in [Jotai](https://jotai.org/). Jotai is a simple state management library for React: it provides a similar API to React's built-in setState method, but with the ability to easily access that state from any place in the application.

With this change, Placemark is like a [CQRS](https://www.martinfowler.com/bliki/CQRS.html) application: it uses one system to do updates and another to read data. This would be overkill in a simpler system, but it works well for Placemark's constraints.

On one side, we need an efficient "read" data model. It can't have a lot of memory overhead, and it should be updatable rapidly. A solution like [Immutable-js](https://immutable-js.com/) would add too much performance overhead in this case. So Placemark's data is structured in a way that's fast to access and scan – specifically, ordered native JavaScript Map objects. With a Map, looking up features & folders by ID is very fast and there isn't a lot of bookkeeping overhead. Map is mutable, so simple changes can be made without copying or recreating all the application's data. A touch of mutability is very useful for performance, even if it's ideologically impure.

And on the other side, the "write" data model is complex. Placemark supports operations that affect multiple features at the same time, like "renaming a data column", but that should be treated as one operation to work property with the [undo and redo system](https://www.placemark.io/post/how-placemark-implements-undo-redo-to-make-map-making-safe-and-chill). Bulk transactions, like deleteFeatures, are also crucial for making large data changes fast by implementing them in fast SQL in Postgres.

### Abstraction

All this complexity requires a good abstraction, otherwise any change to how Replicache or Jotai operations work would require a change to all the files in the application.

Plus, when you look closely, there are three different backends for Placemark:

1. The collaborative canvas, the default for persisted maps.
2. The scratchpad, which uses Jotai *only*, doesn't persist data and only stores it in memory, and doesn't use Replicache.
3. Shared maps, which have their initial data preloaded and then are static and not editable.

How can all of these work with the same codebase? Well, my approach has been to move the persistence into an object, with an interface called IPersistence:

Then, each kind of page: the persisted maps page, or a public maps page, or the scratchpad, can create a persistence object and inject it into the application using a [React context](https://reactjs.org/docs/context.html):

This way, a component can just get a transact method from context and call it with some operation, like updating a property or moving a feature, and it doesn't have to be concerned with how that operation is implemented or where the data is persisted. For example:

This is an adapted version of some of the keybindings. This custom hook gets its persistence layer from context and gets methods to transact and control history through it: the component itself doesn't know whether that "undo" operation is part of a collaborative environment, happening only locally in React state, or is even a no-op for a non-editable map view.

### How would you do it?

Like any design, some parts of Placemark are surprisingly complex and others are surprisingly simple. Implementing complexity where it's truly needed has been a key to success, and that mainly tracks back to the key goals and data-driven approaches like benchmarking and user feedback.

This architecture will definitely change as time goes on, but I hope that it's useful to share the gory details, especially because so many products are aiming for this kind of collaboration model.
