---
Name: Good magic with TypeScript
Collection ID: 616750c12c0aece979319ccd
Item ID: 617c0c32f14562a4f6c51634
Created On: Fri Oct 29 2021 14:58:58 GMT+0000 (Coordinated Universal Time)
Updated On: Sat May 14 2022 19:26:24 GMT+0000 (Coordinated Universal Time)
Published On: Sat May 14 2022 19:28:43 GMT+0000 (Coordinated Universal Time)
Post Summary: Some of our favorite open source modules that perfectly work with
  TypeScript and make our lives happier.
Main Image: ""
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61bb57ff8bd2704c6628adcb_Good%20magic%20with%20TypeScript.png
Featured?: "true"
Date: Fri Oct 29 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

Placemark uses [TypeScript](https://www.typescriptlang.org/), the typed layer on top of JavaScript. It doesn't catch all the bugs, but it helps. And certain modules written with TypeScript have really brought some joy into my heart. Here are some of them.

#### Zod: parse data into typed structures

Whenever I wrote Elm or Rust code, I'd be jealous of modules like [serde](https://serde.rs/#data-structures) or [elm/json](https://package.elm-lang.org/packages/elm/json/latest/), because they'd let you define the data structure you want first, and then parse JSON or some external source into that structure. If the source didn't fit the data structure, it would be rejected. But if the data has the right fields and types, you get typed data in your application.

[Zod](https://github.com/colinhacks/zod) brings the same magic to TypeScript. It lets you validate data in runtime, and then gives that data strict types in the static type system. I've found Zod to be enormously helpful across the board - from parsing query strings to enforcing API endpoint rules, to validating any JSON data that will enter the database.

Zod is fast enough that I can use it in most cases without worry, but unlike Serde in Rust, it's an additional step rather than part of serialization & deserialization, and it has a little performance overhead. So in exceptionally hot loops it'll sometimes appear in Chrome's flamegraph. But most of the time, it's plenty fast and very worthwhile for the peace of mind and the low-effort type safety.

#### envsafe: require environment variables at startup

Environment variables have always been an annoyance of mine. There'd be some large system with lots of files, and inside of lib/service/extra/util.ts, a line like this:

And inevitably, the system would successfully launch and it would run happily for a few minutes or hours until finally someone triggered that code, process.env.FANCY\_API\_ORIGIN would be undefined, and the system would go down.

Crashing after a successful launch is much worse than crashing at startup. Preventing bugs at the test or lint level is best, preventing bugs by crashing at startup is second best, having a bug occur after startup is worst.

[envsafe](https://github.com/KATT/envsafe) is a module that validates the existence of those environment variables right when the server is starting, and then produces an object with *only* those exact variables.

So if you mistype and reference env.STRIPE\_API\_KEY instead of env.STRIPE\_SECRET\_KEY, TypeScript will fail your tests. If you deploy without STRIPE\_SECRET\_KEY, the server will crash and – assuming that you're using a deployment strategy that notices when a server crashes on startup – you'll get notified and the failing server will be removed.

#### ts-pattern

[ts-pattern](https://github.com/gvergnaud/ts-pattern) is a module that resolves three of my main issues with TypeScript: patterns, exhaustiveness, type narrowing. Exhaustiveness could be something like this:

Now, you could force TypeScript to check the exhaustiveness of this method by adding : string as a return type. But what if the switch statement is part of a larger method? It's easy for this kind of bug to sneak into your code.

Then there are patterns. These are so darn lovely in other languages. Here's an [example from Elm](https://guide.elm-lang.org/types/pattern_matching.html):

I really enjoy this syntax. Syntaxes and language features are often just valuable because they fit with the way your mind already works, and this one fits really nicely - I don't want to use a switch statement or if/else, I want to handle the kind of object that matches a certain pattern. There's a [proposal to add pattern matching](https://kyleshevlin.com/pattern-matching/) to JavaScript, but it's pretty stalled.

The other thing is [type narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html). I'd sometimes find myself in situations where I'd be enforce that, say, a feature had a Point geometry, but the language wouldn't refine the types involved. *Usually* type narrowing works great, but sometime it's a real pain.

ts-pattern deals with all of these problems at the same time, and deals with them really nicely. Using it, you can almost believe that you're using a language with pattern matching. From an example in their documentation:

#### type-fest

[type-fest](https://github.com/sindresorhus/type-fest) is probably really well known, but it was new to me.

The Opaque type has been nifty because it lets you wrap a 'primitive value' in a type that can't be assigned to that value. For example, Placemark relies heavily on different systems of identifiers, some of which are strings, and others are numbers. The raw number identifiers I have defined as this:

So this creates a kind of number that isn't assignable to a number. This basically makes working with RawIds a little more annoying for me, but on the other hand ensures that I never accidentally turn a RawId into a string or treat it as a generic number, and wherever they go the type signature of methods that deal with ids specify that they want RawIds, not just numbers. And this is purely a matter of the type system - at runtime, they're just numbers.

Using type-fest's PromiseValue helper also lets me do this:

So instead of explicitly having to create a type for a function's return value, I can just get the inferred return value. Nifty.
