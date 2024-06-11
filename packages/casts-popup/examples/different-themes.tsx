// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';

const DifferentThemesDemo = () => (
  <Space wrap>
    <Popup
      theme="default"
      content={
        <div>
          <span>Popup title</span>
          <br />
          <span>Popup content</span>
        </div>
      }
    >
      <Button>default theme</Button>
    </Popup>
    <Popup
      theme="anti"
      content={
        <div>
          <span>Popup title</span>
          <br />
          <span>Popup content</span>
        </div>
      }
    >
      <Button>anti theme</Button>
    </Popup>
  </Space>
);
export default DifferentThemesDemo;
