import React from 'react';
import { Space } from '@casts/space';
import { Button } from '@casts/button';

const AlignDemo = () => {
  return (
    <Space direction="vertical" size="large">
      <Space align="center">
        <Button size="small">center</Button>
        <Button size="medium">center</Button>
        <Button size="large">center</Button>
      </Space>
      <Space align="start">
        <Button size="small">start</Button>
        <Button size="medium">start</Button>
        <Button size="large">start</Button>
      </Space>
      <Space align="end">
        <Button size="small">end</Button>
        <Button size="medium">end</Button>
        <Button size="large">end</Button>
      </Space>
      <Space align="baseline">
        <Button size="small">baseline</Button>
        <Button size="medium">baseline</Button>
        <Button size="large">baseline</Button>
      </Space>
    </Space>
  );
};

export default AlignDemo;
