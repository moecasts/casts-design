import React from 'react';
import { LinearProgress } from '@casts/progress';
import { Space } from '@casts/space';

const LinearDifferentColorDemo = () => {
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <LinearProgress percent={30} color="red" />
      <LinearProgress percent={50} color="red" trackColor="pink" />
    </Space>
  );
};
export default LinearDifferentColorDemo;
