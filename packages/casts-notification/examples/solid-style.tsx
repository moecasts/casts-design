// @ts-ignore example should import React
import React from 'react';
import { Notification } from '@casts/notification';
import { Space } from '@casts/space';

const SolidStyleDemo = () => (
  <Space className="zone-scope" direction="vertical">
    <Notification
      theme="info"
      title="通知标题"
      solid
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Notification
      theme="success"
      title="通知标题"
      solid
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Notification
      theme="warning"
      title="通知标题"
      solid
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Notification
      theme="error"
      title="通知标题"
      solid
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
  </Space>
);
export default SolidStyleDemo;
