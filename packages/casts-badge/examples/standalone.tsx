// @ts-ignore example should import React
import React from 'react';
import { Badge } from '@casts/badge';
import { ZzzLine } from '@casts/icons';
import { Space } from '@casts/space';

const StandaloneDemo = () => {
  return (
    <Space direction="vertical">
      <Space>
        <Badge dot />
        <Badge count="5" />
        <Badge count="233" />
        <Badge
          count={
            <ZzzLine
              style={{ fontSize: '16px', color: 'hsl(352.88,80.09%,56.67%)' }}
            />
          }
        />
      </Space>
    </Space>
  );
};

export default StandaloneDemo;
