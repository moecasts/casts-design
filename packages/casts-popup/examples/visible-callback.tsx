import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';

const VisibleCallbackDemo = () => (
  <Space wrap>
    <Popup
      content={
        <div>
          <span>Popup title</span>
          <br />
          <span>Popup content</span>
        </div>
      }
      onVisibleChange={(visible: boolean) =>
        console.log('visible popup: ', visible)
      }
    >
      <Button>Hover me</Button>
    </Popup>
  </Space>
);
export default VisibleCallbackDemo;
