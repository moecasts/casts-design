---
title: Alert
group:
  title: Feedback
nav:
  title: Components
  path: /components
---

# Alert

## Different theme

```tsx
import React from 'react';
import { Alert } from '@casts/alert';
import '@casts/alert/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="info"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="success"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="warning"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="error"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## Fill style

```tsx
import React from 'react';
import { Alert } from '@casts/alert';
import '@casts/alert/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="info"
        title="Alert Title"
        fill
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="success"
        title="Alert Title"
        fill
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="warning"
        title="Alert Title"
        fill
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="error"
        title="Alert Title"
        fill
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## Hide icon

```tsx
import React from 'react';
import { Alert } from '@casts/alert';
import '@casts/alert/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="info"
        icon={false}
        title="Alert Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="success"
        icon={false}
        title="Alert Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="warning"
        icon={false}
        title="Alert Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="error"
        icon={false}
        title="Alert Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## Custom icon

```tsx
import React from 'react';
import { Alert } from '@casts/alert';
import { Home3Fill } from '@casts/icons';
import '@casts/alert/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="info"
        icon={<Home3Fill />}
        title="Alert Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="success"
        icon={<Home3Fill />}
        title="Alert Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="warning"
        icon={<Home3Fill />}
        title="Alert Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="error"
        icon={<Home3Fill />}
        title="Alert Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## Show close button

```tsx
import React from 'react';
import { Alert } from '@casts/alert';
import '@casts/alert/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="info"
        title="Alert Title"
        close
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="success"
        title="Alert Title"
        close
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="warning"
        title="Alert Title"
        close
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="error"
        title="Alert Title"
        close
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## Custom close button

```tsx
import React from 'react';
import { Alert } from '@casts/alert';
import '@casts/alert/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="info"
        title="Alert Title"
        close="关闭"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="success"
        title="Alert Title"
        close="关闭"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="warning"
        title="Alert Title"
        close="关闭"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="error"
        title="Alert Title"
        close="关闭"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## Custom Footer

```tsx
import React, { useState } from 'react';
import { Alert } from '@casts/alert';
import '@casts/alert/dist/cjs/index.css';
import { Button } from '@casts/button';
import '@casts/button/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="info"
        title="Alert Title"
        close={false}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
        footer={
          <>
            <Button theme="info">Confirm</Button>
          </>
        }
      />
    </div>
  </div>
);
```

## Manual control visible

```tsx
import React, { useState } from 'react';
import { Alert } from '@casts/alert';
import '@casts/alert/dist/cjs/index.css';
import { Button } from '@casts/button';
import '@casts/button/dist/cjs/index.css';

export default () => {
  const [visible, setVisible] = useState(true);
  const toggleVisible = () => setVisible(!visible);
  return (
    <div className="docs-section">
      <div className="docs-section-item docs-section-item--block">
        <Button theme="info" onClick={toggleVisible}>
          Toggle Alert Visible
        </Button>
      </div>
      <div className="docs-section-item docs-section-item--block">
        <Alert
          theme="info"
          title="Alert Title"
          close={false}
          visible={visible}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
        />
      </div>
    </div>
  );
};
```

<API src="@casts/alert"></API>
