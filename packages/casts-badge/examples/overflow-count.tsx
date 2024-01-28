// @ts-ignore example should import React
import React from 'react';
import { Avatar } from '@casts/avatar';
import { Badge } from '@casts/badge';
import { Space } from '@casts/space';

const OverflowCountDemo = () => {
  return (
    <Space wrap>
      <Badge count={1024} overflowCount={99}>
        <Avatar />
      </Badge>
    </Space>
  );
};

export default OverflowCountDemo;
