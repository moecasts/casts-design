---
title: Input
group:
  title: Data Entry
  order: 2
nav:
  title: Components
  path: /components
---

# Input

## Different size

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

## Different shape

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

## Prefix / Suffix icon

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

## Tips

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

## Different status

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

## Disabled

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
      <Input
        disabled
        placeholder="Please enter something"
        tips="this is a tip"
      />
    </div>
    <div
      className="docs-section-item docs-section-item--block"
      style={{ marginBottom: '20px' }}
    >
      <Input
        disabled
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
        disabled
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
        disabled
        placeholder="Please enter something"
        tips="this is error tips"
        status="error"
        suffix={<CloseCircleLine />}
      />
    </div>
  </div>
);
```

## Controlled value

```tsx
import React, { useState } from 'react';
import { Input } from '@casts/input';
import '@casts/input/dist/cjs/index.css';

export default () => {
  const [value, setValue] = useState('controlled value');
  const onChange = (value, { e }) => {
    setValue(value);
    console.log('onChange', value, e);
  };
  return (
    <div className="docs-section">
      <div
        className="docs-section-item docs-section-item--block"
        style={{ marginBottom: '20px' }}
      >
        <Input
          value={value}
          placeholder="Please enter something"
          onChange={onChange}
        />
      </div>
    </div>
  );
};
```

## Uncontrolled value

```tsx
import React, { useState } from 'react';
import { Input } from '@casts/input';
import '@casts/input/dist/cjs/index.css';

import '@casts/icons/dist/cjs/index.css';

export default () => {
  return (
    <div className="docs-section">
      <div
        className="docs-section-item docs-section-item--block"
        style={{ marginBottom: '20px' }}
      >
        <Input
          defaultValue={'uncontrolled value'}
          placeholder="Please enter something"
        />
      </div>
    </div>
  );
};
```

## Max length

```tsx
import React, { useState } from 'react';
import { Input } from '@casts/input';
import '@casts/input/dist/cjs/index.css';

export default () => {
  return (
    <div className="docs-section">
      <div
        className="docs-section-item docs-section-item--block"
        style={{ marginBottom: '20px' }}
      >
        <Input maxLength="5" placeholder="Please enter something" />
      </div>
    </div>
  );
};
```

## Auto width

```tsx
import React, { useState } from 'react';
import { Input } from '@casts/input';
import '@casts/input/dist/cjs/index.css';

export default () => {
  return (
    <div className="docs-section">
      <div
        className="docs-section-item docs-section-item--block"
        style={{ marginBottom: '20px' }}
      >
        <Input
          autoWidth
          defaultValue={'defaultValue'}
          placeholder="Please enter something"
        />
      </div>
    </div>
  );
};
```

<API src="@casts/input"></API>
