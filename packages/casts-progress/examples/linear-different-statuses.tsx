// @ts-ignore example should import React
import React from 'react';
import { LinearProgress } from '@casts/progress';
import { Space } from '@casts/space';

const LinearDifferentStatusesDemo = () => {
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <LinearProgress percent={30} />
      <LinearProgress percent={60} status="success" />
      <LinearProgress percent={60} status="warning" />
      <LinearProgress percent={60} status="error" />
    </Space>
  );
};
export default LinearDifferentStatusesDemo;
