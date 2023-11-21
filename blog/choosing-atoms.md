---
Name: Choosing atoms
Collection ID: 616750c12c0aece979319ccd
Item ID: 6167512a973f84b04a7e8452
Created On: Wed Oct 13 2021 21:35:38 GMT+0000 (Coordinated Universal Time)
Updated On: Sun Jul 31 2022 19:04:21 GMT+0000 (Coordinated Universal Time)
Published On: Sun Jul 31 2022 19:05:12 GMT+0000 (Coordinated Universal Time)
Post Summary: This is one of those hard-to-pin-down engineering concepts of how
  to shape your data, which trickles into the whole system design.
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61bb57f3c695f40934e44d9c_Choosing%20atoms.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61bb57f3c695f40934e44d9c_Choosing%20atoms.png
Featured?: "true"
Date: Wed Oct 13 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

Here's a technical decision I had to make recently in September, the *big month of collaboration*: what are Placemark's atoms?

An atom, here, is the smallest piece of information that can't be broken apart. Two tests that I use for this is: an atom is the smallest thing that has its own unique identifier, and it's the thing that occupies a row in the database.

## Text atoms

The most basic example would be text. If you were creating a text editor, the backend data structure could be as simple as a TEXT column in the database, containing all of the text for a note or blog post.

But what if you're creating something like [Notion](https://www.notion.so/) or [Observable](https://observablehq.com/), in which there's an idea of 'blocks' of text, like paragraphs, that you can order by dragging them around, and that have their own properties, like style in notion and programming scope in Observable? Those blocks should probably be atoms, and then the document is a list of blocks.

What if you're building a collaborative text editor, and you need to handle multiple people typing in the same area at the same time, using a [CRDT](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) to resolve changes without a central coordinator? Each *character* needs an identity, in that case.

The moral of the story is that you can represent the same user-facing content, a bunch of text, using either extremely coarse atoms -- a single TEXT column -- or extremely fine atoms -- every character having its own identity.

## Atomic tradeoffs

Choosing the right granularity for data storage has trickle-down effects on the whole application. And every choice has significant pros and cons. Here are some that I've been thinking about.

### Small atoms

If you give tiny bits of data their own identifiers, it's worth thinking about what identifiers are. In this case of lots of identifiers for tiny bits of data, it's very likely that you're using UUIDs, theoretically-unique, random identifiers, instead of incrementing integers, because it's likely that you're building some kind of offline-first, collaborative, or semi-distributed system.

You might be generating IDs with [nanoid](https://github.com/ai/nanoid) or [Postgres's UUID type](https://www.postgresql.org/docs/9.1/datatype-uuid.html), or a [rfc4122 uuid generator](https://www.ietf.org/rfc/rfc4122.txt). These all have the same basic goals: to maximize entropy, or randomness. A collision between UUIDs should be so rare that programmers can assume it'll never happen and be mostly correct.

To achieve this goal, they make sure that there's enough information in the UUID - that there are lots of possible values of the UUID, which means a long string, in the case of rfc4122, or a medium-length strings with more choices of characters, for nanoid.

And they ensure that they're picking evenly from all the possible values. If you had a bad source of randomness that was only choosing from the first 1/2 or 1/100 of the values, then chances of a collision skyrocket.

This is all a wind-up to [Shannon's source coding theorem](https://en.wikipedia.org/wiki/Shannon%27s_source_coding_theorem):

Named after Claude Shannon, the source coding theorem shows that (in the limit, as the length of a stream of independent and identically-distributed random variable (i.i.d.) data tends to infinity) it is impossible to compress the data such that the code rate (average number of bits per symbol) is less than the Shannon entropy of the source, without it being virtually certain that information will be lost.

Ever wonder why the [HBO logo sequence](https://www.youtube.com/watch?v=P_Oh7HizY5I) always looks like trash, even when your router is working fine? It's in part because there's a lot of static in that image, static is randomness, and the degree to which something is random is inversely proportional to how much you can compress that thing.

So: IDs are actually expensive. In [Placemark](https://www.placemark.io/), I had a prototype in which every vertex of a geometry had an identity. This looked like this, in a database schema:

So, the napkin math is:

* longitude & latitude: a Float [in Prisma](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#float) is a double precision in [Postgres](https://www.postgresql.org/docs/9.1/datatype-numeric.html), so these are 8 bytes each, for a total of 16 bytes.
* nanoid: identifiers are 21 characters, stored as TEXT (there's no advantage to varchar or char types in Postgres) means 21 bytes plus 1 byte for the length, so 22 bytes.

So… yeah, by making Position objects identifiable, we were suddenly storing *more data* for bookkeeping than for the content itself. This happens pretty often - the automerge project has [seen similar pitfalls](https://github.com/automerge/automerge/issues/311) of assigning IDs to tiny things: UUIDs are by definition not tiny and not compressible.

### Other overheads

That's just the storage overhead: there's overhead for [storing lots of tiny rows](https://www.postgresql.org/docs/13/storage-page-layout.html), and with smaller, non-consecutive blocks of data, there's less benefit of [Data Locality](https://gameprogrammingpatterns.com/data-locality.html): in the example of storing text, if you actually stored each character in the database (applications don't do this, but as an example), and reconstructed those characters into text, there's no easy guarantee that those characters are in consecutive rows, or in a distributed database, within the same shard. With coarse-grained data, this isn't really a concern: this one, or at most a few, rows in which relevant data is stored.

Let's talk about data modeling, too! Let's take that Position example from before. That Position row isn't some standalone thing, it's attached to a geometry, which is a part of a map, which is contained in an organization. Modeling this relationship requires adding a chain of parentId relationships (or something similar), which adds data storage overhead, and also query overhead -- to enforce that some user setting a Position has permission to set it, you have to check that the position's geometry's map's organization is a valid one for that user.

This task of connecting small atoms together into a tree structure and enforcing things about that tree structure is difficult and there aren't many out-of-the-box solutions to it. A system for connecting an 'object pool' is one of the very interesting thing from Linear.app's approach, [described in this talk](https://youtu.be/WxK11RsLqp4?t=2182) by Tuomas Artman.

## Big atoms

How about the inverse - fat objects. Instead of storing characters or blocks of text, storing the whole thing. Instead of storing positions, just storing a map in one row of the database.

There's no competing with the simplicity or storage-efficiency of this approach: you've got one ID, one contiguous chunk of information. But for a collaborative application, or even a lightly interactive one, there are big downsides.

The first is that any sort of saving, updating, and reloading of the data is less efficient: you're loading a larger chunk from the database, sending that larger chunk to the client. If you have any sort of 'memoization' optimization in your app that can skip re-rendering when data stays the same, this will likely break that optimization. If you want to do something like 'checking off a single task in a todo list', you'll have to either send all of the items in the todo list in order to check off one, or you can have the server make that change which just moves the cost to a different place.

The magnitude of potential editing conflicts also increases. If multiple people are using the text editor at the same time and simply modifying one large block of text, they'll spend most of their time confused, overwriting each other's changes. Even if you build a smart merging system on the backend, the information that system will get will be suboptimal: all it sees is that some user is now sending it a whole new document.

Small atoms naturally segue into a sort of somewhat-space-efficient version control: you could do an [immutable log](https://macwright.com/2021/03/05/immutable-approaches.html) of changes, storing new versions of a Position and keeping the old ones so that people can see the state of the document at different points in time. Large atoms, on the other hand, naturally lead to full copies or 'snapshots' of the document. Simple, but inefficient in many cases: it's often better to encode changes rather than full copies.

Like a lot of choices in application engineering, there are advantages to each. I deferred this decision until Placemark started using [replicache](https://replicache.dev/) and had to figure out how it would store maps and talk to the backend.

I landed on my current approach the honest way: by doing the wrong thing first. Tiny bits of data, the [GeoJSON](/documentation/geojson) objects sliced into tiny chunks with their own identifiers and database rows. The overhead and complexity jump was too much, in exchange for not enough benefit: realtime editing of the same attribute of the some feature is an edge case, not something that should dominate the whole system design. So for now, features are the atoms.

That said, granularity may return because of one concern or another, because

[With you on the keystroke\
And me on the gangplank\
There's advantages to both\
(Advantages to both!)](https://www.youtube.com/watch?v=xYCV2zybQoI)

‍
