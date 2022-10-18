import React from 'react';
import { Message } from '@casts/message';
import { Space } from '@casts/space';

const DifferentThemesDemo = () => (
  <Space wrap direction="vertical">
    <Message theme="loading" content="content" />
    <Message theme="info" content="content" />
    <Message theme="success" content="content" />
    <Message theme="warning" content="content" />
    <Message theme="error" content="content" />
  </Space>
);

export default DifferentThemesDemo;
