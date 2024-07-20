// @ts-ignore example should import React
import React from 'react';
import { Home2Fill } from '@casts/icons';
import { LinearProgress } from '@casts/progress';
import { Space } from '@casts/space';

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
