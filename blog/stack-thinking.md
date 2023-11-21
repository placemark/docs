---
Name: Stack thinking
Collection ID: 616750c12c0aece979319ccd
Item ID: 6168074966af3c36e8fef476
Created On: Thu Oct 14 2021 10:32:41 GMT+0000 (Coordinated Universal Time)
Updated On: Wed Dec 22 2021 19:34:22 GMT+0000 (Coordinated Universal Time)
Published On: Wed Dec 22 2021 19:36:46 GMT+0000 (Coordinated Universal Time)
Post Summary: Here's my framework for how to think about some fundamental
  choices I have to make when building a company.
Main Image: ""
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61bb57cea9687ae4a192d834_Stack%20thinking.png
Featured?: "true"
Date: Thu May 06 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

Writing is extremely helpful for my thinking. In the process of building Placemark, I’ve been writing short notes to myself, to try and explain decisions. That way, I can revisit the decision along with all the thinking I was doing at the time. And, well, at that point, why not share.

The first few posts will be about stacks: the technology choices I’m making in order to build Placemark. Because those will be about the particular choices and rationale, here’s a little bit about my underlying philosophy.

First: **it’s really important to understand the kind of thing you are making**. Are you creating a static website that will rarely get updates? Or something really dynamic, with lots of functionality? Something in-between? A lot of badly constructed things are the way they are because nobody answered this question. And equally problematic is the tendency to exaggerate problems or anticipate too much growth. Sure: maybe you’re building something that has the *possibility* of becoming as complicated, high-performance, and advanced as Facebook or Photoshop, but version 1 will suffer if you overarchitect it.

Next, **it’s really important to find the right kind of thing, more important than it is to find the truly-best option**. You probably won’t fail because you used Django instead of Rails, or Vue instead of React. Within each family of solutions things are pretty darn similar. Not the same, of course, and people will go to war over these small differences, but the point is that people successfully built Yelp on Django and Instacart on Rails, and it’s likely that your delivery-or-food-search business could work on either. But could it work on C++? Less likely. Find the right ballpark.

Then, you should try to focus on things **one or two jumps away from where you are, in your current knowledge**. There are plenty of technologies I’m absolutely intrigued by, like Svelte or Rust, and I have some medium level of knowledge using them. And then there are even more “hardcore” versions of those things, like building a backend in Haskell. Do I think that would be fun? Sure! But I’m building a product, not showing off for the internet.

Finally, **compromise solutions are often the most practical**. I’m talking about multi-paradigm programming languages like JavaScript or Python, which let you write in a functional programming style but mutate data and create side-effects when they seem right. Or frameworks like Rails, which provide [sharp knives](https://m.signalvnoise.com/provide-sharp-knives/), powerful but sort of dangerous options outside of the ‘best practices.’ Though I find the *purity* of functional programming and strict systems and minimal languages invariably attractive, unless your whole mind lives in that paradigm, that purity eventually gets in the way.

I don’t have a perfect method for figuring out the initial way to go. I’ve made stack decisions I regret, that needed to be rethought, that cost time and money. But the thing about these decisions is that they need to be made to advance to the next step: so you have to make them, and you can’t take forever to think about it.
