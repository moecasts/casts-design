import React from 'react';
import { Space } from '@casts/space';
import { Avatar } from '@casts/avatar';
import { User5Line } from '@casts/icons';

const ShapeDemo = () => {
  return (
    <Space align="center" wrap>
      <Avatar icon={<User5Line />} size="large" shape="circle" />
      <Avatar icon={<User5Line />} size="large" shape="round" />
      <Avatar icon={<User5Line />} size="large" shape="square" />
    </Space>
  );
};

export default ShapeDemo;
