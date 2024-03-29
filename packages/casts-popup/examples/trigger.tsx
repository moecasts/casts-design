// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Input } from '@casts/input';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';

const TriggerDemo = () => (
  <Space wrap>
    <Popup
      trigger="hover"
      content={
        <div>
          <span>Popup title</span>
          <br />
          <span>Popup content</span>
        </div>
      }
    >
      <Button>hover me</Button>
    </Popup>
    <Popup
      trigger="focus"
      content={
        <div>
          <span>Popup title</span>
          <br />
          <span>Popup content</span>
        </div>
      }
    >
      <Input placeholder="focus me" style={{ width: '210px' }} />
    </Popup>
    <Popup
      trigger="click"
      content={
        <div>
          <span>Popup title</span>
          <br />
          <span>Popup content</span>
        </div>
      }
    >
      <Button>click me</Button>
    </Popup>
  </Space>
);
export default TriggerDemo;
