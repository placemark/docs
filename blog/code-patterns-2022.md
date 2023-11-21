---
Name: Code patterns, 2022
Collection ID: 616750c12c0aece979319ccd
Item ID: 635060ad6ae73156a55b9b1b
Created On: Wed Oct 19 2022 20:40:13 GMT+0000 (Coordinated Universal Time)
Updated On: Sat Oct 22 2022 15:24:10 GMT+0000 (Coordinated Universal Time)
Published On: Sat Oct 22 2022 15:24:14 GMT+0000 (Coordinated Universal Time)
Post Summary: My current habits for writing the TypeScript code that makes Placemark tick
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/6352e3a363bfed801c33fe67_Loading%20bar%20(1).png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/6352e3a363bfed801c33fe67_Loading%20bar%20(1).png
Featured?: "false"
Date: Fri Oct 21 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

I'd like to think that my coding style has evolved over the years. I've had my era of functional programming worship, and of promoting small modules. Trying to use the [module pattern](https://macwright.com/2012/06/04/the-module-pattern.html), before new ES6 syntax made it unnecessary, or [Flow](https://macwright.com/2016/01/05/flow-in-mapbox-studio.html), before [TypeScript](https://www.typescriptlang.org/) made it irrelevant. Software engineering on the web moves fast: you can either be grumpy about it, leave it for a slower-moving field, or roll with the punches.

It's nothing groundbreaking, but here's where I land on some programming patterns now:

### Using bigger files

Placemark's design system is just one file - **components/elements.tsx**. It's 902 lines and has 77 exports. Once a given file in this project gets over 1,000 lines, I consider splitting it into small pieces, but almost never is the length of a file, by itself, a factor in how things are distributed in the application.

Big files have a bunch of benefits:

* You can reuse import statements. If you're using a lot of types or dependencies, each component might rely on many different imports. Following a component-per-file convention means that you have a lot more code dedicated to imports in your codebase. And sure, editors can manage imports for you, but the code's still there.
* Less context switching when working on related code. For example, a UI component that relies on some specialized function to work - if the function is complex or long enough, it's tempting to put it in a separate file. But module boundaries are never that strong: most likely, you'll end up working on the two files at once, in tabs or an editor split pane.

There are few downsides to big files, in my experience. Whether your source files are small or large doesn't tend to make any difference for performance. At some point long files with lots of edits will get hidden in GitHub's Pull Request view, which is a downside. But I think the affects on readability and the ability to scan an application are overstated: code structure, naming choices, and module boundaries are what makes an application understandable or not, not file length.

### Using lodash

I know. It's 2022. JavaScript has its own "Array.map" function. But it doesn't have nearly as broad a standard library as Ruby, and after experiencing what it's like to have an array object with max, uniq, and, well, you name it - all the functions - it's hard to go back. So I use [lodash](https://lodash.com/).

When lodash shows up in my stacktraces, I'll occasionally replace a lodash method with a hand-rolled implementation, but there are still many cases in which lodash is plenty fast and incredibly convenient. The ad-hoc implementations of methods you could get as part of lodash often have bugs, anyway: for example, the typical Stack Overflow answer for "[how to get the maximum item in an array](https://stackoverflow.com/a/45123484/229001)" will break once you have a few hundred thousand elements.

### Using destructuring parameters for any complex method

Much like I don't have the patience to reimplement basic utility methods every time I need them, I don't see the point of remembering argument order beyond one or two. In every case, I'd prefer a method like **otpUrl({ secret: totpKey })** instead of **otpUrl(totpKey)**. I'll remember what the argument is, in this particular context, and if the method requires another 2, 3, or 8 arguments, then it'll scale nicely. So I use [destructuring parameters](https://davidwalsh.name/destructuring-function-arguments) really often, generally as soon as a function needs more than one piece of data. The performance cost is minimal enough that I would be surprised if it ever shows up in a flamegraph.

### Prefer clarity over shortness, always

There are certain naming choices in the Placemark codebase that might shock you. A map is internally called a "wrappedFeatureCollection", and it's consistently called that, in function calls and elsewhere. A feature is a wrappedFeature that contains a feature, and likewise, those are spelled out.

Abbreviations, sometimes, but never will I blur concepts. A JavaScript [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) object, a layer in a map, and a map, are separate concepts so they're kept separate, even if in casual conversation I'd refer to all of them as maps.

### Be flexible with coding style

Some parts of Placemark use my fancy functional-programming types with [purify-ts](https://github.com/gigobyte/purify) and higher-level functional-style programming patterns like mapping and reducing arrays instead of basic for-loop iteration. Others are written in a style that could easily be ported to C, and they're just concerned with performance. There's a place for both styles.

I try to fight the instinct to specify style rules. A codebase should feel cohesive and be readable, but there are many ways to do that, most of which have more to do with how one expresses and structures code, than whether a codebase uses all [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) instead of function declarations, or it keeps imports sorted in alphabetical order. Constructing my own bureaucracy of rules wouldn't help product development.
