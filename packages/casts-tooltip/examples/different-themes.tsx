// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import { Tooltip } from '@casts/tooltip';

const DifferentThemesDemo = () => (
  <Space wrap>
    <Tooltip
      theme="default"
      content={
        <div>
          <span>Tooltip content</span>
        </div>
      }
    >
      <Button>default theme</Button>
    </Tooltip>
    <Tooltip
      theme="anti"
      content={
        <div>
          <span>Tooltip content</span>
        </div>
      }
    >
      <Button>anti theme</Button>
    </Tooltip>
  </Space>
);
export default DifferentThemesDemo;
