// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';

import '@casts/button/dist/esm/styles.scss';

const DisabledButtonsDemo = () => (
  <Space wrap>
    <Button disabled variant="contained">
      Button
    </Button>
    <Button disabled variant="outline">
      Button
    </Button>
    <Button disabled variant="dashed">
      Button
    </Button>
    <Button disabled variant="text">
      Button
    </Button>
    <Button disabled variant="link">
      Button
    </Button>
  </Space>
);

export default DisabledButtonsDemo;
