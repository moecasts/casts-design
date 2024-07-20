---
title: Table 表格
group:
  title: 数据展示
nav:
  title: 组件
  path: /components
description: 表格用于展示行列数据，支持排序、筛选、分页等交互功能。
---

## 安装

```bash
$ pnpm add @casts/table
```

## 基础案例

<code src="../examples/basic.tsx" />

## 手动分页

当 `manualPagination=true` 时，组件内部不会自动处理分页数据，适用于远程加载数据时的分页状态。

<code src="../examples/manual-pagination.tsx" />

## 可选择

<code src="../examples/row-select.tsx" />

## 空表格

<code src="../examples/empty.tsx" />

## API

<API src="@casts/table"></API>
