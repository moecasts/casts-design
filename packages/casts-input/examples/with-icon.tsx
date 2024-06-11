// @ts-ignore example should import React
import React from 'react';
import { Home3Fill, Key2Fill } from '@casts/icons';
import { Input } from '@casts/input';
import { Space } from '@casts/space';

const WithIconDemo = () => (
  <Space direction="vertical">
    <Input
      size="small"
      placeholder="Please enter something"
      prefix={<Home3Fill />}
      suffix={<Key2Fill />}
    />
    <Input
      size="medium"
      placeholder="Please enter something"
      prefix={<Home3Fill />}
      suffix={<Key2Fill />}
    />
    <Input
      size="large"
      placeholder="Please enter something"
      prefix={<Home3Fill />}
      suffix={<Key2Fill />}
    />
  </Space>
);

export default WithIconDemo;
