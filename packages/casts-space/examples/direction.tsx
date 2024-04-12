// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';

const DirectionDemo = () => {
  return (
    <Space size="large">
      <Space direction="vertical">
        <Button>vertical</Button>
        <Button>vertical</Button>
        <Button>vertical</Button>
      </Space>
      <Space direction="horizontal">
        <Button>horizontal</Button>
        <Button>horizontal</Button>
        <Button>horizontal</Button>
      </Space>
    </Space>
  );
};

export default DirectionDemo;
