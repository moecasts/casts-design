import React from 'react';
import { Button } from '@casts/button';
import { Tooltip } from '@casts/tooltip';
import { Space } from '@casts/space';

const BasicDemo = () => (
  <Space wrap>
    <Tooltip content={'Tooltip content'}>
      <Button>Hover me</Button>
    </Tooltip>
  </Space>
);
export default BasicDemo;
