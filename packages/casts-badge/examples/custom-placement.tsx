// @ts-ignore example should import React
import React from 'react';
import { Avatar } from '@casts/avatar';
import { Badge } from '@casts/badge';
import { Space } from '@casts/space';

const CustomPlacementsDemo = () => {
  return (
    <Space direction="vertical">
      <Space>
        <Badge dot placement={[-8, 8]}>
          <Avatar size="large" />
        </Badge>

        <Badge dot placement={[-8, -8]}>
          <Avatar size="large" />
        </Badge>
      </Space>
    </Space>
  );
};

export default CustomPlacementsDemo;
