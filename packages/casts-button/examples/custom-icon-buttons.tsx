import React from 'react';
import { Button } from '@casts/button';
import { MagicFill } from '@casts/icons';
import { Space } from '@casts/space';
import '@casts/button/dist/esm/styles.scss';

const CustomIconButtonsDemo = () => (
  <Space wrap>
    <Button variant="contained">
      Button
      <MagicFill style={{ marginLeft: '4px' }} />
    </Button>
    <Button variant="outline">
      Button
      <MagicFill style={{ marginLeft: '4px' }} />
    </Button>
    <Button variant="dashed">
      Button
      <MagicFill style={{ marginLeft: '4px' }} />
    </Button>
    <Button variant="text">
      Button
      <MagicFill style={{ marginLeft: '4px' }} />
    </Button>
    <Button variant="link">
      Button
      <MagicFill style={{ marginLeft: '4px' }} />
    </Button>
  </Space>
);

export default CustomIconButtonsDemo;
