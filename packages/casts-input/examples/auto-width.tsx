import React from 'react';
import { Input } from '@casts/input';
import { Space } from '@casts/space';

const AutoWidthDemo = () => {
  return (
    <Space direction="vertical" style={{ maxWidth: '100%' }}>
      <Input
        autoWidth
        defaultValue={'defaultValue'}
        placeholder="Please enter something"
      />
    </Space>
  );
};

export default AutoWidthDemo;
