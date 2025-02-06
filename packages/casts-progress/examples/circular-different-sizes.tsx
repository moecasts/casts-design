// @ts-ignore example should import React
import React from 'react';
import { CircularProgress } from '@casts/progress';
import { Space } from '@casts/space';

const CircularDifferentSizesDemo = () => {
  return (
    <Space wrap style={{ display: 'flex' }}>
      <CircularProgress size={24} />
      <CircularProgress />
      <CircularProgress strokeWidth={6} />
    </Space>
  );
};
export default CircularDifferentSizesDemo;
