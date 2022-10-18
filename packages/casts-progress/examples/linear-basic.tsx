import React from 'react';
import { LinearProgress } from '@casts/progress';
import { Space } from '@casts/space';

const LinearBasicDemo = () => {
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <LinearProgress />
      <LinearProgress percent={30} />
    </Space>
  );
};
export default LinearBasicDemo;
