// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Input } from '@casts/input';
import { Space } from '@casts/space';
import { Tooltip } from '@casts/tooltip';

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
      <Input placeholder="focus me" style={{ width: '210px' }} />
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
