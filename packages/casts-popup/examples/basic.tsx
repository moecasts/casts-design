// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';

const BasicDemo = () => (
  <Space wrap>
    <Popup
      trigger="click"
      content={
        <div>
          <span>Popup title</span>
          <br />
          <span>Popup content</span>
        </div>
      }
      onVisibleChange={(visible) => {
        console.trace('visible change', visible);
      }}
    >
      <Button>Hover me</Button>
    </Popup>

    <Popup
      visible={true}
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
export default BasicDemo;
