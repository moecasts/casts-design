// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import { Tooltip } from '@casts/tooltip';

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
