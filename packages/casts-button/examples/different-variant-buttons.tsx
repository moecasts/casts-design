// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';

import '@casts/button/dist/esm/styles.scss';

const DifferentVariantButtonsDemo = () => (
  <Space wrap>
    <Button variant="contained">Button</Button>
    <Button variant="outline">Button</Button>
    <Button variant="dashed">Button</Button>
    <Button variant="text">Button</Button>
    <Button variant="link" href="/" target="_blank">
      Button
    </Button>
  </Space>
);

export default DifferentVariantButtonsDemo;
