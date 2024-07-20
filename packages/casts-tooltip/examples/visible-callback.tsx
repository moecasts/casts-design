// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import { Tooltip } from '@casts/tooltip';

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
