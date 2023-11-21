---
Name: Values
Collection ID: 616750c12c0aece979319ccd
Item ID: 6168052cc50ec73e73cd99fc
Created On: Thu Oct 14 2021 10:23:40 GMT+0000 (Coordinated Universal Time)
Updated On: Sat May 14 2022 19:26:05 GMT+0000 (Coordinated Universal Time)
Published On: Sat May 14 2022 19:28:43 GMT+0000 (Coordinated Universal Time)
Post Summary: Here are the goals and principles we're keeping in mind, building
  this geospatial application.
Main Image: ""
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61bb57e248e9d4889b701789_Values.png
Featured?: "true"
Date: Wed Sep 29 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

I dislike company values. The vast majority are platitudes meant for marketing and applied selectively if at all. *Fun* is a popular company value, until someone has too much fun.

![Tree](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/6168051766af3c6214fef100_tree.jpeg)

Placemark does, though, have a few intentions, and I figure it’s worth writing them down, because they’re the kinds of things that you can point to and ask “are we doing that?”

### Be an anti-silo

Centralization has a strong technical and economic pull. Despite what some decentralization zealots claim, it’s far easier to build a contained system with one source of truth than to deal with the compatibility and consensus requirements of an open system.

There are cross-currents. Cloud storage is so common that [students today are unfamiliar with files and folders on their computers](https://www.theverge.com/22684730/students-file-folder-directory-structure-education-gen-z). Mobile support necessitates cross-device storage. Collaboration doesn’t work well with files on disk.

Placemark’s [collaboration system](/post/thoughts-on-collaboration) is centralized: it uses a single source of truth. This is because I’m not confident in the practicality of fully-decentralized systems.

So what is Placemark doing? It’s building on existing open source file formats, with strong support for local files. I’m investigating ways to integrate with independent cloud storage providers so that you can use load & save files elsewhere. Export & Import are first-class features.

### Be a one-sided business

It’s an unfortunate reality that the ‘backend’ business is the one that makes the money for a lot of companies. The other side of a [two-sided market](https://en.wikipedia.org/wiki/Two-sided_market). Remember [App Annie](https://www.appannie.com/en/), that company that does analytics for mobile apps? Their [SEC lawsuit](https://www.sec.gov/news/press-release/2021-176) is an interesting one: their actual business was selling app data to hedge funds and they maximized that business so much that they disaggregated the data and just gave the hedge funds the exact numbers. Repeat for everything. Foursquare’s backend business became the frontend - [their homepage is now just about the data they extracted from users](https://foursquare.com/), not [the app they once developed](https://foursquare.com/city-guide) and has been frozen in place for years.

There’s a strong argument that you can make that, well, people don’t pay for apps and businesses do, so why not have the people pay with data that they don’t value, and the businesses pay with money that they have a lot of. Arguable but unsatisfying.

Placemark has a business plan: sell the product for money. Placemark is an application you pay for, not a data-collection scheme or a way to promote some other product.

### Do good by open source

Placemark isn’t open source, and won’t be. There, I said it. I long ago came to the conclusion that open source is incredible for modules and libraries and an absolute disaster for applications built by companies. I’ve done this - developed [TileMill](https://tilemill-project.github.io/tilemill/), [iD](https://en.wikipedia.org/wiki/ID_\(software\)), and lots and lots of libraries in the open. I rallied hard for [Mapbox Studio](https://www.mapbox.com/mapbox-studio) *not* to be open source. It was the right decision. I’ve written [a lot](https://macwright.com/2017/02/05/the-case-against-open-source-by-default.html) about [this](https://web.archive.org/web/20180129064131/https://www.mapbox.com/about/open/).

On the other hand, though, I still care a lot about the OSS community - still have, ahem, passion. So with Placemark I’m trying to do right by it.

First, contributing to projects. I’m contributing financially to the [Blitz](https://blitzjs.com/) and [typicode](https://github.com/typicode), two projects that Placemark relies on, but at a very low level. That’ll increase according to revenue. The same goes for CodeMirror and other important dependencies.

Second, maintaining projects. Some of the best OSS projects are those that are heavily used by their creators as part of an application. I aim to create a few of those. I’m already maintaining [check-geojson](https://github.com/placemark/check-geojson), a successor to the now-abandoned geojsonhint project. The same goes for [togeojson](https://github.com/placemark/togeojson) and [tokml](https://github.com/placemark/tokml) - by virtue of being used in Placemark, these projects will be continually and professionally maintained.

Third, investing in compatibility. Open source is built on open standards and I aim to support as many formats, at high fidelity, as possible.

### Don’t bullshit

The gravitational pull of bullshit on corporate communications is incredible. Few companies are able to avoid it. So much anodyne marketing tries so hard not to describe *what it is* and *what’s going on*: there’s always an experience and a partnership and a vague product and solution and a bright tomorrow.

I don’t get why people do this. I’ve never met anyone who expects or enjoys that kind of content. And on the other hand, I don’t see a risk in being honest, so I’ll continue to be.

### Design to the edges

> *Design to the edges is a design approach that optimizes things for as many people as possible. It is a rejection of the idea that things be designed for the average person. Instead, design to the edges optimizes for the full range of human characteristics, traits, abilities and interests. - *[*John Spacey*](https://simplicable.com/new/design-to-the-edges)

I will never stop caring about ARIA accessibility or color contrast no matter how complex a user interface is. Placemark has an uphill battle in many regards, because it’s very difficult to make maps accessible. And it’s very difficult to make editing accessible too. Just think of what code editors do when you press Tab - they insert a tab character, instead of moving to the next item on the webpage. Which is the right behavior?

This applies to other elements. Collaboration is importantly offline-first, so that unsteady internet connections don’t disadvantage people. Mobile support is a challenge I dread but am also ready to face.

So that’s the plan. It’s early, and I’m going one step at a time. Placemark isn’t magical or refined yet, it’s buggy and unrefined. Every day it changes and I learn as I go. As E.L. Doctorow said,

> *Writing a novel is like driving a car at night. You can only see as far as your headlights, but you can make the whole trip that way.*

‍
