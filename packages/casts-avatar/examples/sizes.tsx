// @ts-ignore example should import React
import React from 'react';
import { Avatar } from '@casts/avatar';
import { User5Line } from '@casts/icons';
import { Space } from '@casts/space';

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
