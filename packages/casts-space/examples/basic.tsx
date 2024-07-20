// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';

import '../docs/styles.scss';

const BasicDemo = () => {
  return (
    <Space>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Space>
  );
};

export default BasicDemo;
