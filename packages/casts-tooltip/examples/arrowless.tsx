// @ts-ignore example should import React
import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import { Tooltip } from '@casts/tooltip';

const ArrowlessDemo = () => {
  const [showArrow, setShowArrow] = useState(true);
  return (
    <Space wrap>
      <Tooltip
        placement="right"
        showArrow={showArrow}
        content={
          <div>
            <span>Tooltip title</span>
            <br />
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button onClick={() => setShowArrow(!showArrow)}>
          toggle show arrow
        </Button>
      </Tooltip>
    </Space>
  );
};
export default ArrowlessDemo;
