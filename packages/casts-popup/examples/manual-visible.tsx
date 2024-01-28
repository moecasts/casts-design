// @ts-ignore example should import React
import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';

const ManualVisibleDemo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Space wrap>
      <Popup
        placement="right"
        visible={visible}
        trigger="manual"
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button onClick={() => setVisible(!visible)}>manual visible</Button>
      </Popup>
    </Space>
  );
};
export default ManualVisibleDemo;
