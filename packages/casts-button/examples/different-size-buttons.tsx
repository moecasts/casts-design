import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import '@casts/button/dist/esm/styles.scss';

const DifferentSizeButtonsDemo = () => (
  <Space wrap>
    <Button size="small">Button</Button>
    <Button size="medium">Button</Button>
    <Button size="large">Button</Button>
  </Space>
);

export default DifferentSizeButtonsDemo;
