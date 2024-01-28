// @ts-ignore example should import React
import React, { useState } from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';

const VisibleCallbackDemo = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Space wrap>
      <Popup
        visible={visible}
        content={
          <div>
            <span>Popup title</span>
            <br />
            <span>Popup content</span>
          </div>
        }
        onVisibleChange={(visible: boolean) => {
          console.log('visible popup: ', visible);
          setVisible(visible);
        }}
      >
        <Button>Hover me</Button>
      </Popup>
    </Space>
  );
};
export default VisibleCallbackDemo;
