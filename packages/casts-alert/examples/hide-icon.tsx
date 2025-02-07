// @ts-ignore example should import React
import React from 'react';
import { Alert } from '@casts/alert';
import { Space } from '@casts/space';

const HideIconDemo = () => (
  <Space
    style={{ display: 'flex' }}
    className="demo-space-alert"
    direction="vertical"
  >
    <Alert
      theme="info"
      icon={false}
      title="警告提示标题"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Alert
      theme="success"
      icon={false}
      title="警告提示标题"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Alert
      theme="warning"
      icon={false}
      title="警告提示标题"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Alert
      theme="error"
      icon={false}
      title="警告提示标题"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
  </Space>
);
export default HideIconDemo;
