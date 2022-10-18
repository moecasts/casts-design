import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';

const DelayDemo = () => (
  <Space wrap>
    <Popup
      delay={100}
      content={
        <div>
          <span>Popup title</span>
          <br />
          <span>Popup content</span>
        </div>
      }
    >
      <Button>Hover me</Button>
    </Popup>
  </Space>
);
export default DelayDemo;
