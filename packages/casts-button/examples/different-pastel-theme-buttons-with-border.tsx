// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';

import '@casts/button/dist/esm/styles.scss';

const DifferentColorButtonsDemo = () => (
  <Space wrap>
    <Button theme="brand" pastel bordered>
      Button
    </Button>
    {/* <Button theme="secondary" pastel bordered>Button</Button> */}
    <Button theme="info" pastel bordered>
      Button
    </Button>
    <Button theme="success" pastel bordered>
      Button
    </Button>
    <Button theme="warning" pastel bordered>
      Button
    </Button>
    <Button theme="danger" pastel bordered>
      Button
    </Button>
    <Button theme="neutral" pastel bordered>
      Button
    </Button>
  </Space>
);

export default DifferentColorButtonsDemo;
