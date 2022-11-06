import React from 'react';
import { Space } from '@casts/space';
import { Badge } from '@casts/badge';
import { Avatar } from '@casts/avatar';

const ColorsDemo = () => {
  return (
    <Space wrap>
      <Badge
        overflowCount={10}
        count={99}
        color="var(--cds-color-shape-info-default)"
      >
        <Avatar size="large" />
      </Badge>
      <Badge
        overflowCount={10}
        count={99}
        color="var(--cds-color-shape-success-default)"
      >
        <Avatar size="large" />
      </Badge>
      <Badge
        overflowCount={10}
        count={99}
        color="var(--cds-color-shape-warning-default)"
      >
        <Avatar size="large" />
      </Badge>
      <Badge
        overflowCount={10}
        count={99}
        color="var(--cds-color-shape-danger-default)"
      >
        <Avatar size="large" />
      </Badge>
      <Badge
        overflowCount={10}
        count={99}
        color="var(--cds-color-shape-neutral-default)"
      >
        <Avatar size="large" />
      </Badge>
    </Space>
  );
};

export default ColorsDemo;
