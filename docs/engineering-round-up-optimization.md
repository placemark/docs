---
Name: "Engineering round up: Optimization"
Collection ID: 616750c12c0aece979319ccd
Item ID: 6247032cd5d947a3a887e07c
Created On: Fri Apr 01 2022 13:50:36 GMT+0000 (Coordinated Universal Time)
Updated On: Fri Apr 01 2022 13:50:36 GMT+0000 (Coordinated Universal Time)
Published On: Fri Apr 01 2022 13:50:45 GMT+0000 (Coordinated Universal Time)
Post Summary: How we make Placemark faster, so you can make maps faster.
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/624703090399aa077812ee7e_Engineering%20round%20up_%20Optimization.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/624703090399aa077812ee7e_Engineering%20round%20up_%20Optimization.png
Featured?: "true"
Date: Fri Apr 01 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

Placemark should be fast. It's not easy making a complex application like Placemark fast. For one thing, as a tool for maps, Placemark gives you access to all the data, so we can't simply show a subset. As an editor, the application supports quickly-changing data, so we can't just add layers of caching. And as a web application, we have to balance accessibility, local performance, load performance, and many other factors. Performance is a very complex topic.

The principles of performance work are so well described by the [Mature Optimization Handbook](https://carlos.bueno.org/optimization/) that there's no sense in restating them here. Instead, I think it might be fun to just review what sort of performance work has been happening at Placemark.

### React

This is a good place to start because I think a lot of people will expect this post to be about React. For benchmarks like rendering a million rows in an HTML table, React is slower than next-generation tools like Svelte. Its virtual DOM has higher overhead than some of the alternatives. The React bundle is larger than the alternatives.

React hasn't been a major focus of any of my performance work. One of my principles is that I follow the metrics. I switch on the Chrome performance profiling tools and use the site and see what I can learn. React certainly shows up, but rarely has it been the thing causing me to drop frames when I'm dragging a point geometry across the map.

This is partly because of the choices I've made. Wherever any user-provided data is shown in the user interface, I'm using virtualization - [react-virtual](https://react-virtual.tanstack.com/), in particular, right now. So when Placemark shows a list of features and folders, I use react-virtual to only render the items that are currently visible. For very small datasets, this adds a little overhead: there's no problem rendering 10 items in a list. But for 20,000 items in a list, virtualization makes a difference. Not only is the generated DOM smaller with fewer elements, React has less to do: it isn't rendering all of those items and supporting whatever interactivity the offscreen items might have.

Where do performance hotspots show up? I let the Chrome profiler lead me.

### Communication

One trend is *communication*. Placemark communicates with a server through RPC and REST APIs. Transmitting and receiving too much is a common problem. A habit that I've stuck to with Placemark is that most calls, by default, should be batches. Implementing a putFeature endpoint? Instead, implement putFeatures. The same for delete, update, and everything else. The semantics of batch calls are trickier, but on the other hand, you can take advantage of batching across the stack: send fewer requests, do fewer database queries, receive fewer updates.

Communication applies to other boundaries, too. The collaboration piece of Placemark relies on IndexedDB. Reading from IndexedDB is pretty fast, but not nearly as fast as accessing a value already available in JavaScript. So I spend some time making sure that queries to the *local* database are frugal. The map interface uses Mapbox GL, which processes data in a WebWorker. So a major aim is to send as little data to the WebWorker as possible, because while [postMessage performance depends](https://surma.dev/things/is-postmessage-slow/), in this case it is an issue.

### The database

Optimizing at the database level is extremely worth it. The difference between good schema design and bad can be enormous. Between a well-tuned SQL query and a bunch of poorly-implemented ones - easily magnitudes.

Sure, it's nice that there are frameworks like [fastify](https://github.com/fastify/fastify) and you can build backends in Rust or Go or some fast new language. But in a lot of applications, the server framework overhead pales in comparison to time spent in the database. Who really cares if a server framework can deliver 10,000 "Hello world" responses per second if your real-world application relies on queries that take 500ms each, plus latency?

Placemark has two database strategies. The basic interface uses the ergonomic & safe [Prisma](https://www.prisma.io/) toolkit. The performance-critical, map-collaboration-related functions drop down to hand-rolled SQL queries. Someday I hope that Prisma or something similar can generate efficient queries, so the whole system can use the same thing.

### Dependencies

Quite a few bottlenecks in Placemark are bottlenecks in its dependencies. When this happens, I tend to ignore that these things are "third-party dependencies" and just follow them to the source. So when my favorite data-validation module, [Zod](https://github.com/colinhacks/zod), was showing up in profiles, I decided to optimize it and ended up with a respectable [3-4x speedup](https://observablehq.com/@tmcw/zod-perf-by-versions). The same goes for other modules – a seemingly inconsequential method in [dnd-kit](https://github.com/clauderic/dnd-kit/pull/685), the module I use for sortable views, was showing up in profiles. I submitted a simple PR that'll speed it up by about 15x.

Some modules get swapped for more performant alternatives. But in many cases, optimizations in modules are the same as optimizations in my application: there's some 20-30 line change that removes a bottleneck and makes them at lot faster. It's worthwhile to try and that.

### Principles

I swear by the principles of the [Mature Optimization Handbook](https://carlos.bueno.org/optimization/) - the performance work I do is guided by metrics, not intuition. I try to focus on only true bottlenecks. The best optimizations are the ones that yield a lot of improvement for a little code change.

Performance work will just keep going. Maps involve a lot of data, and it's hard to make that fast. There are a few hard-hitting optimizations that I'm excited for, that'll require a lot of time, tears, and coffee. The other goal for the near future is to have more visibility into layers of the stack - going deeper into React's [devtools](https://reactjs.org/blog/2019/08/15/new-react-devtools.html), pulling more information from the database layer, analyzing performance at the CSS & HTML compositing layer. A better understanding always yields better results.
