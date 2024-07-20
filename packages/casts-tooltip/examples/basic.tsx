// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import { Tooltip } from '@casts/tooltip';

import './test.scss';

const BasicDemo = () => (
  <Space wrap>
    <Tooltip content={'Tooltip content'}>
      <Button>Hover me</Button>
    </Tooltip>
  </Space>
);
export default BasicDemo;
