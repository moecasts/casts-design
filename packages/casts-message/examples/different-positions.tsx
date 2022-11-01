import React from 'react';
import { Button } from '@casts/button';
import { message } from '@casts/message';
import { Space } from '@casts/space';

const DifferentPositionDemo = () => (
  <Space className="zone-scope" wrap>
    <Button
      theme="info"
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
    <Button
      theme="info"
      onClick={() =>
        message.info('top-center message', { position: 'top-center' })
      }
    >
      top-center
    </Button>
    <Button
      theme="info"
      onClick={() =>
        message.info('top-right message', { position: 'top-right' })
      }
    >
      top-right
    </Button>
    <Button
      theme="info"
      onClick={() =>
        message.info('bottom-left message', { position: 'bottom-left' })
      }
    >
      bottom-left
    </Button>
    <Button
      theme="info"
      onClick={() =>
        message.info('bottom-center message', { position: 'bottom-center' })
      }
    >
      bottom-center
    </Button>
    <Button
      theme="info"
      onClick={() =>
        message.info('bottom-right message', { position: 'bottom-right' })
      }
    >
      bottom-right
    </Button>
    <Button theme="danger" onClick={() => message.closeAll()}>
      closeAll
    </Button>
  </Space>
);

export default DifferentPositionDemo;
