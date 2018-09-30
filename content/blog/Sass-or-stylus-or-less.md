---
date: 2017-11-11T11:25:05-04:00
description: "Starting a new project and looking for CSS pre-processor, let's find out which one is going strong."
featured_image: "/images/sass-stylus-less.png"
tags: []
title: "SASS vs Stylus vs LESS"
---
Starting a new project and looking for CSS pre-processor, let's find out which one is going strong. 

## A Brief Overview
CSS preprocessors are scripting languages which produce CSS that solves cross browsers compatiblity issues and it saves time and effort of CSS development. CSS preprocessors enhances the functionality of CSS, it automate repetitive tasks, reduce the number of errors and code bloat, create reusable code snippets, and ensure backward compatibility.

<blockquote><strong>Spoiler alert:</strong> SCSS & Stylus are way ahead than others.</blockquote>

## Syntax
Every css preprocessors has their own syntax, some follows block formatting principle whereas some allows more flexibility.
But here comes the most flexible yet contoversial syntax of Stylus which provides more than one ways to write code within one file or even in one block.

SASS Syntax
{{< highlight css >}}
h1 
	font-size: 3.4rem
	font-weight: 500
{{< /highlight >}}

Regular CSS Syntax
{{< highlight css >}}
h1 {
	font-size: 3.4rem;
	font-weight: 500;
}
{{< /highlight >}}

No curly braces. No semicolons. No colons.
{{< highlight css >}}
h1 
	font-size 3.4rem
	font-weight 500
{{< /highlight >}}

#### This minimalistic approach is biggest advantage of using Stylus and team members can follow their preferred style of writing code. 

## Mixins

Using stylus writing complex mixins becomes more readable and it becomes easy to understand for developers, whereas SCSS and LESS have bit complicated approach of writing mixins.





