// @ts-ignore example should import React
import React from 'react';
import { Input } from '@casts/input';
import { Space } from '@casts/space';

const InputBorderedDemo = () => (
  <Space direction="vertical">
    <Input bordered placeholder="Please enter something" size="small" />
    <Input bordered placeholder="Please enter something" size="medium" />
    <Input bordered placeholder="Please enter something" size="large" />
  </Space>
);

export default InputBorderedDemo;
