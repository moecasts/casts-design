// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import { Tooltip } from '@casts/tooltip';

const DurationDemo = () => (
  <Space wrap>
    <Tooltip
      className="custom-tooltip-class"
      trigger="click"
      duration={2000}
      content={
        <div>
          <span>auto close after 2000ms</span>
        </div>
      }
    >
      <Button>Click me</Button>
    </Tooltip>
  </Space>
);
export default DurationDemo;
