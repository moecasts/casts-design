import React from 'react';
import { Space } from '@casts/space';
import { Button } from '@casts/button';
import { message } from '@casts/message';
// import '@casts/message/dist/cjs/index.css';

const FunctionalDemo = () => (
  <Space wrap>
    <Button theme="info" onClick={() => message.info('info message')}>
      info
    </Button>
    <Button theme="success" onClick={() => message.success('success message')}>
      success
    </Button>
    <Button theme="warning" onClick={() => message.warning('warning message')}>
      warning
    </Button>
    <Button theme="danger" onClick={() => message.error('error message')}>
      error
    </Button>
    <Button
      theme="success"
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
    <Button
      theme="danger"
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
  </Space>
);

export default FunctionalDemo;
