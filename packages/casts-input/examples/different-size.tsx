// @ts-ignore example should import React
import React from 'react';
import { Input } from '@casts/input';
import { Space } from '@casts/space';

const DifferentSizeDemo = () => (
  <Space direction="vertical">
    <Input placeholder="Please enter something" size="small" />
    <Input placeholder="Please enter something" size="medium" />
    <Input placeholder="Please enter something" size="large" />
  </Space>
);

export default DifferentSizeDemo;
