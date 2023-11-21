---
Name: "Components: react-aria"
Collection ID: 616750c12c0aece979319ccd
Item ID: 616806edf18ae2e66bfef07d
Created On: Thu Oct 14 2021 10:31:09 GMT+0000 (Coordinated Universal Time)
Updated On: Sat May 14 2022 21:09:48 GMT+0000 (Coordinated Universal Time)
Published On: Sat May 14 2022 21:09:58 GMT+0000 (Coordinated Universal Time)
Post Summary: Here's why we use react-aria, a React component library made by
  Adobe and focused on control and accessibility.
Main Image: ""
Thumbnail image: ""
Featured?: "false"
Date: Tue Jun 08 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

Placemark has plenty of moderately complex UI patterns that benefit from React component primitives. We’ve got dialog boxes, tooltips, popup menus, things you can drag, search boxes with autocomplete.

Building these from scratch is usually a bad idea, because you’ll implement the parts you notice, like the visual effects and experience of *clicking* around, but miss all of the things that are important for other modes of usage, like how the components interact with tab focus, keyboard shortcuts, and [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) roles. You’ll have to solve hard problems from scratch, like how to position a popover in a way that works with [z-indexes](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) of other parts of the page.

When I was [working with Rails](https://macwright.com/2021/02/18/a-year-of-rails.html), the default answer was *Web Components*. Web Components are… controversial. Folks like [Rich Harris have described their issues well](https://dev.to/richharris/why-i-don-t-use-web-components-2cia). For that project, they worked great, because we had limited expectations, stuck religiously to [GitHub’s battle-tested components](https://github.com/github/github-elements), and did a lot of server rendering. So the autocomplete results in an autocomplete UI were rendered by the server itself, rather than transferred as JSON.

Placemark is a React app, and does most of its work in the client. Web Components could fit in a few places, but there are many more complex interactive situations you trigger, many more dependencies between parts of the UI. It is, as I’ve roughly [described before](https://blog.placemark.io/2021/05/10/blitz.html), a good fit for React.

So, what do I use to get all of these little fiddly parts going?

The broad categories for React components in my head are something like this:

### One-off A+ components by individuals

For example, [react-autosuggest](https://github.com/moroshko/react-autosuggest) was the best solution for auto-suggesting search in React for years. Unfortunately, a lot of these projects are stagnating because of the well-documented problems with open source being profitable, fun, sustainable, or generally a good idea as a hobby. Also, you have to deal with different approaches for things like TypeScript types, how these components do styling, and different styles of documentation. Generally: it’s extremely impressive what folks are able to build, but it’s a nicer experience and a better long-term bet to use a unified ecosystem of components.

### Style-and-high-level component libraries

Like [Material-UI](https://material-ui.com/), [Ant Design](https://ant.design/docs/react/introduce), and [Chakra UI](https://chakra-ui.com/). These always surprise me: the Material-UI homepage looks like what it looks like, and the library has 68,740 GitHub stars at this writing. Ant design has 72,180 stars, and is… a mixed bag. Chakra is probably the best effort out of these. I heavily suspect that this is a culture gap: Ant is based out of the mega-corp [Ant Group](https://en.wikipedia.org/wiki/Ant_Group) and has lots of Chinese documentation.

Anyway: I don’t want components that are *that* high-level: these components will encapsulate complex DOM structures that you don’t really know about, adding hidden buttons and divs to support this or that design element. I want to use abstractions for efficiency, not ignorance. Also, the default styles of these libraries always diverges from what a complex application needs. Especially Material Design, a design system that thrives in low-information-density webpage displays and struggles in high-information-density applications.

### Low-level accessibility-first libraries

This is where I land, and there are basically three big ones:

1. [Reach UI](https://reach.tech/), run by [the React Training team](https://reacttraining.com/team/), of remix.run and React Router fame
2. [Radix UI](https://radix-ui.com/primitives/docs/overview/introduction), run by [modulz](https://www.modulz.app/), an upcoming design tool for React
3. [react-aria](https://react-spectrum.adobe.com/react-aria/index.html), run by a team at [Adobe](https://www.adobe.com/), including the [author of the Parcel bundler](https://github.com/devongovett)

I’ve used all of these in some portions. Radix & Reach are similar in terms of abstraction: they both give you component hierarchies, polished interactivity and accessibility by default, and the ability to style things in a variety of ways.

react-aria is lower-level: instead of *components*, it gives you *hooks*. So every last element on the page is something that you’re acutely aware of, and you connect the pieces together. You’re building a design system from the ground up. The react-aria examples tend to be longer and a bit more complicated than the examples for Reach or Radix. More decisions are deferred to your application. All of the document structure is yours to decide.

These hooks are very neatly composed: higher-level hooks like [useMenu](https://react-spectrum.adobe.com/react-aria/useMenu.html) are built on low-level hooks like [useFocus](https://react-spectrum.adobe.com/react-aria/useFocus.html). I find myself using a lot of both, and composing new hooks to support new functionality. react-aria’s documentation is unique in explaining not just the obvious features of each hook, but [all of the additional input modes](https://react-spectrum.adobe.com/react-aria/useButton.html#features), and often *why* the hook is useful as an abstraction or replacement for a native HTML element.

Placemark is currently using react-aria for practically everything that requires a component library. It certainly has its drawbacks. I’ve noticed things like:

* react-aria [doesn’t use](https://github.com/adobe/react-spectrum/issues/1890) TypeScript strict mode internally, and its examples are vanilla JavaScript. Translating those examples to TypeScript, and then getting them to work with strict mode, can be a challenge, and I have a few as any type system cop-outs as a result. The library *does* use TypeScript internally, and exposes quality types, it’s just an issue with TypeScript examples, which [might get added](https://github.com/adobe/react-spectrum/issues/865).
* Autocomplete search is hard with any system, and certainly not easy with react-aria. It took a lot of tweaking, and still feels iffy. That said, it’s just as hard with Reach-UI.
* Composing react-aria’s hooks requires deeply understanding them. Which is to be expected: you’re building something complex, so you should tolerate a system with a learning curve. Mainly I’ve been working to compose react-aria’s menu and overlay system to support macOS-like menu bar interactions, and it’s tough. Radix’s [menu primitives](https://twitter.com/jjenzz/status/1400914232481390596) are looking amazing, and might be one place where I make the switch.
* In some cases, I’d like to use [react-spectrum](https://react-spectrum.adobe.com/), the high-level wrapper around react-aria, but it is stuck to Adobe’s design system and [incompatible with Next.js](https://github.com/adobe/react-spectrum/issues/1156). Looking at the React Spectrum examples causes some FOMO - they’re well-designed and have fancy transitions. My DIY components… less so.

But none of these qualms outweigh react-aria’s success. It has a big idea - that with [React hooks](https://reactjs.org/docs/hooks-intro.html), you can make a successful library that adds functionality and accessibility onto any DOM structure that you provide. That idea works really well: it simplifies the virtual DOM, it sidesteps the wild-west chaos of CSS-in-JS libraries. It stems the props bloat that afflicts super-flexible component libraries.

Also, react-aria is very well-documented, and its contributor base is only [mildly top-heavy](https://github.com/adobe/react-spectrum/graphs/contributors): Adobe appears to be devoting several people’s work time to the library, over the course of several years. The future is pretty bright for this library.

I think that complicated UIs are going to be complicated to implement, no matter which tools you use. My choice of react-aria for a lot of these pieces isn’t based on it being the *easiest* option, but the idea that there’s virtually no limit to what you can do with it, and the nonfunctional aspects - its maintenance and documentation - are so strong.

This choice is, then, a result of its inputs, the requirements and future plans of Placemark. If I was building something simpler and on a tight timeline, I’d strongly consider something like Chakra. But so far, for this purpose, this is working well - I’m spending more time on features than on reimplementing a dialog box for the tenth time.
