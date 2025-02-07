// @ts-ignore example should import React
import React from 'react';
import { Message } from '@casts/message';
import { Space } from '@casts/space';

const FillStyleDemo = () => (
  <Space className="zone-scope" direction="vertical">
    <Message theme="loading" fill content="content" />
    <Message theme="info" fill content="content" />
    <Message theme="success" fill content="content" />
    <Message theme="warning" fill content="content" />
    <Message theme="error" fill content="content" />
  </Space>
);

export default FillStyleDemo;
