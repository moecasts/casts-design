// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { notification } from '@casts/notification';
import { Space } from '@casts/space';

const FunctionalDemo = () => (
  <Space className="zone-scope" wrap>
    <Button
      theme="info"
      onClick={() =>
        notification.info({
          title: 'Info Title',
          content: 'info notification',
        })
      }
    >
      info
    </Button>
    <Button
      theme="success"
      onClick={() =>
        notification.success({
          title: 'Success Title',
          content: 'success notification',
        })
      }
    >
      success
    </Button>
    <Button
      theme="warning"
      onClick={() =>
        notification.warning({
          title: 'Warning Title',
          content: 'warning notification',
        })
      }
    >
      warning
    </Button>
    <Button
      theme="danger"
      onClick={() =>
        notification.error({
          title: 'Error Title',
          content: 'error notification',
        })
      }
    >
      error
    </Button>
  </Space>
);

export default FunctionalDemo;
