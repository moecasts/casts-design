import React from 'react';
import { Notification } from '@casts/notification';
import { Space } from '@casts/space';
import { Home3Fill } from '@casts/icons';

const CustomIconDemo = () => (
  <Space className="zone-scope" direction="vertical">
    <Notification
      theme="info"
      icon={<Home3Fill />}
      title="通知标题"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Notification
      theme="success"
      icon={<Home3Fill />}
      title="通知标题"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Notification
      theme="warning"
      icon={<Home3Fill />}
      title="通知标题"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Notification
      theme="error"
      icon={<Home3Fill />}
      title="通知标题"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
  </Space>
);
export default CustomIconDemo;
