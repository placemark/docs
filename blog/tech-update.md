---
Name: Tech update
Collection ID: 616750c12c0aece979319ccd
Item ID: 62bf4f5ab395c83a972bcda4
Created On: Fri Jul 01 2022 19:47:38 GMT+0000 (Coordinated Universal Time)
Updated On: Sat Oct 08 2022 19:40:33 GMT+0000 (Coordinated Universal Time)
Published On: Sat Oct 08 2022 19:40:40 GMT+0000 (Coordinated Universal Time)
Post Summary: Which of the parts that make up Placemark have changed, what's
  new, and some ideas about what's next.
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62bf4ef250406e041d516008_Tech%20Update%20July%201.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62bf4ef250406e041d516008_Tech%20Update%20July%201.png
Featured?: "true"
Date: Fri Jul 01 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

Before I launched Placemark, I wrote a lot about the technology and the journey to getting to that launch. There are posts about [optimization](/post/engineering-round-up-optimization), [components](/post/components-react-aria), and the [application framework](/post/the-application-stack-blitz).

Since [Placemark's launch](/post/announcing-placemark), this blog has been all about the product. Lots of improvements, and lots more to come!

This blog will probably continue to focus on the product. Placemark is a tool for making maps, and there's so much to say about how that. New features, soon. But today, let's catch up on technology!

### Most of the choices are working out

Placemark is still a Blitz application, still using Postgres and Replicache. I haven't done any gigantic refactors and don't feel the need to.

There are two things I keep in mind with tech choices.

The first is keeping a bit of hindsight. Like, say you're considering switching to a typed language or adding types to your project - something like TypeScript for JavaScript or Sorbet for Ruby. It's useful to reflect on the last few months of development and think about how much that type checker would have caught. Did you see a lot of type errors in production? Maybe the lack of a type system made debugging slower? Basically, if you had made the change in the past, how much time would you have saved?

The other thing to think about is what ratio of time are you spending on work of substance versus work-about-work. Refactoring is the purest, most obvious sort of work-about-work. A refactor might take months and on the other side all you get is the same product, no new features, maybe the same number of bugs, in a different language, framework, or style. Often refactors are worth it! But a company that spends half its time refactoring is probably doing something wrong.

Anyway, it's good to keep tabs on this. Did you spend all day futzing with dependencies? Fixing type-checker errors? Maybe that's useful work in the long term, and maybe it's necessary, but it doesn't move the product forward.

So, tech changes with Placemark happen when the need arises, or when I notice myself futzing too much with something. There haven't been many of those instances recently, which is great! The lifespan of technology choices is a positive indicator - if you can build something for a few years, maybe 5-10 years, and the underpinnings still seem rational and tolerable, that's a win.

That said, there certainly have been some changes!

### From Recoil to Jotai

![Jotai screenshot](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62bf4e4dbb60e49d977968d7_CleanShot%202022-07-01%20at%2015.42.57%402x.png)

Placemark started with [Recoil](https://recoiljs.org/), a state management library under the Facebook umbrella of open source projects. Recoil was the right kind of tool for Placemark. State management that works like React's default setStatemethod is what I like to use. But I encountered some issues around it flickering between different states in the application, and when I went to dig into the Recoil source code, I found it very difficult to understand and contribute to. I'm certain that there are reasons why it's designed the way it is, but the complexity and style of the module didn't feel right.

So, Placemark switched from Recoil to [Jotai](https://jotai.org/), a smaller, simpler, and easier to understand module. The switch was relatively seamless and I haven't run into any disadvantages of Jotai versus Recoil. Overall, it was painless because Jotai and Recoil are similar libraries and I wanted the same sort of API for state management. Switching to something in a different "family" of solutions, like zustand or MobX, would have been a much bigger leap.

### react-aria to (mostly) Radix

react-aria is a *damn good project*. I think that team is making the best implementations of a lot of different algorithms and utilities.

That said, I've switched a lot of UI in Placemark from using react-aria to [Radix UI](https://www.radix-ui.com/).

Why? **react-aria** is a very low-level module. The idea is that you use its collection of hooks to build your own component library. And I was doing that, and it was working okay. But I was spending a lot of time making this all work with TypeScript. React-aria's examples are in vanilla JavaScript, and its modules don't export all the types needed to work with their hooks. So you'll import @react-aria/listbox but need types from @react-types/shared, or sometimes from some other module. The module from which you get the types, and the types that your component library should work with in the first place, is often a mystery - something you need to figure out by hoping that an auto-import is found.

So, my component library ended up being pretty verbose and often the types would cause problems when I tried to combine behaviors, like both positioning something and mounting it in a portal. I was just spending a lot of time building a component library that, to a user, looked basic.

![Radix screenshot](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62bf4e797527403095e5e1dc_CleanShot%202022-07-01%20at%2015.43.42%402x.png)

Hence, [Radix](https://www.radix-ui.com/). Radix is a level higher than react-aria - components, not hooks - but still lets me define styles from the ground up. It has a really solid set of components covering almost every need. I use a [Headless UI](https://headlessui.com/) component in one place and a specialized component [for a color picker](https://github.com/omgovich/react-colorful). But everything else - dialogs, popovers, tooltips, collapsible UIs - is all Radix. And it works well!

Radix has a few downsides. The team that builds Radix just got acquired to work at [WorkOS](https://workos.com/), so the long-term future of the project could go a few different ways. Compared to react-aria, which is under the Adobe organization, one of the oldest and most established tech companies there is. Using Radix also increases the size of my component tree, though not the rendered DOM tree, so that's probably not a big contributor to performance. And the range of things supported by react-aria is a bit more comprehensive than Radix.

### From Pusher to Soketi

Placemark relies on WebSockets in a peculiar way. This is a design decision in Replicache: we use WebSockets to prompt people to request a new copy of the data, but the data isn't sent in the WebSocket message. The loop of doing this is a critical part of the application, where an extra 100ms matters.

Initially, Placemark used Pusher to handle WebSockets. This is the one exception to the monolith: the task of doing WebSockets quickly is so different from the rest of the application that I think it should be a separate piece. Before launch, I switched to [Soketi](https://github.com/soketi/soketi), a self-hosted WebSocket server, because Pusher's limits seemed low and I suspected that I could reduce latency by hosting the WebSocket server on the same internal network. Thanks to [Render](https://render.com/), I was able to do this pretty easily.

So far Soketi seems great, and I hope it continues to. Hopefully the Pusher protocol will make it possible to switch again in the future, if necessary.

### New: Comlink

I've been using [Comlink](https://github.com/googlechromelabs/comlink), an abstraction layer for Web Workers. It's pretty great! There are lots and lots of gotchas with Web Workers and most bleeding-edge technology, and I've been working through them. For example, Comlink makes it easy to use a Web Worker like you're just calling a function - but in practice the only arguments you can give to that function are serializable objects. So you have to write a serialization wrapper for those things - a workaround that Comlink makes easy, but it's easy to get it wrong.

### New: purify-ts

![Purify](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/62bf5007b395c834452bd250_CleanShot%202022-07-01%20at%2015.50.03%402x.png)

I added [purify-ts](https://gigobyte.github.io/purify/) to use Either and Maybe types in Placemark. The usefulness of an Either type - a type that contain either a Left (or error, usually) value as well as a Right (success) value, is enormous. There are lots of places where Placemark needs to provide detailed errors when operations fail. You might import a file and we want to show you what went wrong. JavaScript's existing error system is basic and it's easy to forget which functions are the ones that you *expect* to throw an error sometimes and which are the ones that will only throw errors if you've written a bug. TypeScript doesn't make this any better. You can't add a type that defines what sort of error a function might throw.

But in practice, functional types like Either and Maybe come with a lot of function programming dogma. I don't want to "fold" an option, and I would rather the core of the modules I use be efficient, not pure. And I want the documentation to be good. purify-ts is that - it's great. It's practical. I've had a few minor qualms with purify and sometimes I need to meditate on the documentation, but overall it has been the good parts of functional programming without the bad.

### What might be next

Most of what I have planned for Placemark won't require any big changes to these tools. The complexity is in the app, and most of the bugs are mine. There are a few things I'm interested in, though!

The file format converter was the first piece of Placemark that uses XState, a state machine abstraction, directly. I know there are plenty of state machines under the hood, in Radix, and there are some informal state machines, like the drawing system. I want to use XState more, in places where it's appropriate. Refactoring the drawing system to use XState might be a good idea, but would also mean refactoring one of the most complex components of Placemark.

Blitz has been [transitioning from a framework to a library](https://blitzjs.com/docs/blitz-pivot). Once they're done with the refactor, Blitz will be a module that you install and use alongside Next.js. I'm excited for this, in large part because Blitz's fork of Next.js is now quite vintage. The upgrade will mean much faster builds for me, probably an improved experience for users, and all the perks of using a mainstream framework like Next.js.

Who knows what might be next beyond that! In a lot of ways, it's fun to just ride the wave of things like Next.js, Blitz, and so on - it mostly just gets better.
