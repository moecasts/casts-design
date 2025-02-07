---
title: Select 选择框
group:
  title: 数据录入
  order: 2
nav:
  title: 组件
  path: /components
description: 选择框用于从下拉列表中选择一个或多个选项。
---

## 安装

```bash
$ pnpm add @casts/select
```

<code src="../examples/basic.tsx"></code>

## 不同大小

<code src="../examples/different-sizes.tsx" />

## 虚拟滚动

- 当数据量大于 `100 `时，会默认开启虚拟滚动，以获得更好的性能。

- 可通过 `virtual={false}` 关闭该策略，也可通过 `virtual={{ threshold: number }}` 修改开启虚拟滚动的阈值。

<code src="../examples/virtual.tsx"></code>

## API

<API src="@casts/select"></API>
