// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import { Tooltip } from '@casts/tooltip';

const CustomOverlayOffsetDemo = () => (
  <Space wrap>
    <Tooltip
      overlayOffset={20}
      content={
        <div>
          <span>Tooltip title</span>
          <br />
          <span>Tooltip content</span>
        </div>
      }
    >
      <Button>Hover me</Button>
    </Tooltip>
  </Space>
);
export default CustomOverlayOffsetDemo;
