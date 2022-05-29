---
title: Popup 弹出层
group:
  title: 数据展示
  order: 3
nav:
  title: 组件
  path: /components
---

# Popup 弹出层

## 基础案例

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import '@casts/popup/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Popup
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button>Hover me</Button>
      </Popup>
    </div>
  </div>
);
```

## 不同主题

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import '@casts/popup/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Popup
        theme="light"
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button>light theme</Button>
      </Popup>
    </div>
    <div className="docs-section-item">
      <Popup
        theme="dark"
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button>dard theme</Button>
      </Popup>
    </div>
  </div>
);
```

## 触发方式

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import '@casts/popup/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Popup
        trigger="hover"
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button>hover me</Button>
      </Popup>
    </div>
    <div className="docs-section-item">
      <Popup
        trigger="focus"
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <input placeholder="focus me" />
      </Popup>
    </div>
    <div className="docs-section-item">
      <Popup
        trigger="click"
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button>click me</Button>
      </Popup>
    </div>
  </div>
);
```

### 手动控制

```tsx
import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import '@casts/popup/dist/cjs/index.css';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="docs-section">
      <div className="docs-section-item">
        <Popup
          placement="right"
          visible={visible}
          trigger="manual"
          content={
            <div>
              <span>Popup title</span>
              <br />
              <span>Popup content</span>
            </div>
          }
        >
          <Button onClick={() => setVisible(!visible)}>manual visible</Button>
        </Popup>
      </div>
    </div>
  );
};
```

## 不同方向

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import '@casts/popup/dist/cjs/index.css';

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
        <Popup
          placement="top-start"
          content={
            <div>
              <span>Popup title</span>
              <br />
              <span>Popup content</span>
            </div>
          }
        >
          <Button>top-start</Button>
        </Popup>
      </div>
      <div className="docs-section-item">
        <Popup
          placement="top"
          content={
            <div>
              <span>Popup title</span>
              <br />
              <span>Popup content</span>
            </div>
          }
        >
          <Button>top</Button>
        </Popup>
      </div>
      <div className="docs-section-item">
        <Popup
          placement="top-end"
          content={
            <div>
              <span>Popup title</span>
              <br />
              <span>Popup content</span>
            </div>
          }
        >
          <Button>top-end</Button>
        </Popup>
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
          <Popup
            placement="left-start"
            content={
              <div>
                <span>Popup title</span>
                <br />
                <span>Popup content</span>
                <br />
              </div>
            }
          >
            <Button>left-start</Button>
          </Popup>
        </div>
        <div className="docs-section-item">
          <Popup
            placement="left"
            content={
              <div>
                <span>Popup title</span>
                <br />
                <span>Popup content</span>
                <br />
              </div>
            }
          >
            <Button>left</Button>
          </Popup>
        </div>
        <div className="docs-section-item">
          <Popup
            placement="left-end"
            content={
              <div>
                <span>Popup title</span>
                <br />
                <span>Popup content</span>
                <br />
              </div>
            }
          >
            <Button>left-end</Button>
          </Popup>
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
          <Popup
            placement="right-start"
            content={
              <div>
                <span>Popup title</span>
                <br />
                <span>Popup content</span>
                <br />
              </div>
            }
          >
            <Button>right-start</Button>
          </Popup>
        </div>
        <div className="docs-section-item">
          <Popup
            placement="right"
            content={
              <div>
                <span>Popup title</span>
                <br />
                <span>Popup content</span>
                <br />
              </div>
            }
          >
            <Button>right</Button>
          </Popup>
        </div>
        <div className="docs-section-item">
          <Popup
            placement="right-end"
            content={
              <div>
                <span>Popup title</span>
                <br />
                <span>Popup content</span>
                <br />
              </div>
            }
          >
            <Button>right-end</Button>
          </Popup>
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
        <Popup
          placement="bottom-start"
          content={
            <div>
              <span>Popup title</span>
              <br />
              <span>Popup content</span>
            </div>
          }
        >
          <Button>bottom-start</Button>
        </Popup>
      </div>
      <div className="docs-section-item">
        <Popup
          placement="bottom"
          content={
            <div>
              <span>Popup title</span>
              <br />
              <span>Popup content</span>
            </div>
          }
        >
          <Button>bottom</Button>
        </Popup>
      </div>
      <div className="docs-section-item">
        <Popup
          placement="bottom-end"
          content={
            <div>
              <span>Popup title</span>
              <br />
              <span>Popup content</span>
            </div>
          }
        >
          <Button>bottom-end</Button>
        </Popup>
      </div>
    </div>
  </div>
);
```

## 不显示箭头

```tsx
import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import '@casts/popup/dist/cjs/index.css';

export default () => {
  const [showArrow, setShowArrow] = useState(true);
  return (
    <div className="docs-section">
      <div className="docs-section-item">
        <Popup
          placement="right"
          showArrow={showArrow}
          content={
            <div>
              <span>Popup title</span>
              <br />
              <span>Popup content</span>
            </div>
          }
        >
          <Button onClick={() => setShowArrow(!showArrow)}>
            toggle show arrow
          </Button>
        </Popup>
      </div>
    </div>
  );
};
```

## 禁用弹出层

浮层默认父节点是 body ，可通过 attach 自由调整挂载的父节点元素。

```tsx
import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import '@casts/popup/dist/cjs/index.css';

export default () => {
  return (
    <div className="docs-section">
      <div className="custom-popup-root"></div>
      <div className="docs-section-item">
        <Popup
          placement="right"
          disabled
          content={
            <div>
              <span>Popup title</span>
              <br />
              <span>Popup content</span>
            </div>
          }
          attach=".custom-popup-root"
        >
          <Button>disabled</Button>
        </Popup>
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
import { Popup } from '@casts/popup';
import '@casts/popup/dist/cjs/index.css';

export default () => {
  return (
    <div className="docs-section">
      <div className="custom-popup-root"></div>
      <div className="docs-section-item">
        <Popup
          placement="right"
          content={
            <div>
              <span>Popup title</span>
              <br />
              <span>Popup content</span>
            </div>
          }
          attach=".custom-popup-root"
        >
          <Button>show arrow</Button>
        </Popup>
      </div>
    </div>
  );
};
```

## 内容自适应

```tsx
import React, { useState, useRef } from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import '@casts/popup/dist/cjs/index.css';

export default () => {
  const [visible] = useState(true);
  const [spanvisible, setvisible] = useState(false);
  const [content, setcontent] = useState('这是popup内容');
  const btnClicksRef = useRef(0);

  const toggleContent = () => {
    btnClicksRef.current += 1;
    const showMore = btnClicksRef.current % 2 !== 0;
    setvisible(showMore);
    setcontent(
      `这是popup内容${showMore ? '，又多出来好多好多好多好多....' : ''}`,
    );
  };
  return (
    <div className="docs-section">
      <div className="custom-popup-root"></div>
      <div className="docs-section-item">
        <Popup
          content={content}
          trigger="manual"
          placement="bottom"
          visible={visible}
        >
          <Button onClick={toggleContent}>
            点击改变内容{spanvisible && <span>，再点一下</span>}
          </Button>
        </Popup>
      </div>
    </div>
  );
};
```

## 显示/隐藏回调

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import '@casts/popup/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Popup
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
        onVisibleChange={(visible: boolean) =>
          console.log('visible popup: ', visible)
        }
      >
        <Button>Hover me</Button>
      </Popup>
    </div>
  </div>
);
```

## 延迟显示

只有 `trigger = 'hover'` 时有效。

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import '@casts/popup/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Popup
        delay={100}
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button>Hover me</Button>
      </Popup>
    </div>
  </div>
);
```

## 自定义样式

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import '@casts/popup/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Popup
        theme="dark"
        className="custom-popup-class"
        style={{ backgroundColor: 'var(--color-info)' }}
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button>Hover me</Button>
      </Popup>
    </div>
  </div>
);
```

## 显示时长

只有 `trigger === 'click'` 时有效。

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import '@casts/popup/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Popup
        className="custom-popup-class"
        trigger="click"
        duration={2000}
        content={
          <div>
            <span>auto close after 2000ms</span>
          </div>
        }
      >
        <Button>Click me</Button>
      </Popup>
    </div>
  </div>
);
```

<API src="@casts/popup"></API>
