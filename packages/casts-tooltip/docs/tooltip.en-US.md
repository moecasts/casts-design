---
title: Tooltip
group:
  title: Data Display
  order: 3
nav:
  title: Components
  path: /components
description: Tooltips are user interface components that display additional information or hints when a user hovers over or focuses on an element.
---

## Installation

```bash
$ pnpm add @casts/tooltip
```

## Basic

<code src="../examples/basic" />

## Themes

<code src="../examples/different-themes" />

## Controlled

<code src="../examples/controlled" />

## Trigger

<code src="../examples/trigger" />

### Manual control visible

<code src="../examples/manual-visible" />

## Placement

<code src="../examples/different-placement" />

## Show arrow

<code src="../examples/arrowless" />

## Disable popup

<code src="../examples/disabled" />

## Attach parent node

The default parent of the floating layer is the `body`, and the mounted parent element can be freely adjusted via `attach` prop.

<code src="../examples/attach" />

## Fit content

<code src="../examples/fit-content" />

## onVisibleChange callback

<code src="../examples/visible-callback" />

## Delay

Only works when `trigger = 'hover'`.

<code src="../examples/delay" />

## Custom style

<code src="../examples/custom-style" />

## Custom overlay offset

<code src="../examples/custom-overlay-offset" />

## Duration

disappear after duration.

<code src="../examples/duration" />

## API

<API src="@casts/tooltip"></API>
