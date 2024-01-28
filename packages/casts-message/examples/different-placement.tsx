// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { message } from '@casts/message';
import { Space } from '@casts/space';

const DifferentPlacementDemo = () => (
  <Space className="zone-scope" wrap>
    <Button
      theme="info"
      onClick={() =>
        message.info('top-left message', {
          placement: 'top-left',
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
        message.info('top-center message', { placement: 'top-center' })
      }
    >
      top-center
    </Button>
    <Button
      theme="info"
      onClick={() =>
        message.info('top-right message', { placement: 'top-right' })
      }
    >
      top-right
    </Button>
    <Button
      theme="info"
      onClick={() =>
        message.info('bottom-left message', { placement: 'bottom-left' })
      }
    >
      bottom-left
    </Button>
    <Button
      theme="info"
      onClick={() =>
        message.info('bottom-center message', { placement: 'bottom-center' })
      }
    >
      bottom-center
    </Button>
    <Button
      theme="info"
      onClick={() =>
        message.info('bottom-right message', { placement: 'bottom-right' })
      }
    >
      bottom-right
    </Button>
    <Button theme="danger" onClick={() => message.closeAll()}>
      closeAll
    </Button>
  </Space>
);

export default DifferentPlacementDemo;
