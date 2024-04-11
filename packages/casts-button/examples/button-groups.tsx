// @ts-ignore example should import React
import React from 'react';
import { Button, ButtonGroup } from '@casts/button';
import { Space } from '@casts/space';

import '@casts/button/dist/esm/styles.scss';

const ButtonGroupsDemo = () => (
  <Space direction="vertical">
    <Space wrap>
      <ButtonGroup variant="outline" shape="round">
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
      </ButtonGroup>
    </Space>
    <Space wrap>
      <ButtonGroup theme="danger" variant="contained" shape="round">
        <Button shape="round">Button1</Button>
        <Button shape="round">Button2</Button>
        <Button shape="pill">Button3</Button>
      </ButtonGroup>
    </Space>
  </Space>
);

export default ButtonGroupsDemo;
