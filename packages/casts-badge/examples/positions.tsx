import React from 'react';
import { Space } from '@casts/space';
import { Badge } from '@casts/badge';
import { Avatar } from '@casts/avatar';

const PositionsDemo = () => {
  return (
    <Space direction="vertical">
      <Space>
        <Badge count="233" position="left-top">
          <Avatar size="large" />
        </Badge>
        <Badge count="233" position="right-top">
          <Avatar size="large" />
        </Badge>
      </Space>
      <Space>
        <Badge count="233" position="left-bottom">
          <Avatar size="large" />
        </Badge>
        <Badge count="233" position="right-bottom">
          <Avatar size="large" />
        </Badge>
      </Space>
    </Space>
  );
};

export default PositionsDemo;
