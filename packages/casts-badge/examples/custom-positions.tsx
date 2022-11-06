import React from 'react';
import { Space } from '@casts/space';
import { Badge } from '@casts/badge';
import { Avatar } from '@casts/avatar';

const CustomPositionsDemo = () => {
  return (
    <Space direction="vertical">
      <Space>
        <Badge dot position={[-8, 8]}>
          <Avatar size="large" />
        </Badge>

        <Badge dot position={[-8, -8]}>
          <Avatar size="large" />
        </Badge>
      </Space>
    </Space>
  );
};

export default CustomPositionsDemo;
