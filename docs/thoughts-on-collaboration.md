---
Name: Thoughts on Collaboration
Collection ID: 616750c12c0aece979319ccd
Item ID: 6168055ad66552ca2c91c983
Created On: Thu Oct 14 2021 10:24:26 GMT+0000 (Coordinated Universal Time)
Updated On: Sat May 14 2022 19:24:34 GMT+0000 (Coordinated Universal Time)
Published On: Sat May 14 2022 19:28:43 GMT+0000 (Coordinated Universal Time)
Post Summary: How we use Replicache to power real-time, multiplayer,
  collaborative map editing.
Main Image: ""
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61bb60a7c2e0bb1928b1c33c_Thoughts%20on%20collaboration.png
Featured?: "true"
Date: Mon Sep 20 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

The first goal of Placemark was to reach reasonable parity with geojson.io. For some value of *reasonable*, the current beta achieves this. It even improves on some parts of geojson.io that I always felt were lacking, like the ability to manage typed values and complex values in properties, a performant way to edit properties in table form, and persistent background layers.

This goal completely excluded persistence: no way to save, load, or version data. In large part, this is because persistence, I believe, is deep, easy to get wrong, and has many solutions. Persistence, collaboration, and versioning are intertwined systems. If you have a collaboration model, that is how changes are persisted. Edits in the collaboration model are likely your idea of versions. These are all [cross-cutting concerns](https://en.wikipedia.org/wiki/Cross-cutting_concern).

### Collaboration technology

The first post I wrote here was about [Stack thinking](/post/stack-thinking) and then I covered some of the parts I chose - [Blitz](/post/the-application-stack-blitz), [Render](/post/hosting-render), [react-aria](/post/components-react-aria). A snippet from the initial post follows:

> *Next, it’s really important to find the right kind of thing, more important than it is to find the truly-best option. You probably won’t fail because you used Django instead of Rails, or Vue instead of React. Within each family of solutions things are pretty darn similar.*

When I think about this principle in the realm of collaboration, it shows why this choice of collaboration was, and is, so painfully difficult. When I reviewed collaboration technology - libraries and frameworks that let multiple users edit the same document at roughly the same time, and see edits in near-real-time, when I created [are.na](https://www.are.na/tom-macwright/crdt-vs-ot) boards and collected ideas on Twitter, it appeared that every collaboration platform is its own species.

I tried to create a [typology of how some of these systems work](https://www.are.na/block/13033040), but even that wasn’t complete. There are new technologies like [Croquet](https://croquet.io/) taking a totally new and unusual approach to the field. I would read incredibly smart people like [Joseph G talking about how CRDTs are the future](https://josephg.com/blog/crdts-are-the-future/) and other brilliant people like [Raph Levien writing about how they aren’t ready for their projects yet](https://github.com/xi-editor/xi-editor/issues/1187#issuecomment-491473599).

There are technologies like [ShareDB](https://github.com/share/sharedb) which have been around for years and seem to be winding down, but appear to work. And there are projects that work in theory, but not in practice, that have impressive small-scale demos but few actual users. There’s a frustrating tendency in the field to confuse an ‘active area of research’ with ‘a usable solution’, when there’s often years of development, testing, trial, and error between the two.

### A collaboration product

One of these technologies, CRDT, points to a particular platonic ideal of collaboration: the serverless distributed peer-to-peer system. It’s hard to get over the allure of this possibility. [Data is a toxic asset](https://www.schneier.com/blog/archives/2016/03/data_is_a_toxic.html). A world of browsers speaking to each other and data staying far away from Google or Facebook’s clutches seems like a better world.

I want this world, but I’m not sure it’s here yet. The fully-distributed CRDT systems like [automerge](https://github.com/automerge/automerge) and [yjs](https://github.com/yjs/yjs) still have tough APIs and performance pitfalls, though their brilliant developers are moving quickly. The nuts and bolts of browser to browser connections are still tricky to set up properly. [Hypercore](https://hypercore-protocol.org/) is awesome and capable but needs more than a browser to set up. While I’d love for Placemark to be an installable application, making that a *requirement* would be a big hurdle to adoption.

In practice, the most prominent and successful collaboration products are centralized: the Google Docs suite, which is based on Operational Transforms, and [Figma](https://www.figma.com/blog/how-figmas-multiplayer-technology-works/), which uses a variation on CRDT. Though there are plenty of decentralized technologies in the finance field - the currency that shall not be named - none of that tech is “performant” or “scalable” by any definition of the word. Placemark sits in the ‘very difficult’ quadrant of this problem, with a relatively complex data model, potentially large datasets, and little opportunity to winnow or create ‘views’ on data.

### Risks & strategy

I’ve been starting with [Replicache](https://replicache.dev/). It’s the closest independent project aiming for something like Figma’s technology, and it’s a small business led by brilliant, fast-moving engineers.

The process thus far (my first commit to the feature branch was Sept 2) has been tough but rewarding. There are still lots of unknowns, and lots of assumptions that I was making when the application was purely local state managed with [Recoil](https://recoiljs.org/). For example, I previously relied on the principle that only one geometry would change at a time, so that I could pull it out into a faster-updating data model. With the prospect of changes coming from anywhere, that’s no longer an option. Similarly with all of the concerns around versioning and fast updates - I now have to explicitly think about the data model more.

This is a big scary project. Try as I might, I couldn’t find any MVP, or cheap fast experiment to test the viability of this approach. The tech options are so different than beyond a two-day prototype I couldn’t thoroughly evaluate their potentials. It’s easy to second-guess with so many other options in the mix: should I be more conservative and just sync to GitHub or a third-party service? Or more utopian and aim for P2P and build on [tauri](https://github.com/tauri-apps/tauri) or Electron?

It’s not just about getting a product out the door and making money. I’m learning a tremendous amount in the process about data modeling, consistency, databases, network, and more. And the solution will likely be a combination of approaches - I’d like the ability to load a file from Dropbox, for example, but also edit a file locally without ever uploading the contents, and also the ability to collaborate with a team.

As you can tell, these ideas are bouncing around my head constantly right now. The challenge is deep, nonlinear, and really interesting. I’d love to know what you think, and what properties of a product are most important to you - P2P, offline, collaborative, etc! You can let me know at tom@placemark.io or [tmcw](https://twitter.com/tmcw) on Twitter.

‍
