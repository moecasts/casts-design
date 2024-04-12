// @ts-ignore example should import React
import React from 'react';
import { Avatar } from '@casts/avatar';
import { Badge } from '@casts/badge';
import { ZzzLine } from '@casts/icons';
import { Space } from '@casts/space';

const BasicDemo = () => {
  return (
    <Space wrap>
      <Badge dot>
        <Avatar size="large" />
      </Badge>
      <Badge count="5" color="">
        <Avatar size="large" />
      </Badge>
      <Badge count="233">
        <Avatar size="large" />
      </Badge>
      <Badge
        count={
          <ZzzLine
            style={{ fontSize: '16px', color: 'hsl(352.88,80.09%,56.67%)' }}
          />
        }
      >
        <Avatar size="large" />
      </Badge>
    </Space>
  );
};

export default BasicDemo;
