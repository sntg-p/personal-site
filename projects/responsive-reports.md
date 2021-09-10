---
title: 'Responsive reports and versioning'
date: '2020'
tags: [typescript, angular, dotnet, mssql, highlight]
---
A company wanted their internal reports app to be usable in smartphones.
---

First I had to migrate the old locations database structure to a more simple one, going from like six different location type tables to just two. This not only enabled me to easily replace the ugly menu design they had, it also made the logic required for the next step easier.

We changed how the report definitions were saved: instead of saving JSON files to the filesystem we moved them to the database and tracked the versions. I added some screens to manage them and assign them to different locations.

Then, I wrote a document describing my experiments on how the UX was on smartphones (unusable), and how I thought we could approach the problem. I proposed different ways of implementing the grid layout system and responsive breakpoints inside the report definitions, it was nice that we could discuss it as a team.

Finally, I implemented the responsive design support for the report definitions along with some changes in the app layout to better support smartphones usage, along with a screen to setup the grid-based layouts.
