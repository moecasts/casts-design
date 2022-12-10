import React from 'react';
import { Alert } from '@casts/alert';
import { Space } from '@casts/space';
import { Button } from '@casts/button';

const CustomFooterDemo = () => (
  <Space direction="vertical">
    <Alert
      theme="info"
      title="警告提示标题"
      close={false}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      footer={
        <>
          <Button size="small" theme="info">
            Confirm
          </Button>
        </>
      }
    />
  </Space>
);
export default CustomFooterDemo;
