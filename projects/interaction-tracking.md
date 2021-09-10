---
title: 'User interaction tracking'
date: '2019'
tags: [javascript, typescript, angular, dotnet, mssql]
---
A company wanted to add track the usage of different elements in their Angular app for UX design purposes, so I made a directive that enabled them to do just that.
---

When this directive is added to an element, it adds an event listener which, under the specified conditions, fires an API call to a small .NET service I developed to save the element identifier, user and type of interaction.
