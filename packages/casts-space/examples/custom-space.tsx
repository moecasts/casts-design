import React from 'react';
import { Space } from '@casts/space';
import { Button } from '@casts/button';
import '../docs/styles.scss';

const CustomSpaceDemo = () => {
  return (
    <Space direction="vertical" size={'large'}>
      <Space wrap size={40}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Space>

      <Space wrap size={[16, 40]}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Space>

      <Space wrap size={['20px', '5%']}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Space>
    </Space>
  );
};

export default CustomSpaceDemo;
