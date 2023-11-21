---
Name: "Changelog: April 25"
Collection ID: 616750c12c0aece979319ccd
Item ID: 6262ac49c3d5f64e69191059
Created On: Fri Apr 22 2022 13:23:21 GMT+0000 (Coordinated Universal Time)
Updated On: Mon Apr 25 2022 17:07:28 GMT+0000 (Coordinated Universal Time)
Published On: Mon Apr 25 2022 17:07:34 GMT+0000 (Coordinated Universal Time)
Post Summary: Just another Monday, with some improvements, fixes, and commentary!
Main Image: ""
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/6266ce870ff2824c3f271707_Changelog.png
Featured?: "false"
Date: Mon Apr 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Changelog

---

What a month it has been since late last week when [Placemark officially opened to the public](/post/announcing-placemark)! Besides receiving a lot of love and sending a lot of emails, here's what's new!

### Improvements

* Placemark supports simplifying features. The amount of simplification, set in units of degrees, was previously on a set range. That really clobbered small features. The simplification slider now allows values relative to the size of the feature.
* Units are better represented: they're grouped into Imperial, Metric, and Other, and sorted by their size. This should make it a lot easier to find the right unit when you're measuring the length of a line, the area of a polygon, or choosing how much to buffer a feature's geometry.
* There are lots of ways to [import data into Placemark](/documentation/importing), but there was one missing: dropping a file on the index page, the one where your maps are listed. Dropping a file there should create a map and open the import dialog to import that data, right? This feels like it *should work*, and now it does!

### Fixes

* Opening and saving files in Safari is more reliable now. Previously clicking "Import File…" through the main menu wouldn't consistently open the provided file.
* Some icons didn't properly flip in dark mode. They now do.
* Some invalid GPX data was able to be imported and would crash Placemark. This is fixed now! Placemark's KML, GPX, and TCX importers are all part of our [open-source toGeoJSON module](https://github.com/placemark/togeojson), which you can use for your own projects and software too! The fixes for GPX are in that module.

### Commentary

It's great to be writing a changelog. I love progress. As much fun as it is to release Placemark, I know that the real work is in responding quickly to feedback and building something useful. There are no overnight successes, and we don't get everything right on the first try. But now I get to improve Placemark and tell you about it, and you can sign up and see for yourself. Isn't that cool? There are plenty of features and improvements on the way, both the big ones hinted at [on the roadmap](/roadmap) and a million quality-of-life improvements that I hope will really make this product nice.

Sorting those units swept me down a deep Wikipedia rabbit hole about units. Did you know that there's a [US Survey foot](https://en.wikipedia.org/wiki/Foot_\(unit\)#U.S._survey_foot), a unit that's infinitesimally smaller than the "foot" that we usually refer to? And also a [US Survey mile](https://en.wikipedia.org/wiki/Mile#U.S._survey), that's also just barely different than a regular old fashioned mile? Certainly some surveyors are reading this and nodding *yes*.
