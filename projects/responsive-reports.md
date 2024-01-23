---
title: 'Responsive reports and versioning'
date: '2020'
tags: [typescript, angular, dotnet, mssql, highlight]
---
A company wanted their internal reports app to be usable in smartphones.
---

## UX investigation

As I was tasked with enabling the use of the app from smartphones, I first started by using it by simulating a mobile screen from the browser. The idea was to enable the user to interact with the main functionality of the app:

- Navigate through the available areas and reports
- Interact with the reports (filtering)

I proceeded by wrting a document describing my experiments on how the UX was on smartphones (unusable), and how I thought we could approach the problem. I proposed different ways of implementing the grid layout system and responsive breakpoints inside the report definitions, which we discussed with the team.

## Simplifying the navigation

To simplify the navigation management and maintenance burden, we started by reducing the complexity of the `Locations` database schema and also the API to interact with it.

We went from like six tables for different *location types* (as in Region, City, Center, whatev.) to just two:
1. Locations
2. Location Type

When that migration was done, we proceeded with the implementation of an approachable mega menu design. This was to replace the dated navigation pattern we were using at the time, which was based on lots of dropdowns inside dropdowns with no safe triangles (awful on mobile and desktop).

## Report definitions

To ease management and versioning of the report definitions, we changed how the report definitions were saved: instead of saving JSON files to the filesystem we moved them to the database and tracked the versions. I added some screens to manage them and assign them to different locations, which was enabled by the schema update.

We still had to solve responsive layouts, so I implemented an alternative layout system for the reports. This was based on CSS grid and supported breakpoints for responsive design. Once that was working, I started work on updating the report definition editor screen to enable the setup of the new grid-based layouts.

Finally, we made some changes in the app layout to better support smartphones usage, like moving the navigation bar to the bottom of the screen and simplifying the breadcrumbs component.
