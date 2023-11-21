---
Name: The evolution of data-parsing leniency in Placemark
Collection ID: 616750c12c0aece979319ccd
Item ID: 6205a7040d6e0c7c91c39f53
Created On: Fri Feb 11 2022 00:00:04 GMT+0000 (Coordinated Universal Time)
Updated On: Fri Feb 11 2022 00:00:04 GMT+0000 (Coordinated Universal Time)
Published On: Fri Feb 11 2022 00:00:59 GMT+0000 (Coordinated Universal Time)
Post Summary: Accepting not-quite-valid data so you can make maps instead of fixing XML.
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/6205a6f7558f4a66193c018d_Robustness.png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/6205a6f7558f4a66193c018d_Robustness.png
Featured?: "true"
Date: Thu Feb 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Product

---

Have you ever heard of the [Robustness Principle](https://en.wikipedia.org/wiki/Robustness_principle), or Postel's Law? It goes like this:

> be conservative in what you send, be liberal in what you accept

It's a good and interesting principle, but the devil's in the details.

### Inside of programs, the robustness principle is bad

By default, I haven't followed the Robustness Principle when I've built software libraries. The main reason for that is the difference between *internal and external* data. Take a library like [Turf](https://turfjs.org/docs/) for example, which runs algorithms on geographic data represented as GeoJSON. Should Turf allow invalid GeoJSON inputs? If you accidentally write 'feature' instead of 'Feature', should it allow either?

My opinion has been, and continues to be, no. Inside of a system, an inverse Robustness principle applies: if there's bad data floating around, you have a bug in your program. In the case of Turf, the bug would be that you've accepted some GeoJSON input, but you didn't validate it on import. Or you've generated some bad GeoJSON data. The bug is in the generation: fix it there, don't tolerate it elsewhere.

The same goes for internal APIs. If you have a method that takes, say, a boolean true/false input, should it also be guaranteed to work with 0 or 1, or null and some string - should it cast its inputs to boolean values? I don't think so. If you're calling a method incorrectly, the bug is in the call, and should be fixed there. TypeScript helps a lot with this: it doesn't let you use functions wrong in that way.

### Follow the robustness principles on import & export

That being said, I've been refactoring Placemark's importers recently, and following the robustness principle as far as seems reasonable. For example: if you try to import a GeoJSON file and instead of a FeatureCollection or Feature, the file contains an array of Features, the importer can be smart enough to coerce the data into a correct form. If you import KML and there's an invalid XML namespace that makes the KML *technically* invalid XML, Placemark will parse the XML anyway and produce what it can, in terms of valid features.

Why? Well, there's a lot of invalid data out there. In practice, lots of software doesn't follow the robustness principle. Well-known GIS systems produce invalid data, every day. Even if I make a fuss and get them to fix their code, that already-generated invalid data will still be present, lurking on people's hard drives and the internet.

And between crashing, validating, or parsing what I can – parsing what I can is really the user-friendly solution. Even if I can produce a nice error message, like that this GeoJSON file has an invalid Feature on line 909, is the average user going to open their text editor and patch up the file manually? It's unlikely: you're giving information that isn't really actionable.

I think the right source for the adage **Parse, don't validate**, is [Alexis King](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/). It's a good adage. My strategy with importing is now something like **parse and coerce, don't validate**.

### The downsides of the principles

I find Martin Thomson's [critique of the robustness principle](https://datatracker.ietf.org/doc/html/draft-iab-protocol-maintenance) very convincing:

> A flaw can become entrenched as a de facto standard. Any implementation of the protocol is required to replicate the aberrant behavior, or it is not interoperable. This is both a consequence of applying the robustness principle, and a product of a natural reluctance to avoid fatal error conditions. Ensuring interoperability in this environment is often referred to as aiming to be "bug for bug compatible".

If Placemark is too lenient with its data input, someone might keep using bad systems or bad scripts that generate bad data, happily importing it into Placemark, and then get angry at another product that fails to ingest the bad data. This sort of tolerance level is hard to perfectly specify.

A counterpoint would be the [HTML living standard](https://html.spec.whatwg.org/multipage/parsing.html) which lovingly documents all the *correct ways to interpret incorrect documents*. Think about that. A wild idea, but it works really well in practice – its success and approval in stark contrast to [XHTML](https://en.wikipedia.org/wiki/XHTML), the ill-fated attempt to make HTML *stricter* and more easily parsed as XML.
