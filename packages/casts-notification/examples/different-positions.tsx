import React from 'react';
import { Button } from '@casts/button';
import { notification } from '@casts/notification';
import { Space } from '@casts/space';

const DifferentPositionsDemo = () => (
  <Space direction="vertical">
    <Space>
      <Button
        theme="info"
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
      <Button
        theme="info"
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
      <Button
        theme="info"
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
    </Space>
    <Space>
      <Button
        theme="info"
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
      <Button
        theme="info"
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
      <Button
        theme="info"
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
    </Space>
    <Space>
      <Button theme="danger" onClick={() => notification.closeAll()}>
        closeAll
      </Button>
    </Space>
  </Space>
);

export default DifferentPositionsDemo;
