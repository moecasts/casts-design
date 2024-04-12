// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { notification } from '@casts/notification';
import { Space } from '@casts/space';

const DifferentPlacementDemo = () => (
  <Space className="zone-scope" direction="vertical">
    <Space>
      <Button
        theme="info"
        onClick={() =>
          notification.info({
            title: 'Info Title',
            content: 'top-left message',
            placement: 'top-left',
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
            placement: 'top-center',
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
            placement: 'top-right',
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
            placement: 'bottom-left',
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
            placement: 'bottom-center',
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
            placement: 'bottom-right',
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

export default DifferentPlacementDemo;
