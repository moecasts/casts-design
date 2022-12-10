import React from 'react';
import { Input } from '@casts/input';
import { Space } from '@casts/space';
import './styles.scss';

const AutoWidthDemo = () => {
  return (
    <Space direction="vertical" style={{ maxWidth: '210px', width: '100%' }}>
      <Input
        clearable
        defaultValue={'defaultValue'}
        placeholder="Please enter something"
      />
    </Space>
  );
};

export default AutoWidthDemo;
