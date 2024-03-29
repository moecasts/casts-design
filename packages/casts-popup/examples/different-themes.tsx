// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';

const DifferentThemesDemo = () => (
  <Space wrap>
    <Popup
      theme="light"
      content={
        <div>
          <span>Popup title</span>
          <br />
          <span>Popup content</span>
        </div>
      }
    >
      <Button>light theme</Button>
    </Popup>
    <Popup
      theme="dark"
      content={
        <div>
          <span>Popup title</span>
          <br />
          <span>Popup content</span>
        </div>
      }
    >
      <Button>dark theme</Button>
    </Popup>
  </Space>
);
export default DifferentThemesDemo;
