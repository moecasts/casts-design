import React from 'react';
import { Space } from '@casts/space';
import { Avatar } from '@casts/avatar';
import { User5Line } from '@casts/icons';

const SizesDemo = () => {
  return (
    <Space align="center" wrap>
      <Avatar icon={<User5Line />} size="small" />
      <Avatar icon={<User5Line />} size="medium" />
      <Avatar icon={<User5Line />} size="large" />
      <Avatar icon={<User5Line />} size={80} />
    </Space>
  );
};

export default SizesDemo;
