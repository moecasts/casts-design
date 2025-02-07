// @ts-ignore example should import React
import React from 'react';
import { Input } from '@casts/input';
import { Space } from '@casts/space';

const TypeDemo = () => (
  <Space direction="vertical">
    <Input type="password" placeholder="password" />
    <Input type="email" placeholder="email" />
    <Input type="number" placeholder="number" />
  </Space>
);

export default TypeDemo;
