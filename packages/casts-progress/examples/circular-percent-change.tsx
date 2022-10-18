import React, { useState } from 'react';
import { CircularProgress } from '@casts/progress';
import { Space } from '@casts/space';
import { Button } from '@casts/button';

const CircularCustomLabelDemo = () => {
  const [percent, setPercent] = useState(30);
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Space>
        <Button size="small" onClick={() => setPercent(percent + 10)}>
          +10
        </Button>
        <Button size="small" onClick={() => setPercent(percent - 10)}>
          -10
        </Button>
      </Space>
      <CircularProgress showLabel={true} percent={percent} />
    </Space>
  );
};

export default CircularCustomLabelDemo;
