import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import { Space } from '@casts/space';

const DelayDemo = () => (
  <Space wrap>
    <Tooltip
      delay={100}
      content={
        <div>
          <span>Tooltip content</span>
        </div>
      }
    >
      <Button>Hover me</Button>
    </Tooltip>
  </Space>
);
export default DelayDemo;
