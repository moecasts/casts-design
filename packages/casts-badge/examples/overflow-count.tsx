import React from 'react';
import { Space } from '@casts/space';
import { Badge } from '@casts/badge';
import { Avatar } from '@casts/avatar';

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
