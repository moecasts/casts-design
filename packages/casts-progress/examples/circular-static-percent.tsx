import React from 'react';
import { CircularProgress } from '@casts/progress';
import { Space } from '@casts/space';

const CircularStaticPercentDemo = () => {
  return (
    <Space wrap style={{ display: 'flex' }}>
      <CircularProgress showLabel={true} percent={0} />
      <CircularProgress showLabel={true} percent={50} />
      <CircularProgress showLabel={true} percent={75} />
      <CircularProgress showLabel={true} percent={100} />
    </Space>
  );
};
export default CircularStaticPercentDemo;
