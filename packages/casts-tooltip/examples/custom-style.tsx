import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import { Space } from '@casts/space';

const CustomStyleDemo = () => (
  <Space wrap>
    <Tooltip
      theme="dark"
      className="custom-tooltip-class"
      style={{ backgroundColor: 'hsl(209.17,96.43%,56.08%)' }}
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
export default CustomStyleDemo;
