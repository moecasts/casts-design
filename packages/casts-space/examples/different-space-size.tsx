import React from 'react';
import { Space } from '@casts/space';
import { Button } from '@casts/button';
import '../docs/styles.scss';

const DifferentSpaceSize = () => {
  return (
    <Space direction="vertical" size={'large'}>
      <Space wrap size={'small'}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Space>
      <Space wrap size={'medium'}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Space>
      <Space wrap size={'large'}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Space>
    </Space>
  );
};

export default DifferentSpaceSize;
