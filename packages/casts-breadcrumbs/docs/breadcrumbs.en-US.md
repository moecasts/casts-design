---
title: Breadcrumbs
group:
  title: Navigator
nav:
  title: Components
  path: /components
description: Breadcrumbs display a hierarchy of links to the current page or resource in an application.
---

## Installation

```bash
$ pnpm add @casts/breadcrumbs
```

## Basic

<code src="../examples/basic.tsx" />

## Custom separator

<code src="../examples/custom-separator.tsx" />

## Max width

Limit the maximum width of `BreadcrumbItem`. By default, for elements that are too long, a Tooltip will be used to display the full content.

<code src="../examples/max-width.tsx" />

## Tooltip

You can manually control the `Tooltip` property of `BreadcrumbItem` to achieve a customized effect.

<code src="../examples/item-tooltip.tsx" />

## Collapsing Items

<code src="../examples/collapsed.tsx" />

## API

<API src="@casts/breadcrumbs" />
