---
Name: A simpler router progress bar for this Next.js application
Collection ID: 616750c12c0aece979319ccd
Item ID: 634dc13d00ca7c37a4e5e7e8
Created On: Mon Oct 17 2022 20:55:25 GMT+0000 (Coordinated Universal Time)
Updated On: Mon Oct 17 2022 21:27:28 GMT+0000 (Coordinated Universal Time)
Published On: Mon Oct 17 2022 21:27:33 GMT+0000 (Coordinated Universal Time)
Post Summary: How we built a concise implementation of a page loading bar, just
  using the Placemark application's existing ingredients
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/634dc52885d300c8fecc5c7d_Loading%20bar.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/634dc52885d300c8fecc5c7d_Loading%20bar.png
Featured?: "true"
Date: Mon Oct 17 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

Placemark uses client-side routing with [Next.js's router](https://nextjs.org/docs/api-reference/next/router), which means that most of the time, when you click a link, you're not making a full page transition like you would with a traditional multi-page application. This has some benefits, in smoother page transitions and in some cases faster performance, but it has a few drawbacks: particularly, that you might be waiting for a second or two after clicking a link, wondering if the page is loading. So we now do what many other similar applications do. We show a progress bar within the application.

Shopping around for prior art, I found a surprising number of sites using [NProgress](https://github.com/rstacruz/nprogress), a lovely but dated library for progress bars. Its development started to slow down five years ago, and now the library has some idiosyncratic legacy code. It contains code for adding CSS prefixes, constructing classNames, and working with older JavaScript environments. NProgress operates by writing its own HTML to the page, outside of the realm of React or any framework. It's working code, proven by the test of time and used everywhere, but it would be an oddball addition for Placemark, a system that tries to build a system using common parts.

And, thankfully, we've got the parts to build a progress bar in React. Here's how the new progress bar works.

### The state machine

Placemark has started to use state machines in a few key places. The [free file format converter](/post/introducing-our-free-map-file-converter) is based on a state machine. [XState](https://xstate.js.org/docs/) is the library of choice here, and while in some cases it's felt like over-architecting to use a state machine, it's really nice to have a managed system for things that are asynchronous and have many sorts of transitions from one state to another. The progress bar is one of those situations: when a page finishes loading, we want to set the progress to 100% and then hide the bar only after 200 milliseconds, so that people can see the bar advancing to the "finished" state.

We've following the approach of using React's [useEffect](https://reactjs.org/docs/hooks-effect.html) hook as infrequently as possible in Placemark. There are still quite a few uses (including in this component), but they're narrowly focused on connecting components to libraries or managing event handlers. There's a possible version of this component that uses useEffect more and XState less, but it's probably harder to implement correctly.

The key element that's adopted from NProgress here is the "inc" method, which gradually increments the progress bar to show that something's going on. The router doesn't expose any sort of determinate progress, like saying that the page is 25% loaded, so it's the job of the UI to show an arbitrarily increasing progress bar that slows down when it gets near 100% so that it doesn't prematurely show success.

The outline of this component is:

* The progress bar starts in the state **hidden**, in which it's not visible and its parent element has zero opacity.
* When a page transition starts, we send a **start** event to the state machine, which transitions to the **visible** state.
* While in the **visible** state, the state machine sends a **tick** event to itself every 200 milliseconds, which causes it to gradually increment the percentage shown for the progress bar.
* When the page transition finishes or fails, we send a **finish** event to the state machine, which sets its percentage to 100% and enters the **done** state.
* After 200 milliseconds, we automatically transition from the **done** state to the **hidden** state.

### The component

The component connects that state machine to Next.js's router, so that when the router starts a transition, the state machine gets a 'start' event. Then it renders a component based on the state of the state machine. Continuing the theme of using existing parts, this uses Radix's [Portal component](https://www.radix-ui.com/docs/primitives/utilities/portal) to render the progress bar in a div outside of the rest of the page's elements. This is pretty essential: Placemark's layouts are complex, so for anything that's floating or layered, it's best to use a portal and avoid any potential sizing or z-index issues.

From there all that's left to do is import this component from \_app.tsx and add it to every page.

### All together now

Here's the whole progress bar as a [GitHub Gist](https://gist.github.com/tmcw/f35f56ee55d47260d2ace7110bf03e18). It's something that you can start with and customize to use in your application. This gist assumes that you have some of modules we use already installed: [clsx](https://github.com/lukeed/clsx) for managing class names, [lodash](https://lodash.com/) for general utilities, Radix for the [Portal](https://www.radix-ui.com/docs/primitives/utilities/portal) component, [XState](https://xstate.js.org/docs/) for state machines, and [Jotai](https://jotai.org/) for state management. If you don't use those, it should be pretty easy to refactor it - clsx for some string interpolation, lodash for Math.min & Math.max, Jotai for XState's [React integration](https://xstate.js.org/docs/packages/xstate-react/#quick-start).

In large part because we have these nice abstractions to build on, this component is much smaller than NProgress: 143 lines compared to NProgress's 499. NProgress is still an impressive library that's stood the test of time, and it's easy to use with any framework. For Placemark's particular needs and setup, though, it's nice to build as much as possible with the same dependencies and style.

I'm hesitant to package something like this into a module, for precisely that reason - a UI component like this is best written on top of some nice abstractions, and is probably better in the long term as a component within your application rather than a third-party dependency.
