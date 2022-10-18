import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import { Space } from '@casts/space';

const VisibleCallbackDemo = () => (
  <Space wrap>
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
  </Space>
);
export default VisibleCallbackDemo;
