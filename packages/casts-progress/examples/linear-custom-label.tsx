import React from 'react';
import { LinearProgress } from '@casts/progress';
import { Space } from '@casts/space';
import { Home2Fill } from '@casts/icons';

const LinearCustomLabelDemo = () => {
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <LinearProgress
        percent={30}
        format={(percent: number) => `${percent}xxx`}
      />
      <LinearProgress
        percent={50}
        format={(percent: number) => (
          <>
            <Home2Fill size="14px" />
            {`${percent}xx`}
          </>
        )}
      />
    </Space>
  );
};
export default LinearCustomLabelDemo;
