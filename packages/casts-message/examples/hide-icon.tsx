import React from 'react';
import { Message } from '@casts/message';
import { Space } from '@casts/space';

const HideIconDemo = () => (
  <Space direction="vertical">
    <Message theme="loading" fill icon={false} content="content" />
    <Message theme="info" fill icon={false} content="content" />
    <Message theme="success" fill icon={false} content="content" />
    <Message theme="warning" fill icon={false} content="content" />
    <Message theme="error" fill icon={false} content="content" />
  </Space>
);

export default HideIconDemo;
