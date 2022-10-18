import React from 'react';
import { Alert } from '@casts/alert';
import { Space } from '@casts/space';
import { Home3Fill } from '@casts/icons';

const CustomIconDemo = () => (
  <Space direction="vertical">
    <Alert
      theme="info"
      icon={<Home3Fill />}
      title="警告提示标题"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Alert
      theme="success"
      icon={<Home3Fill />}
      title="警告提示标题"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Alert
      theme="warning"
      icon={<Home3Fill />}
      title="警告提示标题"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Alert
      theme="error"
      icon={<Home3Fill />}
      title="警告提示标题"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
  </Space>
);
export default CustomIconDemo;
