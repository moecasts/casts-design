import React from 'react';
import { Input } from '@casts/input';
import { Space } from '@casts/space';

const UncontrolledDemo = () => {
  return (
    <Space direction="vertical">
      <Input
        defaultValue={'uncontrolled value'}
        placeholder="Please enter something"
      />
    </Space>
  );
};

export default UncontrolledDemo;
