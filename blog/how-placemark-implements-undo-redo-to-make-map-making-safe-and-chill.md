---
Name: How we implement undo/redo to make maps fearlessly
Collection ID: 616750c12c0aece979319ccd
Item ID: 619ef1178661d32e59385a0d
Created On: Thu Nov 25 2021 02:12:39 GMT+0000 (Coordinated Universal Time)
Updated On: Wed Aug 10 2022 01:30:42 GMT+0000 (Coordinated Universal Time)
Published On: Wed Aug 10 2022 01:31:24 GMT+0000 (Coordinated Universal Time)
Post Summary: Inspired by Figma, here's a peek into how we implement mutable,
  command-oriented, local history.
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62f30a3b33f5453c0f30af01_Undo.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62f30a3b33f5453c0f30af01_Undo.png
Featured?: "false"
Date: Thu Nov 25 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

Undo is a funny feature to implement, because it can be incredibly difficult to design and code, and once you're done users nod and say, 'oh, okay, it has undo.' The web doesn't have undo built-in, and a lot of websites don't support undo at all.

But on the other hand, undo is a powerful feature that lets you design the rest of your application differently. When you don't have undo, big destructive actions need confirmation steps. But if you can undo, users can be fearless, knowing that command+z is there.

There are lots and lots of ways to implement undo. Placemark landed on a solution in the same vein as [Figma's](https://www.figma.com/blog/how-figmas-multiplayer-technology-works/) – but undoubtedly less sophisticated.

I'll try to outline some of the families of thought here:

### Immutable history-powered undo

Whatever your data model is, keeping a copy of it for every change that a user makes. Hitting command-z finds the most recent version of all your data and replaces the current state with that.

Because storing a copy of everything will obviously consume a lot of storage, many immutable history implementations find ways to cut down on storage. You can use [immer](https://github.com/immerjs/immer) or another library that does structural sharing, or specialized compression setups.

Immutable history was how I learned to implement undo/redo. I [wrote about this back in 2015, using Immutable.js](https://macwright.com/2015/05/18/practical-undo.html). And the same technique is more or less in place in Mapbox Studio and iD.

### Command-powered history

The main alternative to immutable history is storing a history of the commands you performed on a dataset. For example, if you can increment a number, the reverse is to decrement that number. So running undo runs the "reverse" and redo runs the "forward" of that action.

Under the heading of command history, there are some additional wrinkles:

* Do you create both the "forward" and "reverse" commands when you take an action?
* What are the commands? This is tightly connected with the question of [what are your atoms](https://www.placemark.io/post/choosing-atoms). Is a command coarse like "replace this feature with an updated feature", or is a command fine-grained like "move a vertex within this feature"?

### Undo versus collaboration

I quickly discovered that the idea of *immutable history powered undo* was totally incompatible with collaboration. Basically, you and some collaborator are working on a document and your changes are merged into the document in real-time. You might be editing one feature, your collaborator is editing another.

When one of you hits command-z, you want to undo the changes *you* made, not your collaborator's changes. You might not even be aware of what the other person is doing - their work is offscreen, somewhere else. So you need a sort of *ownership* built into your undo system.

So, commands. And I first implemented commands in the 'bidirectional' sense, generating both the undo & redo commands at the time you do something. This was quickly disproven because, well:

* You create a red feature (storing {undo = delete that shape, redo = create a red feature})
* Someone changes its color to green
* You hit command-z to undo the feature creation (deleting the shape)
* You hit command-shift-z to redo the feature creation (creating a red shape)

The last step feels wrong. What if the shape was heavily modified by your team before you delete it, and then your delete-undelete step turns it back into its initial form? That would be bad.

So I'm just agreeing with [Figma's blog post](https://www.figma.com/blog/how-figmas-multiplayer-technology-works/) some more - when it comes to collaborative undo/redo, there isn't some provable definition of what the "good behavior" is, but I think it's clear that some of the solutions end up feeling wrong. A simple immutable history was a lovely, comfortable idea, but it only worked for me in the past because Mapbox Studio is single-player, and iD editor isn't a realtime collaboration tool.

There are some interesting things to note about actually putting this system into practice.

### Batches & transactions

First, *batches and transactions* are really important. Let's say you merge a bunch of features in Placemark. This removes the original features and adds a new feature. A naive undo history might look like:

1. Adding features
2. Deleting features (as part of a merge operation)
3. Adding the merged feature (as part of the merge operation)

This obviously feels wrong: the deletion of old features & addition of new features should be part of the same thing.

The abstraction I chose for this I call a "moment" but it could be a "step" or a "commit" or something else. Moment felt like it didn't conflict with any existing terminology and it felt whimsical. Here's what a moment looks like:

This follows a theme in Placemark - basically everything is plural, whether it's deleting or updating things, selections, and so on - almost everything should be compatible with batching. This really benefits things like server communication, with fewer requests, and some aspects of frontend performance, like transactions with Replicache.

### Mutating history

This is the weirdest part, and the part that the aforementioned Figma article refers to. So the history in Placemark is stored as two arrays, for undo & redo states. You could totally store this as one single array and some pointer to where the current state is. And the order of the arrays is from most recent to least, in both directions, but that again is up to you.

But the weird part is here:

The weird part is the call to this.apply, which *generates a new reverse moment*. So if you created a feature and then hit undo, you execute a "delete" command, and create a new "create" command with the feature you just deleted.

One neat aspect of this change is that when you create a feature, the only thing that needs to be created and stored on the list of commands is a "delete" command with that feature's id.

### Ephemeral states

Of course, there's more. Think about a color picker or what happens when you drag a vertex. Most likely, what you want out of that experience is

1. You should see the effect of your dragging immediately, as you drag. So if you're dragging a vertex, you should see the shape change.
2. If you're collaborating with someone, they should probably also see the incremental progress.
3. But, if you "undo" that drag, what you want to undo is the change from mousedown to mouseup, not the smaller effect of the last mousemove.
4. And those brief states during the drag should probably never be versions in a versioned document system.

This necessitates an idea of ephemeral states, or a sort of pausing or grouping of the undo history. That's precisely what Placemark has right now - in the informal state machine for drawing lines and polygons, all of the geometry modifications that happen during a drag are ignored, and a new moment in history is only added when you click.

### Undo is different from versioning

I *really* wanted one system to handle both undo history and versioning, but that just doesn't make sense: undo history should be different for every user, and it naturally fits in local state, though you could sync it to a server as a treat.

Placemark's version system will be something more like the immutable history idea, using snapshots on in object storage or a fancy table layout in Postgres. Its history will be initially linear, and might have to eventually include concepts like forking and merging.

The idea of using git or another pre-existing versioning system for this part of the system keeps coming up, but so far I don't see it working. Placemark will likely *sync* to GitHub, but not use git internally, unless my architecturally calculus changes drastically.

### Some remaining puzzles with undo

Placemark's system for undo works for a lot of map-making experiences, and it generally makes command+z work.

There are still some challenges, in the long-term:

* Individual history will have to be synced to a server or browser storage to make command-z work after a window refresh. I don't especially think that anyone *expects* command-z to work after a refresh, though, so this isn't a high priority.
* The browser itself provides its own command-z history, which *nests* in the application's history, in the case that your cursor is in a textarea. Every web application has this limited bit of undo history, in the context of form fields, and the way that it interacts with application-wide undo is kind of undefined and weird.
* By virtue of mutable undo, not only do the meanings of commands change because of other people's work, sometimes they disappear! For example, if you create an object and someone else deletes it, when you hit command-z, nothing should happen, and maybe you shouldn't even see 'delete' in your undo history. Or you should see it, but grayed out. Marking which actions are now redundant is an important bit of polish.
