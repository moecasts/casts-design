---
title: Tooltip 文字提示
group:
  title: 数据展示
  order: 3
nav:
  title: 组件
  path: /components
description: 工具提示是一种用户界面，用于在用户悬停或聚焦于某个元素时显示额外的信息或提示。
---

## 安装

```bash
$ pnpm add @casts/tooltip
```

## 基础案例

<code src="../examples/basic" />

## 不同形状

<code src="../examples/different-shape" iframe />

## 不同主题

<code src="../examples/different-themes" iframe/>

## 受控

<code src="../examples/controlled" />

## 触发方式

<code src="../examples/trigger" />

### 手动控制

<code src="../examples/manual-visible" />

## 不同方向

<code src="../examples/different-placement" />

## 不显示箭头

<code src="../examples/arrowless" />

## 禁用弹出层

<code src="../examples/disabled" />

## 挂载父节点

浮层默认父节点是 `body` ，可通过 `attach` 自由调整挂载的父节点元素。

<code src="../examples/attach" />

## 内容自适应

<code src="../examples/fit-content" />

## 显示/隐藏回调

<code src="../examples/visible-callback" />

## 延迟显示

只有 `trigger = 'hover'` 时有效。

<code src="../examples/delay" />

## 自定义样式

<code src="../examples/custom-style" />

## Custom overlay offset

<code src="../examples/custom-overlay-offset" />

## 显示时长

`duration` 时间后消失。

<code src="../examples/duration" />

## API

<API src="@casts/tooltip"></API>
