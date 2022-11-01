import React from 'react';
import { Input } from '@casts/input';
import { Space } from '@casts/space';

const TipsDemo = () => (
  <Space direction="vertical">
    <Input placeholder="Please enter something" tips="this is a tips" />
  </Space>
);

export default TipsDemo;
