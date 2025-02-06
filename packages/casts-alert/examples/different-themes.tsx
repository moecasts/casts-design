// @ts-ignore example should import React
import React from 'react';
import { Alert } from '@casts/alert';
import { Space } from '@casts/space';

const DifferentThemesDemo = () => (
  <Space
    style={{ display: 'flex' }}
    className="demo-space-alert"
    direction="vertical"
  >
    <Alert
      theme="info"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Alert
      theme="success"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Alert
      theme="warning"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
    <Alert
      theme="error"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
    />
  </Space>
);
export default DifferentThemesDemo;
