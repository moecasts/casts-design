import React from 'react';
import { Space } from '@casts/space';
import { Divider } from '@casts/divider';

export const DividerBasicDemo = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Space size={0} align="center">
        <span>Left</span>
        <Divider layout="vertical" />
        <span>Center</span>
        <Divider layout="vertical" />
        <span>Right</span>
      </Space>
      <Space direction="vertical" size={0} align="start">
        <span>Left</span>
        <Divider layout="horizontal" />
        <span>Center</span>
        <Divider layout="horizontal" />
        <span>Right</span>
      </Space>
    </Space>
  );
};

export default DividerBasicDemo;
