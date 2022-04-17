---
title: Progress
group:
  title: Feedback
nav:
  title: Components
  path: /components
---

# Progress

## LinearProgress

```tsx
import React from 'react';
import { LinearProgress } from '@casts/progress';
import '@casts/progress/dist/cjs/index.css';

export default () => {
  return (
    <div className="docs-section">
      <div className="docs-section-item docs-section-item--block">
        <LinearProgress />
      </div>
      <div className="docs-section-item docs-section-item--block">
        <LinearProgress percent={30} />
      </div>
    </div>
  );
};
```

### Status

```tsx
import React from 'react';
import { LinearProgress, ProgressStatus } from '@casts/progress';
import '@casts/progress/dist/cjs/index.css';

export default () => {
  return (
    <div className="docs-section">
      <div className="docs-section-item docs-section-item--block">
        <LinearProgress percent={30} />
      </div>
      <div className="docs-section-item docs-section-item--block">
        <LinearProgress percent={60} status={ProgressStatus.SUCCESS} />
      </div>
      <div className="docs-section-item docs-section-item--block">
        <LinearProgress percent={60} status={ProgressStatus.WARNING} />
      </div>
      <div className="docs-section-item docs-section-item--block">
        <LinearProgress percent={60} status={ProgressStatus.ERROR} />
      </div>
    </div>
  );
};
```

### Sizes

```tsx
import React from 'react';
import { LinearProgress } from '@casts/progress';
import '@casts/progress/dist/cjs/index.css';

export default () => {
  return (
    <div className="docs-section">
      <div className="docs-section-item docs-section-item--block">
        <LinearProgress percent={30} size="small" />
      </div>
      <div className="docs-section-item docs-section-item--block">
        <LinearProgress percent={30} />
      </div>
      <div className="docs-section-item docs-section-item--block">
        <LinearProgress percent={30} size="large" />
      </div>
      <p>自定义大小</p>
      <div className="docs-section-item docs-section-item--block">
        <LinearProgress percent={30} strokeWidth="10px" />
      </div>
      <div className="docs-section-item docs-section-item--block">
        <LinearProgress percent={30} strokeWidth="20px" />
      </div>
      <div className="docs-section-item docs-section-item--block">
        <LinearProgress percent={30} strokeWidth="40px" />
      </div>
    </div>
  );
};
```

### Colors

```tsx
import React from 'react';
import { LinearProgress } from '@casts/progress';
import '@casts/progress/dist/cjs/index.css';

export default () => {
  return (
    <div className="docs-section">
      <div className="docs-section-item docs-section-item--block">
        <LinearProgress percent={30} color="red" />
      </div>
      <div className="docs-section-item docs-section-item--block">
        <LinearProgress percent={50} color="red" trackColor="pink" />
      </div>
    </div>
  );
};
```

### Custom Label

```tsx
import React from 'react';
import { LinearProgress } from '@casts/progress';
import { Home2Fill } from '@casts/icons';
import '@casts/progress/dist/cjs/index.css';

export default () => {
  return (
    <div className="docs-section">
      <div className="docs-section-item docs-section-item--block">
        <LinearProgress
          percent={30}
          format={(percent: number) => `${percent}xxx`}
        />
      </div>
      <div className="docs-section-item docs-section-item--block">
        <LinearProgress
          percent={50}
          format={(percent: number) => (
            <>
              <Home2Fill size="14px" />
              {`${percent}xx`}
            </>
          )}
        />
      </div>
    </div>
  );
};
```

### Percent Change

```tsx
import React, { useState } from 'react';
import { LinearProgress } from '@casts/progress';
import '@casts/progress/dist/cjs/index.css';

export default () => {
  const [percent, setPercent] = useState(30);
  return (
    <div className="docs-section">
      <p>
        <button onClick={() => setPercent(percent + 10)}>+10</button>
        <button onClick={() => setPercent(percent - 10)}>-10</button>
      </p>
      <div className="docs-section-item-block">
        <LinearProgress percent={percent} />
      </div>
    </div>
  );
};
```

## CircularProgress

### Track

```tsx
import React from 'react';
import { CircularProgress } from '@casts/progress';
import '@casts/progress/dist/cjs/index.css';

export default () => {
  return (
    <div className="docs-section">
      <div className="docs-section-item">
        <CircularProgress />
      </div>
      <div className="docs-section-item">
        <CircularProgress track />
      </div>
    </div>
  );
};
```

### Colors

```tsx
import React from 'react';
import { CircularProgress } from '@casts/progress';
import '@casts/progress/dist/cjs/index.css';

export default () => {
  return (
    <div className="docs-section">
      <div className="docs-section-item">
        <CircularProgress />
      </div>
      <div className="docs-section-item">
        <CircularProgress color="hsla(17, 83%, 52%, 1)" />
      </div>
      <div className="docs-section-item">
        <CircularProgress color="hsla(116, 46%, 50%, 1)" />
      </div>
      <div className="docs-section-item">
        <CircularProgress color="hsla(17, 83%, 52%, 1)" />
      </div>
    </div>
  );
};
```

### 不同尺寸宽度

```tsx
import React from 'react';
import { CircularProgress } from '@casts/progress';
import '@casts/progress/dist/cjs/index.css';

export default () => {
  return (
    <div className="docs-section">
      <div className="docs-section-item">
        <CircularProgress size={24} />
      </div>
      <div className="docs-section-item">
        <CircularProgress />
      </div>
      <div className="docs-section-item">
        <CircularProgress strokeWidth={6} />
      </div>
    </div>
  );
};
```

### Static Percent

```tsx
import React from 'react';
import { CircularProgress } from '@casts/progress';
import '@casts/progress/dist/cjs/index.css';

export default () => {
  return (
    <div className="docs-section">
      <div className="docs-section-item">
        <CircularProgress showLabel={true} percent={0} />
      </div>
      <div className="docs-section-item">
        <CircularProgress showLabel={true} percent={50} />
      </div>
      <div className="docs-section-item">
        <CircularProgress showLabel={true} percent={75} />
      </div>
      <div className="docs-section-item">
        <CircularProgress showLabel={true} percent={100} />
      </div>
    </div>
  );
};
```

### Percent Change

```tsx
import React, { useState } from 'react';
import { CircularProgress } from '@casts/progress';
import '@casts/progress/dist/cjs/index.css';

export default () => {
  const [percent, setPercent] = useState(30);
  return (
    <div className="docs-section">
      <p>
        <button onClick={() => setPercent(percent + 10)}>+10</button>
        <button onClick={() => setPercent(percent - 10)}>-10</button>
      </p>
      <div className="docs-section-item">
        <CircularProgress showLabel={true} percent={percent} />
      </div>
    </div>
  );
};
```

### Custom Text

```tsx
import React from 'react';
import { CircularProgress } from '@casts/progress';
import '@casts/progress/dist/cjs/index.css';

export default () => {
  return (
    <>
      <div className="docs-section">
        <div className="docs-section-item">
          <CircularProgress
            size={100}
            showLabel={true}
            strokeWidth={2}
            percent={75}
            format={(percent?: number) => `${percent}.`}
          />
        </div>
        <div className="docs-section-item">
          <CircularProgress
            size={100}
            showLabel={true}
            strokeWidth={2}
            percent={75}
            format={() => `TEXT`}
          />
        </div>
      </div>
    </>
  );
};
```

<API src="@casts/progress"></API>
