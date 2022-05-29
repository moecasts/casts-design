---
title: Input 输入框
group:
  title: 数据录入
  order: 2
nav:
  title: 组件
  path: /components
---

# Input 输入框

## 不同大小

```tsx
import React from 'react';
import { Input } from '@casts/input';
import '@casts/input/dist/cjs/index.css';

import { Home3Fill, Key2Fill } from '@casts/icons';
import '@casts/icons/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div
      className="docs-section-item docs-section-item--block"
      style={{ marginBottom: '20px' }}
    >
      <Input placeholder="Please enter something" size="small" />
    </div>
    <div
      className="docs-section-item docs-section-item--block"
      style={{ marginBottom: '20px' }}
    >
      <Input placeholder="Please enter something" />
    </div>
    <div
      className="docs-section-item docs-section-item--block"
      style={{ marginBottom: '20px' }}
    >
      <Input placeholder="Please enter something" size="large" />
    </div>
  </div>
);
```

## 不同形状

```tsx
import React from 'react';
import { Input } from '@casts/input';
import '@casts/input/dist/cjs/index.css';

import { Home3Fill, Key2Fill } from '@casts/icons';
import '@casts/icons/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div
      className="docs-section-item docs-section-item--block"
      style={{ marginBottom: '20px' }}
    >
      <Input placeholder="Please enter something" shape="square" />
    </div>
    <div
      className="docs-section-item docs-section-item--block"
      style={{ marginBottom: '20px' }}
    >
      <Input placeholder="Please enter something" shape="round" />
    </div>
    <div
      className="docs-section-item docs-section-item--block"
      style={{ marginBottom: '20px' }}
    >
      <Input placeholder="Please enter something" size="circle" />
    </div>
  </div>
);
```

## 前/后图标

```tsx
import React from 'react';
import { Input } from '@casts/input';
import '@casts/input/dist/cjs/index.css';

import { Home3Fill, Key2Fill } from '@casts/icons';
import '@casts/icons/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div
      className="docs-section-item docs-section-item--block"
      style={{ marginBottom: '20px' }}
    >
      <Input
        placeholder="Please enter something"
        size="small"
        prefix={<Home3Fill />}
        suffix={<Key2Fill />}
      />
    </div>
    <div
      className="docs-section-item docs-section-item--block"
      style={{ marginBottom: '20px' }}
    >
      <Input
        placeholder="Please enter something"
        prefix={<Home3Fill />}
        suffix={<Key2Fill />}
      />
    </div>
    <div
      className="docs-section-item docs-section-item--block"
      style={{ marginBottom: '20px' }}
    >
      <Input
        placeholder="Please enter something"
        size="large"
        prefix={<Home3Fill />}
        suffix={<Key2Fill />}
      />
    </div>
  </div>
);
```

## 提示语

```tsx
import React from 'react';
import { Input } from '@casts/input';
import '@casts/input/dist/cjs/index.css';
import '@casts/icons/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div
      className="docs-section-item docs-section-item--block"
      style={{ marginBottom: '20px' }}
    >
      <Input placeholder="Please enter something" tips="this is a tip" />
    </div>
  </div>
);
```

## 不同状态

```tsx
import React from 'react';
import { Input } from '@casts/input';
import '@casts/input/dist/cjs/index.css';

import {
  InformationLine,
  CheckboxCircleLine,
  CloseCircleLine,
} from '@casts/icons';
import '@casts/icons/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div
      className="docs-section-item docs-section-item--block"
      style={{ marginBottom: '20px' }}
    >
      <Input placeholder="Please enter something" tips="this is a tip" />
    </div>
    <div
      className="docs-section-item docs-section-item--block"
      style={{ marginBottom: '20px' }}
    >
      <Input
        placeholder="Please enter something"
        tips="this is success tips"
        status="success"
        suffix={<CheckboxCircleLine />}
      />
    </div>
    <div
      className="docs-section-item docs-section-item--block"
      style={{ marginBottom: '20px' }}
    >
      <Input
        placeholder="Please enter something"
        tips="this is warning tips"
        status="warning"
        suffix={<InformationLine />}
      />
    </div>
    <div
      className="docs-section-item docs-section-item--block"
      style={{ marginBottom: '20px' }}
    >
      <Input
        placeholder="Please enter something"
        tips="this is error tips"
        status="error"
        suffix={<CloseCircleLine />}
      />
    </div>
  </div>
);
```
