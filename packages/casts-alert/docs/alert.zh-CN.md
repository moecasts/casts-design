---
title: Alert 警告提示
group:
  title: 反馈
nav:
  title: Components
  path: /components
---

# Alert 警告提示

## 不同主题

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

## 实心样式

```tsx
import React from 'react';
import { Alert } from '@casts/alert';
import '@casts/alert/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="info"
        title="警告提示标题"
        fill
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="success"
        title="警告提示标题"
        fill
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="warning"
        title="警告提示标题"
        fill
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="error"
        title="警告提示标题"
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
import { Alert } from '@casts/alert';
import '@casts/alert/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="info"
        icon={false}
        title="警告提示标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="success"
        icon={false}
        title="警告提示标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="warning"
        icon={false}
        title="警告提示标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="error"
        icon={false}
        title="警告提示标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## 自定义图标

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
        title="警告提示标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="success"
        icon={<Home3Fill />}
        title="警告提示标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="warning"
        icon={<Home3Fill />}
        title="警告提示标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="error"
        icon={<Home3Fill />}
        title="警告提示标题"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## 显示关闭按钮

```tsx
import React from 'react';
import { Alert } from '@casts/alert';
import '@casts/alert/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="info"
        title="警告提示标题"
        close
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="success"
        title="警告提示标题"
        close
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="warning"
        title="警告提示标题"
        close
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="error"
        title="警告提示标题"
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
import { Alert } from '@casts/alert';
import '@casts/alert/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="info"
        title="警告提示标题"
        close="关闭"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="success"
        title="警告提示标题"
        close="关闭"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="warning"
        title="警告提示标题"
        close="关闭"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Alert
        theme="error"
        title="警告提示标题"
        close="关闭"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </div>
  </div>
);
```

## 自定义 Footer

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
        title="警告提示标题"
        close={false}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
        footer={
          <>
            <Button size="small" theme="info">
              Confirm
            </Button>
          </>
        }
      />
    </div>
  </div>
);
```

## 手动控制显示

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
          title="警告提示标题"
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
