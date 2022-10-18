import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import { Space } from '@casts/space';

const AttachDemo = () => {
  return (
    <Space wrap>
      <div className="custom-tooltip-root"></div>
      <Tooltip
        placement="right"
        content={
          <div>
            <span>Tooltip title</span>
            <br />
            <span>Tooltip content</span>
          </div>
        }
        attach=".custom-tooltip-root"
      >
        <Button>custom attach node</Button>
      </Tooltip>
    </Space>
  );
};
export default AttachDemo;
