// @ts-ignore example should import React
import React from 'react';
import { Avatar, AvatarGroup } from '@casts/avatar';
import { User5Line } from '@casts/icons';
import { Space } from '@casts/space';

const GroupDemo = () => {
  return (
    <Space>
      <AvatarGroup size="large" shape="circle">
        <Avatar icon={<User5Line />} />
        <Avatar icon={<User5Line />} size={40} />
        <Avatar>U</Avatar>
        <Avatar size={40}>MOE</Avatar>
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <Avatar src="fake src" icon={<User5Line />}>
          Fallback
        </Avatar>
        <Avatar src="fake src">Fallback</Avatar>
        <Avatar
          style={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
          }}
        >
          U
        </Avatar>
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<User5Line />}
        />
      </AvatarGroup>
    </Space>
  );
};

export default GroupDemo;
