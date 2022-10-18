import React from 'react';
import { Button } from '@casts/button';
import { MagicFill } from '@casts/icons';
import { Space } from '@casts/space';
import '@casts/button/dist/esm/styles.scss';

const IconButtonsDemo = () => (
  <Space direction="vertical" size={40}>
    <Space wrap>
      <Button variant="contained" icon={<MagicFill />}>
        Button
      </Button>
      <Button variant="outline" icon={<MagicFill />}>
        Button
      </Button>
      <Button variant="dashed" icon={<MagicFill />}>
        Button
      </Button>
      <Button variant="text" icon={<MagicFill />}>
        Button
      </Button>
      <Button variant="link" icon={<MagicFill />}>
        Button
      </Button>
    </Space>
    <Space wrap>
      <Button variant="contained" icon={<MagicFill />}></Button>
      <Button variant="outline" icon={<MagicFill />}></Button>
      <Button variant="dashed" icon={<MagicFill />}></Button>
      <Button variant="text" icon={<MagicFill />}></Button>
      <Button variant="link" icon={<MagicFill />}></Button>
    </Space>
  </Space>
);

export default IconButtonsDemo;
