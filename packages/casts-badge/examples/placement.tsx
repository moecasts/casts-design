// @ts-ignore example should import React
import React from 'react';
import { Avatar } from '@casts/avatar';
import { Badge } from '@casts/badge';
import { Space } from '@casts/space';

const PlacementDemo = () => {
  return (
    <Space direction="vertical">
      <Space>
        <Badge count="233" placement="left-top">
          <Avatar size="large" />
        </Badge>
        <Badge count="233" placement="right-top">
          <Avatar size="large" />
        </Badge>
      </Space>
      <Space>
        <Badge count="233" placement="left-bottom">
          <Avatar size="large" />
        </Badge>
        <Badge count="233" placement="right-bottom">
          <Avatar size="large" />
        </Badge>
      </Space>
    </Space>
  );
};

export default PlacementDemo;
