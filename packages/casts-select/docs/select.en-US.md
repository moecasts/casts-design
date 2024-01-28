---
title: Select
group:
  title: Data Entry
  order: 2
nav:
  title: Components
  path: /components
---

# Select

<code src="../examples/basic.tsx"></code>

## Virtual scroll

- When the data size is greater than `100`, virtual scrolling will be enabled by default for better performance.

- You can turn off this policy with `virtual={false}`, or change the threshold for turning on virtual scrolling with `virtual={{ threshold: number }}`.

<code src="../examples/virtual.tsx"></code>

## API

<API src="@casts/select"></API>
