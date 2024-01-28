// @ts-ignore example should import React
import React from 'react';
import { Input } from '@casts/input';
import { Space } from '@casts/space';

const DifferentShapeDemo = () => (
  <Space direction="vertical">
    <Input placeholder="Please enter something" shape="square" />
    <Input placeholder="Please enter something" shape="round" />
    <Input placeholder="Please enter something" shape="circle" />
  </Space>
);
export default DifferentShapeDemo;
