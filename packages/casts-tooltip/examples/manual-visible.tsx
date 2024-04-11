// @ts-ignore example should import React
import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import { Tooltip } from '@casts/tooltip';

const ManualVisibleDemo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Space wrap>
      <Tooltip
        placement="right"
        visible={visible}
        trigger="manual"
        content={
          <div>
            <span>Tooltip title</span>
            <br />
            <span>Tooltip content</span>
          </div>
        }
      >
        <Button onClick={() => setVisible(!visible)}>manual visible</Button>
      </Tooltip>
    </Space>
  );
};
export default ManualVisibleDemo;
