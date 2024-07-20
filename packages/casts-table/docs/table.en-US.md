---
title: Table
group:
  title: Data Display
nav:
  title: Components
  path: /components
description: Table is used to display grid data, supporting interactive features such as sorting, filtering, and pagination.
---

## Installation

```bash
$ pnpm add @casts/table
```

## Basic

<code src="../examples/basic.tsx" />

## Manual pagination

当 `manualPagination=true` 时，组件内部不会自动处理分页数据，适用于远程加载数据时的分页状态。

<code src="../examples/manual-pagination.tsx" />

## Selection

<code src="../examples/row-select.tsx" />

## Empty

<code src="../examples/empty.tsx" />

## API

<API src="@casts/table"></API>
