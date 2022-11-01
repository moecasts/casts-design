import React from 'react';
import { Notification } from '@casts/notification';
import { Space } from '@casts/space';

const HideIconDemo = () => (
  <Space className="zone-scope" direction="vertical">
    <Notification
      theme="info"
      icon={false}
      title="通知标题"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Notification
      theme="success"
      icon={false}
      title="通知标题"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Notification
      theme="warning"
      icon={false}
      title="通知标题"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Notification
      theme="error"
      icon={false}
      title="通知标题"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
  </Space>
);
export default HideIconDemo;
