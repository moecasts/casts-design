---
title: Notification
group:
  title: Feedback
nav:
  title: Components
  path: /components
---

# Notification

## Functional trigger

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { notification } from '@casts/notification';
import '@casts/notification/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Button
        color="info"
        onClick={() =>
          notification.info({
            title: 'Info Title',
            content: 'info notification',
          })
        }
      >
        info
      </Button>
    </div>
    <div className="docs-section-item">
      <Button
        color="success"
        onClick={() =>
          notification.success({
            title: 'Success Title',
            content: 'success notification',
          })
        }
      >
        success
      </Button>
    </div>
    <div className="docs-section-item">
      <Button
        color="warning"
        onClick={() =>
          notification.warning({
            title: 'Warning Title',
            content: 'warning notification',
          })
        }
      >
        warning
      </Button>
    </div>
    <div className="docs-section-item">
      <Button
        color="error"
        onClick={() =>
          notification.error({
            title: 'Error Title',
            content: 'error notification',
          })
        }
      >
        error
      </Button>
    </div>
  </div>
);
```

## Different position

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { notification } from '@casts/notification';
import '@casts/message/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Button
        color="info"
        onClick={() =>
          notification.info({
            title: 'Info Title',
            content: 'top-left message',
            position: 'top-left',
          })
        }
      >
        top-left
      </Button>
    </div>
    <div className="docs-section-item">
      <Button
        color="info"
        onClick={() =>
          notification.info({
            title: 'Info Title',
            content: 'top-center message',
            position: 'top-center',
          })
        }
      >
        top-center
      </Button>
    </div>
    <div className="docs-section-item">
      <Button
        color="info"
        onClick={() =>
          notification.info({
            title: 'Info Title',
            content: 'top-right message',
            position: 'top-right',
          })
        }
      >
        top-right
      </Button>
    </div>
    <br />
    <div className="docs-section-item">
      <Button
        color="info"
        onClick={() =>
          notification.info({
            title: 'Info Title',
            content: 'bottom-left message',
            position: 'bottom-left',
          })
        }
      >
        bottom-left
      </Button>
    </div>
    <div className="docs-section-item">
      <Button
        color="info"
        onClick={() =>
          notification.info({
            title: 'Info Title',
            content: 'bottom-center message',
            position: 'bottom-center',
          })
        }
      >
        bottom-center
      </Button>
    </div>
    <div className="docs-section-item">
      <Button
        color="info"
        onClick={() =>
          notification.info({
            title: 'Info Title',
            content: 'bottom-right message',
            position: 'bottom-right',
          })
        }
      >
        bottom-right
      </Button>
    </div>
    <br />
    <div className="docs-section-item">
      <Button color="error" onClick={() => notification.closeAll()}>
        closeAll
      </Button>
    </div>
  </div>
);
```

## Different theme

```tsx
import React from 'react';
import { Notification } from '@casts/notification';
import '@casts/notification/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="info"
        title="Notification Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="success"
        title="Notification Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="warning"
        title="Notification Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="error"
        title="Notification Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## Fill style

```tsx
import React from 'react';
import { Notification } from '@casts/notification';
import '@casts/notification/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="info"
        title="Notification Title"
        fill
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="success"
        title="Notification Title"
        fill
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="warning"
        title="Notification Title"
        fill
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="error"
        title="Notification Title"
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
import { Notification } from '@casts/notification';
import '@casts/notification/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="info"
        icon={false}
        title="Notification Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="success"
        icon={false}
        title="Notification Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="warning"
        icon={false}
        title="Notification Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="error"
        icon={false}
        title="Notification Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## Custom icon

```tsx
import React from 'react';
import { Notification } from '@casts/notification';
import { Home3Fill } from '@casts/icons';
import '@casts/notification/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="info"
        icon={<Home3Fill />}
        title="Notification Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="success"
        icon={<Home3Fill />}
        title="Notification Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="warning"
        icon={<Home3Fill />}
        title="Notification Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="error"
        icon={<Home3Fill />}
        title="Notification Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## Show close button

```tsx
import React from 'react';
import { Notification } from '@casts/notification';
import '@casts/notification/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="info"
        title="Notification Title"
        close
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="success"
        title="Notification Title"
        close
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="warning"
        title="Notification Title"
        close
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="error"
        title="Notification Title"
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
import { Notification } from '@casts/notification';
import '@casts/notification/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="info"
        title="Notification Title"
        close="Close"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="success"
        title="Notification Title"
        close="Close"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="warning"
        title="Notification Title"
        close="Close"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="error"
        title="Notification Title"
        close="Close"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

<API src="@casts/notification"></API>
