import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import '@casts/button/dist/esm/styles.scss';

const DifferentColorButtonsDemo = () => (
  <Space wrap>
    <Button theme="brand" pastel>
      Button
    </Button>
    {/* <Button theme="secondary" pastel>Button</Button> */}
    <Button theme="info" pastel>
      Button
    </Button>
    <Button theme="success" pastel>
      Button
    </Button>
    <Button theme="warning" pastel>
      Button
    </Button>
    <Button theme="danger" pastel>
      Button
    </Button>
    <Button theme="neutral" pastel>
      Button
    </Button>
  </Space>
);

export default DifferentColorButtonsDemo;
