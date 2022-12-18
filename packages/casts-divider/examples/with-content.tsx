import React from 'react';
import { Space } from '@casts/space';
import { Divider } from '@casts/divider';
import { DivideFill } from '@casts/icons';

export const DividerWithContentDemo = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Space direction="vertical" size={0} align="start">
        <Divider layout="horizontal" align="start">
          Start Content
        </Divider>
        <Divider layout="horizontal" align="center">
          Center Content
        </Divider>
        <Divider layout="horizontal" align="end">
          End Content
        </Divider>
        <Divider layout="horizontal" align="center">
          <DivideFill /> Divider
        </Divider>
      </Space>
      <Space
        size={0}
        style={{ height: '300px', justifyContent: 'space-around' }}
      >
        <Divider layout="vertical" align="start">
          Start Content
        </Divider>
        <Divider layout="vertical" align="center">
          Center Content
        </Divider>
        <Divider layout="vertical" align="end">
          End Content
        </Divider>
        <Divider layout="vertical" align="center">
          <DivideFill /> Divider
        </Divider>
      </Space>
    </Space>
  );
};

export default DividerWithContentDemo;
