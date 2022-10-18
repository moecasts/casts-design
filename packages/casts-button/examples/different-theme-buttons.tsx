import React from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import '@casts/button/dist/esm/styles.scss';

const DifferentColorButtonsDemo = () => (
  <Space wrap>
    <Button theme="brand">Button</Button>
    <Button theme="secondary">Button</Button>
    <Button theme="info">Button</Button>
    <Button theme="success">Button</Button>
    <Button theme="warning">Button</Button>
    <Button theme="danger">Button</Button>
    <Button theme="black">Button</Button>
    <Button theme="white">Button</Button>
  </Space>
);

export default DifferentColorButtonsDemo;
