// @ts-ignore example should import React
import React from 'react';
import { CircularProgress } from '@casts/progress';
import { Space } from '@casts/space';

const CircularTrackerDemo = () => {
  return (
    <Space wrap style={{ display: 'flex' }}>
      <CircularProgress />
      <CircularProgress track />
    </Space>
  );
};
export default CircularTrackerDemo;
