// @ts-ignore example should import React
import React from 'react';
import { Badge } from '@casts/badge';
import { ZzzLine } from '@casts/icons';
import { Space } from '@casts/space';

const TextDemo = () => {
  return (
    <Space direction="vertical">
      <Badge text="badge text" dot />
      <Badge text="badge text" count="5" />
      <Badge text="badge text" count="233" />
      <Badge
        text="badge text"
        count={
          <ZzzLine
            style={{ fontSize: '16px', color: 'hsl(352.88,80.09%,56.67%)' }}
          />
        }
      />
    </Space>
  );
};

export default TextDemo;
