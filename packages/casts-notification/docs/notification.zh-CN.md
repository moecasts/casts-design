---
title: Notification 通知
group:
  title: 反馈
nav:
  title: Components
  path: /components
---

# Notification 通知

## 函数式触发

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

## 不同位置弹出

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

## 不同主题

```tsx
import React from 'react';
import { Notification } from '@casts/notification';
import '@casts/notification/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="info"
        title="通知标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="success"
        title="通知标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="warning"
        title="通知标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="error"
        title="通知标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## 实心样式

```tsx
import React from 'react';
import { Notification } from '@casts/notification';
import '@casts/notification/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="info"
        title="通知标题"
        fill
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="success"
        title="通知标题"
        fill
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="warning"
        title="通知标题"
        fill
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="error"
        title="通知标题"
        fill
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## 隐藏图标

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
        title="通知标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="success"
        icon={false}
        title="通知标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="warning"
        icon={false}
        title="通知标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="error"
        icon={false}
        title="通知标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## 自定义图标

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
        title="通知标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="success"
        icon={<Home3Fill />}
        title="通知标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="warning"
        icon={<Home3Fill />}
        title="通知标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="error"
        icon={<Home3Fill />}
        title="通知标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## 显示关闭按钮

```tsx
import React from 'react';
import { Notification } from '@casts/notification';
import '@casts/notification/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="info"
        title="通知标题"
        close
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="success"
        title="通知标题"
        close
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="warning"
        title="通知标题"
        close
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="error"
        title="通知标题"
        close
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## 自定义关闭按钮

```tsx
import React from 'react';
import { Notification } from '@casts/notification';
import '@casts/notification/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="info"
        title="通知标题"
        close="关闭"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="success"
        title="通知标题"
        close="关闭"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="warning"
        title="通知标题"
        close="关闭"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Notification
        theme="error"
        title="通知标题"
        close="关闭"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

<API src="@casts/notification"></API>
