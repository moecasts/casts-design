import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import '@casts/button/dist/esm/styles.scss';

const DifferentShapeButtonsDemo = () => (
  <Space wrap>
    <Button shape="round">Button</Button>
    <Button shape="square">Button</Button>
    <Button shape="pill">Button</Button>
  </Space>
);

export default DifferentShapeButtonsDemo;
