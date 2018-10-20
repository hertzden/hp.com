---
date: 2017-11-11T11:25:05-04:00
description: "Starting a new project and looking for CSS pre-processor, let's find out which one is going strong."
featured_image: "/images/sass-stylus-less.png"
tags: [SCSS, Stylus, LESS, SASS, CSS Preprocessors]
title: "SASS vs Stylus vs LESS"
---
Starting a new project and looking for CSS pre-processor, let's find out which one is going strong. 

## A Brief Overview
CSS preprocessors are scripting languages which produce CSS that solves cross browsers compatiblity issues and it saves time and effort of CSS development. CSS preprocessors enhances the functionality of CSS, it automate repetitive tasks, reduce the number of errors and code bloat, create reusable code snippets, and ensure backward compatibility.

<blockquote><strong>Spoiler alert:</strong> Stylus is much better than others but not in active development whereas SASS/SCSS has vast community and has inbuilt support with popular frameworks.</blockquote>

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

## Extend

Both Stylus and LESS allows nested extend feature whereas SASS/SCSS don't.

As written in stylus docs: The Stylus @extend directive is inspired by (and essentially the same as) the SASS Implementation, with few subtle differences.

Refer <a href="http://stylus-lang.com/docs/extend.html" target="_blank">Stylus Docs</a> for detailed examples.

## Property Lookup

One more unique feature of Stylus is ability to reference properties defined without assigning their values to variables. Look at example of vertically and horizontally centering an element. 

Refer <a href="http://stylus-lang.com/docs/variables.html" target="_blank">Stylus Docs for Property Lookup</a> for detailed description.

### Closing Note

If you are a new to preprocessor ecosystem then go for Stylus or SCSS, do some research based on your project needs and decide one of them. LESS and others are not so great so avoid them.





