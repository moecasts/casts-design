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

When `manualPagination=true`, paging data is not automatically processed internally by the component, and applies to the paging state when data is loaded remotely.

<code src="../examples/manual-pagination.tsx" />

## Column pinning

<code src="../examples/column-pinning.tsx" />

## Selection

<code src="../examples/row-select.tsx" />

## Empty

<code src="../examples/empty.tsx" />

## API

<API src="@casts/table"></API>
