---
Name: Escaping engineering FOMO
Collection ID: 616750c12c0aece979319ccd
Item ID: 617daffa61b42bc9dd88f145
Created On: Sat Oct 30 2021 20:50:02 GMT+0000 (Coordinated Universal Time)
Updated On: Wed Dec 22 2021 19:34:07 GMT+0000 (Coordinated Universal Time)
Published On: Wed Dec 22 2021 19:36:46 GMT+0000 (Coordinated Universal Time)
Post Summary: How to stop worrying about using the fastest web framework and
  just ship the thing.
Main Image: ""
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61bb61c5fbcc74d1506e3c66_Escaping%20engineering%20fomo.png
Featured?: "true"
Date: Mon Nov 01 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

Sometimes I feel a little odd that I'm building another React-based website, despite writing about how [React isn't always the best option for websites](https://macwright.com/2020/05/10/spa-fatigue.html). Or I look at [Svelte](https://svelte.dev/)'s claims to being faster than React and think to myself: they're right. Or look at the projects that are building on WebAssembly, like Figma, and think, yes, that's faster than JavaScript. What about using Web Components - using the platform?

Some of Placemark's component technologies are suboptimal, from a performance standpoint. A desktop application would have more direct access to computing power. Maybe something written in Rust, with zero-copy formats. Or if it has to be a web application, all of the computation should be in a WebWorker running Rust compiled to WebAssembly, with a UI layer composed by Svelte or something like it.

But when I feel this energy, I remember a few things.

1. Trust the profiler.
2. I'm building in the present.
3. I'm part of the program.
4. Finished is better than perfect.

Let me explain.

### Trust the profiler

Here's [a benchmark that React fails](https://krausest.github.io/js-framework-benchmark/2021/table_chrome_95.0.4638.54.html#772). It's for manipulating the DOM - creating and updating rows in a table. React is solidly behind the leader (vanilla JavaScript) by a factor of 70-100 in some cases. And have you seen React's bundle size - well over 100kb. You could slim that down dramatically with Preact or Svelte or Solid or Vue.

But when I run the profiler in Chrome to figure out where *my* application is spending time, where those CPU cycles are going when people are editing GeoJSON or modifying geometries, is that time spent in React's DOM reconciliation? When I use the webpack [bundle analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer), is React the biggest thing there, or even one of the top dependencies?

There are applications in which React really might be the performance bottleneck - maybe a game with a 60fps run loop in which most elements change, and there isn't much else happening. And situations where React might dominate the bundle, too - if you're loading all of React just to do a drop-down or some interactive element on a page.

But in Placemark's case, well - time is spent elsewhere. Bytes are spent elsewhere. I could swap the web framework - at relatively high cost - to save 5 or 10%, because it's only taking up 10 or 15% in the first place. You might read that and say but Tom, *that means your application is too large*. It's medium, maybe large. But it *does stuff*. It's not a shopping cart or a blog. The code that's there - that code is there to do stuff.

Where *does* it spend time? Right now, doing things like syncing state in realtime, processing data to power the map, running validation and conversion algorithms, managing complex UI state. The optimizations I prioritize are the ones that show up in the profiler - things like balancing unnecessary data copies with the value of immutability. Or trying to reduce memory thrashing creating derived data. Fun stuff.

### I'm building in the present

One of the things I realized, struggling to make [Rust](https://www.rust-lang.org/) work at a startup last year, was that everything will be good in the future. In a few years, new technologies will be old, their libraries and web frameworks will be mature. But that doesn't change the fact that bleeding-edge technology will cut you.

At the same company, after transitioning to [Ruby on Rails](https://rubyonrails.org/), we were building some more complex frontend logic and tried out [Svelte](https://svelte.dev/). We had institutional knowledge with TypeScript, and were already using TypeScript for the rest of the frontend, so we needed Svelte to work in that ecosystem. It didn't. Sure, there was a nod to TypeScript support, but the ecosystem that supported Svelte's syntax - like eslint - didn't support *both* Svelte syntax and TypeScript syntax at the same time.

This year, late 2021, I think that's solved! The Svelte team moves fast. But last year, it wasn't. And there wasn't any sense in using tools that didn't fit our needs because they would be *eventually* viable. This was a dramatically early-stage startup. A year in the future we could have a viable product, or be hiring rapidly with another round of funding, or be defunct.

Another example: debugging WebAssembly in Chrome reached some state of maturity in [December 2020](https://developer.chrome.com/blog/wasm-debugging-2020/). Hooray! This also means that, from 2017, when WebAssembly gained support in modern browsers, to the end of 2020, debugging WebAssembly was relatively torturous. Of course you could make it work, and people did, by investing enormous amounts of energy into understanding a bleeding-edge piece of technology and building their own tooling around it. But if you were in 2018 trying to just pick up the technology and make things work, you were in for some surprises.

### I'm part of the program

Things reflect the people who make them. Not just our abilities, but our tendencies, our limitations. They're all in there. You can't look at [Throne of the Third Heaven of the Nations' Millennium General Assembly](https://en.wikipedia.org/wiki/James_Hampton_\(artist\)) and see influences of James Hampton's life, the materials he had access to, and his mind.

Whether I like it or not, there are tools that I have experience with, and restrictions on my time and energy. Placemark isn't a death march of 20-hour work days. I'm trying to work reasonable hours, to make a reasonable, profitable company with a product that people pay for, and that I can maintain.

I've seen a process repeat several times in which an organization wants to use something fancy, like Kubernetes or some big data tool, and so they try it themselves, fail for a while, then hire a contractor or a siloed employee who implements the thing. Predictably, at the end of the process everyone is left with a big, scary, unknown piece of their company. They didn't have the capacity or interest to actually employ it before, and they still don't.

#### Finished is better than perfect

Do I need to explain this one? Sure, well - if you're building a product with novel functionality, then whatever your simple MVP is, it's going to be hard. The version with a few more features, that's really complicated. The actual full product? Super difficult. Nothing *just works*. Once you add more than one thing, the two things need to work together. Oh no - three things? Just knowing the term [cross-cutting concerns](https://en.wikipedia.org/wiki/Cross-cutting_concern) is enough to justify pushing that next milestone by a few weeks.

Anyway - actually finishing anything is hard. Don't make it harder. Finish the thing.

‍
