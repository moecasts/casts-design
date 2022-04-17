---
title: Tooltip 文字提示
group:
  title: 数据展示
  order: 2
nav:
  title: 组件
  path: /components
---

# Tooltip 文字提示

## 基础案例

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import '@casts/tooltip/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Tooltip
        content={
          <div>
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  </div>
);
```

## 不同形状

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import '@casts/tooltip/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Tooltip
        shape="square"
        content={
          <div>
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button>square tooltip</Button>
      </Tooltip>
    </div>
    <div className="docs-section-item">
      <Tooltip
        shape="round"
        content={
          <div>
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button>round tooltip</Button>
      </Tooltip>
    </div>
    <div className="docs-section-item">
      <Tooltip
        shape="circle"
        content={
          <div>
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button>circle tooltip</Button>
      </Tooltip>
    </div>
  </div>
);
```

## 不同主题

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import '@casts/tooltip/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Tooltip
        theme="light"
        content={
          <div>
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button>light theme</Button>
      </Tooltip>
    </div>
    <div className="docs-section-item">
      <Tooltip
        theme="dark"
        content={
          <div>
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button>dard theme</Button>
      </Tooltip>
    </div>
  </div>
);
```

## 触发方式

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import '@casts/tooltip/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Tooltip
        trigger="hover"
        content={
          <div>
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button>hover me</Button>
      </Tooltip>
    </div>
    <div className="docs-section-item">
      <Tooltip
        trigger="focus"
        content={
          <div>
            <span>Tooltip content</span>
          </div>
        }
      >
        <input placeholder="focus me" />
      </Tooltip>
    </div>
    <div className="docs-section-item">
      <Tooltip
        trigger="click"
        content={
          <div>
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button>click me</Button>
      </Tooltip>
    </div>
  </div>
);
```

### 手动控制

```tsx
import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import '@casts/tooltip/dist/cjs/index.css';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="docs-section">
      <div className="docs-section-item">
        <Tooltip
          placement="right"
          visible={visible}
          trigger="manual"
          content={
            <div>
              <span>Tooltip title</span>
              <br />
              <span>Tooltip content</span>
            </div>
          }
        >
          <Button onClick={() => setVisible(!visible)}>manual visible</Button>
        </Tooltip>
      </div>
    </div>
  );
};
```

## 不同方向

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import '@casts/tooltip/dist/cjs/index.css';

export default () => (
  <div className="docs-section docs-section--position-around">
    <div
      className="docs-section"
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '531px',
        margin: 'auto',
      }}
    >
      <div className="docs-section-item">
        <Tooltip
          placement="top-start"
          content={
            <div>
              <span>Tooltip title</span>
              <br />
              <span>Tooltip content</span>
            </div>
          }
        >
          <Button>top-start</Button>
        </Tooltip>
      </div>
      <div className="docs-section-item">
        <Tooltip
          placement="top"
          content={
            <div>
              <span>Tooltip title</span>
              <br />
              <span>Tooltip content</span>
            </div>
          }
        >
          <Button>top</Button>
        </Tooltip>
      </div>
      <div className="docs-section-item">
        <Tooltip
          placement="top-end"
          content={
            <div>
              <span>Tooltip title</span>
              <br />
              <span>Tooltip content</span>
            </div>
          }
        >
          <Button>top-end</Button>
        </Tooltip>
      </div>
    </div>
    <div
      className="docs-section"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '520px',
        margin: 'auto',
      }}
    >
      <div
        className="docs-section"
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
        }}
      >
        <div className="docs-section-item">
          <Tooltip
            placement="left-start"
            content={
              <div>
                <span>Tooltip title</span>
                <br />
                <span>Tooltip content</span>
                <br />
              </div>
            }
          >
            <Button>left-start</Button>
          </Tooltip>
        </div>
        <div className="docs-section-item">
          <Tooltip
            placement="left"
            content={
              <div>
                <span>Tooltip title</span>
                <br />
                <span>Tooltip content</span>
                <br />
              </div>
            }
          >
            <Button>left</Button>
          </Tooltip>
        </div>
        <div className="docs-section-item">
          <Tooltip
            placement="left-end"
            content={
              <div>
                <span>Tooltip title</span>
                <br />
                <span>Tooltip content</span>
                <br />
              </div>
            }
          >
            <Button>left-end</Button>
          </Tooltip>
        </div>
      </div>
      <div
        className="docs-section"
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
        }}
      >
        <div className="docs-section-item">
          <Tooltip
            placement="right-start"
            content={
              <div>
                <span>Tooltip title</span>
                <br />
                <span>Tooltip content</span>
                <br />
              </div>
            }
          >
            <Button>right-start</Button>
          </Tooltip>
        </div>
        <div className="docs-section-item">
          <Tooltip
            placement="right"
            content={
              <div>
                <span>Tooltip title</span>
                <br />
                <span>Tooltip content</span>
                <br />
              </div>
            }
          >
            <Button>right</Button>
          </Tooltip>
        </div>
        <div className="docs-section-item">
          <Tooltip
            placement="right-end"
            content={
              <div>
                <span>Tooltip title</span>
                <br />
                <span>Tooltip content</span>
                <br />
              </div>
            }
          >
            <Button>right-end</Button>
          </Tooltip>
        </div>
      </div>
    </div>
    <div
      className="docs-section"
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '531px',
        margin: 'auto',
      }}
    >
      <div className="docs-section-item">
        <Tooltip
          placement="bottom-start"
          content={
            <div>
              <span>Tooltip title</span>
              <br />
              <span>Tooltip content</span>
            </div>
          }
        >
          <Button>bottom-start</Button>
        </Tooltip>
      </div>
      <div className="docs-section-item">
        <Tooltip
          placement="bottom"
          content={
            <div>
              <span>Tooltip title</span>
              <br />
              <span>Tooltip content</span>
            </div>
          }
        >
          <Button>bottom</Button>
        </Tooltip>
      </div>
      <div className="docs-section-item">
        <Tooltip
          placement="bottom-end"
          content={
            <div>
              <span>Tooltip title</span>
              <br />
              <span>Tooltip content</span>
            </div>
          }
        >
          <Button>bottom-end</Button>
        </Tooltip>
      </div>
    </div>
  </div>
);
```

## 不显示箭头

```tsx
import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import '@casts/tooltip/dist/cjs/index.css';

export default () => {
  const [showArrow, setShowArrow] = useState(true);
  return (
    <div className="docs-section">
      <div className="docs-section-item">
        <Tooltip
          placement="right"
          showArrow={showArrow}
          content={
            <div>
              <span>Tooltip title</span>
              <br />
              <span>Tooltip content</span>
            </div>
          }
        >
          <Button onClick={() => setShowArrow(!showArrow)}>
            toggle show arrow
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};
```

## 禁用文字提示

浮层默认父节点是 body ，可通过 attach 自由调整挂载的父节点元素。

```tsx
import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import '@casts/tooltip/dist/cjs/index.css';

export default () => {
  return (
    <div className="docs-section">
      <div className="custom-tooltip-root"></div>
      <div className="docs-section-item">
        <Tooltip
          placement="right"
          disabled
          content={
            <div>
              <span>Tooltip title</span>
              <br />
              <span>Tooltip content</span>
            </div>
          }
          attach=".custom-tooltip-root"
        >
          <Button>disabled</Button>
        </Tooltip>
      </div>
    </div>
  );
};
```

## 挂载父节点

浮层默认父节点是 body ，可通过 attach 自由调整挂载的父节点元素。

```tsx
import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import '@casts/tooltip/dist/cjs/index.css';

export default () => {
  return (
    <div className="docs-section">
      <div className="custom-tooltip-root"></div>
      <div className="docs-section-item">
        <Tooltip
          placement="right"
          content={
            <div>
              <span>Tooltip title</span>
              <br />
              <span>Tooltip content</span>
            </div>
          }
          attach=".custom-tooltip-root"
        >
          <Button>show arrow</Button>
        </Tooltip>
      </div>
    </div>
  );
};
```

## 内容自适应

```tsx
import React, { useState, useRef } from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import '@casts/tooltip/dist/cjs/index.css';

export default () => {
  const [visible] = useState(true);
  const [spanvisible, setvisible] = useState(false);
  const [content, setcontent] = useState('这是tooltip内容');
  const btnClicksRef = useRef(0);

  const toggleContent = () => {
    btnClicksRef.current += 1;
    const showMore = btnClicksRef.current % 2 !== 0;
    setvisible(showMore);
    setcontent(
      `这是tooltip内容${showMore ? '，又多出来好多好多好多好多....' : ''}`,
    );
  };
  return (
    <div className="docs-section">
      <div className="custom-tooltip-root"></div>
      <div className="docs-section-item">
        <Tooltip
          content={content}
          trigger="manual"
          placement="bottom"
          visible={visible}
        >
          <Button onClick={toggleContent}>
            点击改变内容{spanvisible && <span>，再点一下</span>}
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};
```

## 显示/隐藏回调

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import '@casts/tooltip/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Tooltip
        content={
          <div>
            <span>Tooltip content</span>
          </div>
        }
        onVisibleChange={(visible: boolean) =>
          console.log('visible tooltip: ', visible)
        }
      >
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  </div>
);
```

## 延迟显示

只有 `trigger = 'hover'` 时有效。

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import '@casts/tooltip/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Tooltip
        delay={100}
        content={
          <div>
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  </div>
);
```

## 自定义样式

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import '@casts/tooltip/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Tooltip
        theme="dark"
        className="custom-tooltip-class"
        style={{ backgroundColor: 'var(--color-info)' }}
        content={
          <div>
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  </div>
);
```

## 显示时长

只有 `trigger === 'click'` 时有效。

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import '@casts/tooltip/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Tooltip
        className="custom-tooltip-class"
        trigger="click"
        duration={2000}
        content={
          <div>
            <span>auto close after 2000ms</span>
          </div>
        }
      >
        <Button>Click me</Button>
      </Tooltip>
    </div>
  </div>
);
```

<API src="@casts/tooltip"></API>
