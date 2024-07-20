// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import { Tooltip } from '@casts/tooltip';

const DisabledDemo = () => {
  return (
    <Space wrap>
      <div className="custom-tooltip-root"></div>
      <Tooltip
        placement="right"
        disabled
        content={
          <div>
            <span>Tooltip title</span>
            <br />
            <span>Tooltip content</span>
          </div>
        }
        attach=".custom-tooltip-root"
      >
        <Button>disabled</Button>
      </Tooltip>
    </Space>
  );
};
export default DisabledDemo;
