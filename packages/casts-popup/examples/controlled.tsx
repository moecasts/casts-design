// @ts-ignore example should import React
import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';

const ControlledDemo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Space wrap>
      <Popup
        placement="bottom"
        visible={visible}
        trigger="manual"
        onVisibleChange={(visible) => {
          console.log('visible change', visible);
        }}
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button onClick={() => setVisible(!visible)}>controlled visible</Button>
      </Popup>

      <Popup
        placement="bottom"
        defaultVisible={true}
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
      >
        <Button>default visible</Button>
      </Popup>
    </Space>
  );
};
export default ControlledDemo;
