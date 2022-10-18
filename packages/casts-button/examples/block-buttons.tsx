import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import '@casts/button/dist/esm/styles.scss';

const BlockButtonsDemo = () => (
  <Space wrap>
    <Button variant="contained" block>
      Button
    </Button>
    <Button variant="outline" block>
      Button
    </Button>
    <Button variant="dashed" block>
      Button
    </Button>
    <Button variant="text" block>
      Button
    </Button>
    <Button variant="link" block>
      Button
    </Button>
  </Space>
);

export default BlockButtonsDemo;
