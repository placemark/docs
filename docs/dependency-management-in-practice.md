---
Name: Dependency management in practice
Collection ID: 616750c12c0aece979319ccd
Item ID: 636a9bd4c9f2ad66e370e57a
Created On: Tue Nov 08 2022 18:11:32 GMT+0000 (Coordinated Universal Time)
Updated On: Tue Nov 08 2022 18:41:34 GMT+0000 (Coordinated Universal Time)
Published On: Tue Nov 08 2022 18:41:39 GMT+0000 (Coordinated Universal Time)
Post Summary: A technical deep-dive into how Placemark deals with the complexity
  of JavaScript dependencies
Main Image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/636aa280b7ac603d2159ba32_Dependencies%20-%20Nov%207%20(1).png
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/636aa280b7ac603d2159ba32_Dependencies%20-%20Nov%207%20(1).png
Featured?: "false"
Date: Tue Nov 08 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

How do you manage dependencies, over the long term, in a fairly complex JavaScript application? Placemark has its fair share of dependencies - 140 entries in [package.json's dependencies object](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file) and 860MB in the node\_modules directory.

I hope this post is useful to folks in the same situation. I'm not proposing a simple solution or some new technology - this is about covering some basic principles that I use day to day.

### How do you update dependencies?

The main options are to use a bot, like dependabot, or a CLI tool, like npm-check-updates.

I've used [dependabot](https://github.com/dependabot), GitHub's automatic tool for dependency updates. I've also tried [renovate](https://www.mend.io/free-developer-tools/renovate/), which does a better job than dependabot. I prefer [npm-check-updates](https://github.com/raineorshine/npm-check-updates), or ncu to the bots. It's easier for me to group dependency updates into pull requests using ncu. And it has really useful options. Usually I'll run it like this:

-i indicates "interactive" - it'll let me select which dependencies to update. -m means "minimal" - it will ignore updates that are already allowed by the version range in package.json. Let's talk about that.

### package.json and lock files

![Illustration of lock file dynamics](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/636a9dc145fbf11b5c606103_lockfile.png)

If you've used Node.js, you know about package.json, the file that specifies your dependencies. And hopefully you also know about lock files. For npm, it'll be [package-lock.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json), for Yarn, it'll be yarn.lock. The package.json file specifies direct dependencies of your application and version ranges, whereas the lock file specifies all dependencies - direct and indirect - and their exact versions. If you don't use a lock file, whenever you install your dependencies or deploy your application, you'll get a slightly different result.

So, it's essential to use a lock file. Which brings us to the two kinds of package updates: package.json updates and lock file updates.

Let's say you have a dependency in your package.json file like lodash at "^4.0.0", and your lock file specifies that lodash "4.0.0" was installed as a result. And you want to update to lodash "4.0.1". One option would be to update package.json to "^4.0.1", but this isn't necessary: the [semver](https://semver.org/) specifier "^4.0.0" already includes "4.0.1". So instead of updating package.json, you should just update the lock file, by running yarn update lodash or npm update lodash.

This is why I use the -m flag with npm-check-updates: it omits package updates that you could get by just running yarn update or npm update. And it should be a lower-priority, lower-risk effort to run those commands, because typically you will have semver ranges in package.json that restrict how much those packages will be upgraded - "^4.0.0" won't allow lodash to be updated to "5.0.0". That would require a more explicit change in package.json.

### How often should you update packages?

Messing around with dependencies is best left as something for spare development cycles. If I'm heavily developing some feature, I might go months without tending to package updates. The blessing of how the [npm](https://www.npmjs.com/) registry works is that old dependencies simply keep on working. Updating a dependency out of necessity is a rare thing, usually because of a legitimate security concern, or an upgrade somewhere else in the system that makes the old dependency incompatible.

### What about security advisories?

Scanning NPM modules for security vulnerabilities is a popular practice, but most of that effort is wasted. The vast majority of module vulnerabilities are not exploitable and the scanning tools do the ecosystem a disservice by failing to explain what is and isn't important.

In practice, actual security vulnerabilities are an extremely high priority. For example, [malware exploits in dependencies](https://github.com/faisalman/ua-parser-js/issues/536), as was found in UAParser.js, or an exploit in [tar creation](https://github.com/npm/node-tar/security/advisories/GHSA-r628-mhmh-qjhw). Very bad.

But vulnerability scanners collectively "cry wolf" and highlight bugs that can't be exploited at all. For example, take my project [simple-statistics](https://github.com/simple-statistics/simple-statistics). It has [6 security alerts from dependabot](https://github.com/simple-statistics/simple-statistics/security/dependabot), right now. Simple-statistics has *only* devDependencies, no dependencies, so if someone's using the module, they aren't downloading any of the affected code. Even then, the highlighted vulnerabilities would only be relevant if untrusted input got to those functions.

![Explanation of dependency security surface](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/636a9ec5893404688f6e6ecc_vulnerabilities.png)

There's some hope in companies like [socket.dev](https://socket.dev/) delivering a better signal to noise ratio for security. Until then, it's better to take the security scanners with a big grain of salt. Unfortunately, organizations that make rules about upgrading any package at any level that has a [Snyk](https://snyk.io/) advisory against it are mostly creating busywork for open source maintainers.

### Reusing what's in the lockfile

The final note that I'll make is that lockfiles are tremendously useful to read. Essentially, a lockfile shows you all of the dependencies in your node\_modules directory in a flattened format. Before I add a new dependency to Placemark, I'll search the lockfile to see if there's already a module that has been included indirectly by one of my direct dependencies. Not only does it save disk space and possibly bundle size if I can reuse an existing indirect dependency by making it a direct dependency, this is also a way to rely on the wisdom of crowds in making dependency decisions. An indirect dependency of a well-established module that I'm already using is likely to be already trusted by other authors and battle-tested.

A useful tool in this exercise is the why command, like yarn why or [npm-why](https://github.com/amio/npm-why). The lockfile provides a flattened representation of all the modules in node\_modules, and the why command lets you pick a module and quickly understand why it's in your project, via which chain of direct to indirect dependencies it was included.
