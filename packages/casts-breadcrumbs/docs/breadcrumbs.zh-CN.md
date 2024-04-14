---
title: Breadcrumbs
group:
  title: 导航
nav:
  title: 组件
  path: /components
description: 面包屑显示应用程序中指向当前页面或资源的链接层次。
---

## 安装

```bash
$ pnpm add @casts/breadcrumbs
```

## 基础示例

<code src="../examples/basic.tsx" />

## 自定义分隔符

<code src="../examples/custom-separator.tsx" />

## 限制组件长度

限制 `BreadcrumbItem` 的最大宽度，默认情况下，对于超长的元素，会使用 `Tooltip` 来展示完整内容。

<code src="../examples/max-width.tsx" />

## 文字提示

可以自行控制 `BreadcrumbItem `的 `Tooltip` 属性，来实现自定义的效果。

<code src="../examples/item-tooltip.tsx" />

## 折叠元素

<code src="../examples/collapsed.tsx" />

## API

<API src="@casts/breadcrumbs" />
