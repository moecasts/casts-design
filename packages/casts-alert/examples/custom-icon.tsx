// @ts-ignore example should import React
import React from 'react';
import { Alert } from '@casts/alert';
import { Home3Fill } from '@casts/icons';
import { Space } from '@casts/space';

const CustomIconDemo = () => (
  <Space
    style={{ display: 'flex' }}
    className="demo-space-alert"
    direction="vertical"
  >
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
