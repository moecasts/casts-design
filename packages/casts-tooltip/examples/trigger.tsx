import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import { Space } from '@casts/space';

const TriggerDemo = () => (
  <Space wrap>
    <Tooltip
      trigger="hover"
      content={
        <div>
          <span>Tooltip content</span>
        </div>
      }
    >
      <Button>hover me</Button>
    </Tooltip>
    <Tooltip
      trigger="focus"
      content={
        <div>
          <span>Tooltip content</span>
        </div>
      }
    >
      <input placeholder="focus me" />
    </Tooltip>
    <Tooltip
      trigger="click"
      content={
        <div>
          <span>Tooltip content</span>
        </div>
      }
    >
      <Button>click me</Button>
    </Tooltip>
  </Space>
);
export default TriggerDemo;
