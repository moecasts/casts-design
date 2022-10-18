import React, { useState } from 'react';
import { Alert } from '@casts/alert';
import { Space } from '@casts/space';
import { Button } from '@casts/button';

const VisibleDemo = () => {
  const [visible, setVisible] = useState(true);
  const toggleVisible = () => setVisible(!visible);
  return (
    <Space direction="vertical">
      <div>
        <Button theme="info" onClick={toggleVisible}>
          Toggle Alert Visible
        </Button>
      </div>
      <Alert
        theme="info"
        title="警告提示标题"
        close={false}
        visible={visible}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis."
      />
    </Space>
  );
};
export default VisibleDemo;
