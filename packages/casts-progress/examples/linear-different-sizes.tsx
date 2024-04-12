// @ts-ignore example should import React
import React from 'react';
import { LinearProgress } from '@casts/progress';
import { Space } from '@casts/space';

const LinearDifferentSizeDemo = () => {
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <LinearProgress percent={30} size="small" />
      <LinearProgress percent={30} />
      <LinearProgress percent={30} size="large" />
      <p>自定义大小</p>
      <LinearProgress percent={30} strokeWidth="10px" />
      <LinearProgress percent={30} strokeWidth="20px" />
      <LinearProgress percent={30} strokeWidth="40px" />
    </Space>
  );
};
export default LinearDifferentSizeDemo;
