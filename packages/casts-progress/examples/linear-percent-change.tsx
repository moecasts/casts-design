import React, { useState } from 'react';
import { LinearProgress } from '@casts/progress';
import { Space } from '@casts/space';
import { Button } from '@casts/button';

const LinearPercentChangeDemo = () => {
  const [percent, setPercent] = useState(30);
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Space>
        <Button
          size="small"
          onClick={() => setPercent(percent + 10)}
          disabled={percent >= 100}
        >
          +10
        </Button>
        <Button
          size="small"
          onClick={() => setPercent(percent - 10)}
          disabled={percent <= 0}
        >
          -10
        </Button>
      </Space>
      <LinearProgress percent={percent} />
    </Space>
  );
};
export default LinearPercentChangeDemo;
