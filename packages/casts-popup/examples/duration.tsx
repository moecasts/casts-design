// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';

const DurationDemo = () => (
  <Space wrap>
    <Popup
      className="custom-popup-class"
      trigger="click"
      duration={2000}
      content={
        <div>
          <span>auto close after 2000ms</span>
        </div>
      }
    >
      <Button>Click me</Button>
    </Popup>
  </Space>
);
export default DurationDemo;
