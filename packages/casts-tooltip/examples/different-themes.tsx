import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import { Space } from '@casts/space';

const DifferentThemesDemo = () => (
  <Space wrap>
    <Tooltip
      theme="light"
      content={
        <div>
          <span>Tooltip content</span>
        </div>
      }
    >
      <Button>light theme</Button>
    </Tooltip>
    <Tooltip
      theme="dark"
      content={
        <div>
          <span>Tooltip content</span>
        </div>
      }
    >
      <Button>dark theme</Button>
    </Tooltip>
  </Space>
);
export default DifferentThemesDemo;
