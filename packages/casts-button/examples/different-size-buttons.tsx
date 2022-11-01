import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import { MagicFill } from '@casts/icons';
import '@casts/button/dist/esm/styles.scss';

const DifferentSizeButtonsDemo = () => (
  <Space direction="vertical">
    <Space wrap>
      <Button size="small">Button</Button>
      <Button size="medium">Button</Button>
      <Button size="large">Button</Button>
    </Space>
    <Space wrap>
      <Button size="small" icon={<MagicFill />}></Button>
      <Button size="medium" icon={<MagicFill />}></Button>
      <Button size="large" icon={<MagicFill />}></Button>
    </Space>
  </Space>
);

export default DifferentSizeButtonsDemo;
