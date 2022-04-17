---
title: Message
group:
  title: Feedback
nav:
  title: Components
  path: /components
---

# Message

## Functional trigger

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { message } from '@casts/message';
import '@casts/message/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Button color="info" onClick={() => message.info('info message')}>
        info
      </Button>
    </div>
    <div className="docs-section-item">
      <Button
        color="success"
        onClick={() => message.success('success message')}
      >
        success
      </Button>
    </div>
    <div className="docs-section-item">
      <Button
        color="warning"
        onClick={() => message.warning('warning message')}
      >
        warning
      </Button>
    </div>
    <div className="docs-section-item">
      <Button color="error" onClick={() => message.error('error message')}>
        error
      </Button>
    </div>
    <div className="docs-section-item">
      <Button
        color="success"
        onClick={() =>
          message.promise(
            new Promise((resolve) =>
              setTimeout(() => {
                resolve(true);
              }, 1500),
            ),
            {
              loading: 'loading message',
              success: 'success message',
              error: 'error message',
            },
          )
        }
      >
        promise success
      </Button>
    </div>
    <div className="docs-section-item">
      <Button
        color="error"
        onClick={() =>
          message.promise(
            new Promise((_, reject) =>
              setTimeout(() => {
                reject(true);
              }, 1500),
            ),
            {
              loading: 'loading message',
              success: 'success message',
              error: 'error message',
            },
          )
        }
      >
        promise error
      </Button>
    </div>
  </div>
);
```

## Different position

```tsx
import React from 'react';
import { Button } from '@casts/button';
import { message } from '@casts/message';
import '@casts/message/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item">
      <Button
        color="info"
        onClick={() =>
          message.info('top-left message', {
            position: 'top-left',
            duration: 1000,
            close: true,
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
          message.info('top-center message', { position: 'top-center' })
        }
      >
        top-center
      </Button>
    </div>
    <div className="docs-section-item">
      <Button
        color="info"
        onClick={() =>
          message.info('top-right message', { position: 'top-right' })
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
          message.info('bottom-left message', { position: 'bottom-left' })
        }
      >
        bottom-left
      </Button>
    </div>
    <div className="docs-section-item">
      <Button
        color="info"
        onClick={() =>
          message.info('bottom-center message', { position: 'bottom-center' })
        }
      >
        bottom-center
      </Button>
    </div>
    <div className="docs-section-item">
      <Button
        color="info"
        onClick={() =>
          message.info('bottom-right message', { position: 'bottom-right' })
        }
      >
        bottom-right
      </Button>
    </div>
    <br />
    <div className="docs-section-item">
      <Button color="error" onClick={() => message.closeAll()}>
        closeAll
      </Button>
    </div>
  </div>
);
```

## Different theme

```tsx
import React from 'react';
import { Message } from '@casts/message';
import '@casts/message/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Message theme="loading" content="content" />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message theme="info" content="content" />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message theme="success" content="content" />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message theme="warning" content="content" />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message theme="error" content="content" />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message theme="error" content="content" />
    </div>
  </div>
);
```

## Fill style

```tsx
import React from 'react';
import { Message } from '@casts/message';
import '@casts/message/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Message theme="loading" fill content="content" />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message theme="info" fill content="content" />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message theme="success" fill content="content" />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message theme="warning" fill content="content" />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message theme="error" fill content="content" />
    </div>
  </div>
);
```

## Hide icon

```tsx
import React from 'react';
import { Message } from '@casts/message';
import '@casts/message/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Message theme="info" icon={false} content="content" />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message theme="success" icon={false} content="content" />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message theme="warning" icon={false} content="content" />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message theme="error" icon={false} content="content" />
    </div>
  </div>
);
```

## Custom icon

```tsx
import React from 'react';
import { Message } from '@casts/message';
import { Home3Fill } from '@casts/icons';
import '@casts/message/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Message theme="info" icon={<Home3Fill />} content="content" />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message theme="success" icon={<Home3Fill />} content="content" />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message theme="warning" icon={<Home3Fill />} content="content" />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message theme="error" icon={<Home3Fill />} content="content" />
    </div>
  </div>
);
```

## Show close button

```tsx
import React from 'react';
import { Message } from '@casts/message';
import { Home3Fill } from '@casts/icons';
import '@casts/message/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Message
        theme="info"
        icon={<Home3Fill />}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis. In hac habitasse platea dictumst. Mauris laoreet lobortis enim, quis sollicitudin quam posuere id. Maecenas nibh mauris, dictum nec urna eget, gravida fringilla risus. Curabitur nec volutpat dui. Integer hendrerit lobortis ex, vitae iaculis velit lobortis mollis. Vivamus justo tellus, fermentum consequat leo id, dignissim posuere justo. In ac scelerisque dolor. Morbi eget euismod dolor, in dapibus dolor."
        close={true}
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message
        theme="success"
        icon={<Home3Fill />}
        content="content"
        close={true}
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message
        theme="warning"
        icon={<Home3Fill />}
        content="content"
        close={true}
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message
        theme="error"
        icon={<Home3Fill />}
        content="content"
        close={true}
      />
    </div>
  </div>
);
```

## Custom close button

```tsx
import React from 'react';
import { Message } from '@casts/message';
import { Home3Fill } from '@casts/icons';
import '@casts/message/dist/cjs/index.css';

export default () => (
  <div className="docs-section">
    <div className="docs-section-item docs-section-item--block">
      <Message
        theme="info"
        icon={<Home3Fill />}
        content="content"
        close={'Close'}
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message
        theme="success"
        icon={<Home3Fill />}
        content="content"
        close={'Close'}
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message
        theme="warning"
        icon={<Home3Fill />}
        content="content"
        close={'Close'}
      />
    </div>
    <div className="docs-section-item docs-section-item--block">
      <Message
        theme="error"
        icon={<Home3Fill />}
        content="content"
        close={'Close'}
      />
    </div>
  </div>
);
```

<API src="@casts/message"></API>
