import React from 'react';
import { Alert } from '@casts/alert';
import { Space } from '@casts/space';

const FillStyleDemo = () => (
  <Space direction="vertical">
    <Alert
      theme="info"
      title="警告提示标题"
      fill
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Alert
      theme="success"
      title="警告提示标题"
      fill
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Alert
      theme="warning"
      title="警告提示标题"
      fill
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Alert
      theme="error"
      title="警告提示标题"
      fill
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
  </Space>
);
export default FillStyleDemo;