import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';

const CustomStylesDemo = () => (
  <Space wrap>
    <Popup
      theme="dark"
      className="custom-popup-class"
      style={{ backgroundColor: 'hsl(209.17,96.43%,56.08%)' }}
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
export default CustomStylesDemo;
