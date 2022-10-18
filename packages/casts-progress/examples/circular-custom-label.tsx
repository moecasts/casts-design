import React from 'react';
import { CircularProgress } from '@casts/progress';
import { Space } from '@casts/space';

const CircularCustomLabelDemo = () => {
  return (
    <Space wrap style={{ display: 'flex' }}>
      <CircularProgress
        size={100}
        showLabel={true}
        strokeWidth={2}
        percent={75}
        format={(percent?: number) => `${percent}.`}
      />
      <CircularProgress
        size={100}
        showLabel={true}
        strokeWidth={2}
        percent={75}
        format={() => 'TEXT'}
      />
    </Space>
  );
};
export default CircularCustomLabelDemo;
