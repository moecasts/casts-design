import React from 'react';
import { Message } from '@casts/message';
import { Home3Fill } from '@casts/icons';
import { Space } from '@casts/space';

const CustomIconDemo = () => (
  <Space direction="vertical">
    <Message theme="info" icon={<Home3Fill />} content="content" />
    <Message theme="success" icon={<Home3Fill />} content="content" />
    <Message theme="warning" icon={<Home3Fill />} content="content" />
    <Message theme="error" icon={<Home3Fill />} content="content" />
  </Space>
);

export default CustomIconDemo;
