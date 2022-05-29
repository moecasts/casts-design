---
title: Button 按钮
group:
  title: 通用
  order: 1
nav:
  title: 组件
  path: /components
---

# Button 按钮

## 不同变种

```tsx
import React from 'react';
import { Button } from '@casts/button';
import '@casts/button/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Button variant="contained">Button</Button>
    </div>
    <div className="docs-section-item">
      <Button variant="outline">Button</Button>
    </div>
    <div className="docs-section-item">
      <Button variant="dashed">Button</Button>
    </div>
    <div className="docs-section-item">
      <Button variant="text">Button</Button>
    </div>
    <div className="docs-section-item">
      <Button variant="link">Button</Button>
    </div>
  </div>
);
```

## 图标按钮

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { MagicFill } from '@casts/icons';
import '@casts/button/dist/cjs/index.css';

export default () => (
  <>
    <div className="docs-section">
      <div className="docs-section-item">
        <Button variant="contained" icon={<MagicFill />}>
          Button
        </Button>
      </div>
      <div className="docs-section-item">
        <Button variant="outline" icon={<MagicFill />}>
          Button
        </Button>
      </div>
      <div className="docs-section-item">
        <Button variant="dashed" icon={<MagicFill />}>
          Button
        </Button>
      </div>
      <div className="docs-section-item">
        <Button variant="text" icon={<MagicFill />}>
          Button
        </Button>
      </div>
      <div className="docs-section-item">
        <Button variant="link" icon={<MagicFill />}>
          Button
        </Button>
      </div>
    </div>
    <div className="docs-section">
      <div className="docs-section-item">
        <Button variant="contained" icon={<MagicFill />}></Button>
      </div>
      <div className="docs-section-item">
        <Button variant="outline" icon={<MagicFill />}></Button>
      </div>
      <div className="docs-section-item">
        <Button variant="dashed" icon={<MagicFill />}></Button>
      </div>
      <div className="docs-section-item">
        <Button variant="text" icon={<MagicFill />}></Button>
      </div>
      <div className="docs-section-item">
        <Button variant="link" icon={<MagicFill />}></Button>
      </div>
    </div>
  </>
);
```

## 自定义图标

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { MagicFill } from '@casts/icons';
import '@casts/button/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Button variant="contained">
        Button
        <MagicFill style={{ marginLeft: '4px' }} />
      </Button>
    </div>
    <div className="docs-section-item">
      <Button variant="outline">
        Button
        <MagicFill style={{ marginLeft: '4px' }} />
      </Button>
    </div>
    <div className="docs-section-item">
      <Button variant="dashed">
        Button
        <MagicFill style={{ marginLeft: '4px' }} />
      </Button>
    </div>
    <div className="docs-section-item">
      <Button variant="text">
        Button
        <MagicFill style={{ marginLeft: '4px' }} />
      </Button>
    </div>
    <div className="docs-section-item">
      <Button variant="link">
        Button
        <MagicFill style={{ marginLeft: '4px' }} />
      </Button>
    </div>
  </div>
);
```

## Block

```tsx
import React from 'react';
import { Button } from '@casts/button';
import '@casts/button/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Button variant="contained" block>
        Button
      </Button>
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Button variant="outline" block>
        Button
      </Button>
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Button variant="dashed" block>
        Button
      </Button>
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Button variant="text" block>
        Button
      </Button>
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Button variant="link" block>
        Button
      </Button>
    </div>
  </div>
);
```

## 不同尺寸

```tsx
import React from 'react';
import { Button } from '@casts/button';
import '@casts/button/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Button size="small">Button</Button>
    </div>
    <div className="docs-section-item">
      <Button>Button</Button>
    </div>
    <div className="docs-section-item">
      <Button size="large">Button</Button>
    </div>
  </div>
);
```

## 不同颜色

```tsx
import React from 'react';
import { Button } from '@casts/button';
import '@casts/button/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Button color="brand">Button</Button>
    </div>
    <div className="docs-section-item">
      <Button color="secondary">Button</Button>
    </div>
    <div className="docs-section-item">
      <Button color="info">Button</Button>
    </div>
    <div className="docs-section-item">
      <Button color="success">Button</Button>
    </div>
    <div className="docs-section-item">
      <Button color="error">Button</Button>
    </div>
    <div className="docs-section-item">
      <Button color="warning">Button</Button>
    </div>
    <div className="docs-section-item">
      <Button color="black">Button</Button>
    </div>
    <div className="docs-section-item">
      <Button color="white">Button</Button>
    </div>
  </div>
);
```

## 不同形状

```tsx
import React from 'react';
import { Button } from '@casts/button';
import '@casts/button/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Button shape="round">Button</Button>
    </div>
    <div className="docs-section-item">
      <Button shape="square">Button</Button>
    </div>
    <div className="docs-section-item">
      <Button shape="circle">Button</Button>
    </div>
  </div>
);
```

## 禁用

```tsx
import React from 'react';
import { Button } from '@casts/button';
import '@casts/button/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Button disabled variant="contained">
        Button
      </Button>
    </div>
    <div className="docs-section-item">
      <Button disabled variant="outline">
        Button
      </Button>
    </div>
    <div className="docs-section-item">
      <Button disabled variant="dashed">
        Button
      </Button>
    </div>
    <div className="docs-section-item">
      <Button disabled variant="text">
        Button
      </Button>
    </div>
    <div className="docs-section-item">
      <Button disabled variant="link">
        Button
      </Button>
    </div>
  </div>
);
```

## 加载

```tsx
import React, { useState } from 'react';
import { Button } from '@casts/button';
import '@casts/button/dist/cjs/index.css';

export default () => {
  const [loading0, setLoading0] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);
  const setLoadingMap = [
    setLoading0,
    setLoading1,
    setLoading2,
    setLoading3,
    setLoading4,
  ];
  const onClick = (index: number) => {
    setLoadingMap[index](true);
    setTimeout(() => {
      setLoadingMap[index](false);
    }, 2000);
  };
  return (
    <>
      <div className="docs-section">
        <div className="docs-section-item">
          <Button loading variant="contained">
            Button
          </Button>
        </div>
        <div className="docs-section-item">
          <Button loading variant="outline">
            Button
          </Button>
        </div>
        <div className="docs-section-item">
          <Button loading variant="dashed">
            Button
          </Button>
        </div>
        <div className="docs-section-item">
          <Button loading variant="text">
            Button
          </Button>
        </div>
        <div className="docs-section-item">
          <Button loading variant="link">
            Button
          </Button>
        </div>
      </div>
      <div className="docs-section">
        <div className="docs-section-item">
          <Button
            loading={loading0}
            onClick={() => onClick(0)}
            variant="contained"
          >
            Button
          </Button>
        </div>
        <div className="docs-section-item">
          <Button
            loading={loading1}
            onClick={() => onClick(1)}
            variant="outline"
          >
            Button
          </Button>
        </div>
        <div className="docs-section-item">
          <Button
            loading={loading2}
            onClick={() => onClick(2)}
            variant="dashed"
          >
            Button
          </Button>
        </div>
        <div className="docs-section-item">
          <Button loading={loading3} onClick={() => onClick(3)} variant="text">
            Button
          </Button>
        </div>
        <div className="docs-section-item">
          <Button loading={loading4} onClick={() => onClick(4)} variant="link">
            Button
          </Button>
        </div>
      </div>
    </>
  );
};
```

## 按钮组

```tsx
import React from 'react';
import { Button, ButtonGroup } from '@casts/button';
import '@casts/button/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <ButtonGroup variant="outline" shape="round">
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
      </ButtonGroup>
    </div>
    <div className="docs-section-item">
      <ButtonGroup color="error" variant="contained" shape="round">
        <Button shape="round">Button1</Button>
        <Button shape="round">Button2</Button>
        <Button shape="circle">Button3</Button>
      </ButtonGroup>
    </div>
  </div>
);
```

<API src="@casts/button"></API>
