---
Name: GitHub issues-only project management
Collection ID: 616750c12c0aece979319ccd
Item ID: 616806b5b2c6469b79532b2b
Created On: Thu Oct 14 2021 10:30:13 GMT+0000 (Coordinated Universal Time)
Updated On: Sun Jul 31 2022 19:04:32 GMT+0000 (Coordinated Universal Time)
Published On: Sun Jul 31 2022 19:05:12 GMT+0000 (Coordinated Universal Time)
Post Summary: My thoughts on why project management applications are often
  overkill, and using simple tools forces you to adopt more efficient practices
  as a small team.
Main Image: ""
Thumbnail image: https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61bb5dbda8d73bd4627673a3_Github%20issues-only%20project%20management.png
Featured?: "true"
Date: Mon Jul 19 2021 00:00:00 GMT+0000 (Coordinated Universal Time)
Category: Development

---

A few of my friends ended up as project managers and they’ve learned that everything should be a Trello board. Before you start a project, brainstorm in a Trello board. Plan that wedding: Trello. And, of course, software development projects: Trello is the answer.

The tools that we use end up shaping how we think, and taking over more and more different purposes in our lives. So some folks manage *everything* in Microsoft Excel or the macOS “Sticky Notes” app that somehow still exists in 2021.

Because Trello, JIRA, and other visual and somewhat abstract solutions dominate the space of tech project planning and management, I think it’s worthwhile to lay out an alternative, which is my default: *just use *[*GitHub issues*](https://github.com/features/issues/)* for everything*.

Some background is useful here: I started my career at [Development Seed](https://developmentseed.org/), and was part of the team that spun out and became [Mapbox](https://www.mapbox.com/). And back in the day, *everything* was GitHub issues.

* The company internal blog was an issue-only repository. Blog posts were issues, you’d comment on them with comments on issues.
* Sales deals were tracked with issue threads.
* Recruiting was in issues - an issue per candidate.
* All internal project planning was tracked in issues.

Now this has obvious drawbacks: you couldn’t delete issues until recently, and wiping the history for sensitive information was hard, and requiring everyone to learn Markdown was controversial.

But it was blissfully effective in other ways. GitHub issues make it harder for you to procrastinate and pretend. The lack of style control, the inability to create complicated document structures, means that it’s much harder to dress up nonsense as sense.

Building things is chaotic and difficult at the core, and so all forms of planning and management are forms of interpretation, estimation, and storytelling. In the short times I’ve used fancier project management tools, that storytelling threatened to replace reality.

We’d look at the burn-down chart of remaining issues, find the y-intercept, and believe in it. Or gaze upon hundreds of issues and spend weeks organizing them into little bins, perfectly categorized, then have the same quantity of work ahead of us.

In their ideal form, GitHub issues are homogenous. An issue is a task that you need to complete. If it isn’t a task, it isn’t an issue. If it’s done, it’s closed. If it’s not done, it’s open.

A perfect issue is small enough to be closed by a single Pull Request. If it’s too big for that and you find yourself adding checklists to it, strongly consider creating multiple issues.

Judicious use of milestones and labels let you associate issues in chronological and categorical groups, respectively. Using labels for time-bound tasks or milestones for categories will break the system: don’t do that. I wrote a [little guide about that](https://github.com/tmcw/github-best-practices#issues--milestones).

GitHub Issues are a perfect unfancy tool. Fill them with thoughtful writing and use them judiciously and they can create just-enough structure to keep track of what needs to be done, without getting lost in the work-about-work that dominates a lot of project planning. They’re not perfect for thousand-person teams, but the tools that big teams use aren’t well-suited for fast-moving indie projects either. So far ‘just issues’ is working great for [Placemark](https://www.placemark.io/).
