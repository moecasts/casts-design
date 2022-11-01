import React, { useState } from 'react';
import { Input } from '@casts/input';
import { Space } from '@casts/space';

const MaxLengthDemo = () => {
  return (
    <Space direction="vertical">
      <Input maxLength={5} placeholder="Please enter something" />
    </Space>
  );
};

export default MaxLengthDemo;
