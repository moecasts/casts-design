// @ts-ignore example should import React
import React from 'react';
import { Home3Fill } from '@casts/icons';
import { Message } from '@casts/message';
import { Space } from '@casts/space';

const CustomCloseDemo = () => (
  <Space className="zone-scope" direction="vertical">
    <Message
      theme="info"
      icon={<Home3Fill />}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis. In hac habitasse platea dictumst. Mauris laoreet lobortis enim, quis sollicitudin quam posuere id. Maecenas nibh mauris, dictum nec urna eget, gravida fringilla risus. Curabitur nec volutpat dui. Integer hendrerit lobortis ex, vitae iaculis velit lobortis mollis. Vivamus justo tellus, fermentum consequat leo id, dignissim posuere justo. In ac scelerisque dolor. Morbi eget euismod dolor, in dapibus dolor."
      close={'Close'}
    />
    <Message
      theme="success"
      icon={<Home3Fill />}
      content="content"
      close={'关闭'}
    />
    <Message
      theme="warning"
      icon={<Home3Fill />}
      content="content"
      close={'消す'}
    />
    <Message
      theme="error"
      icon={<Home3Fill />}
      content="content"
      close={'Close'}
    />
  </Space>
);

export default CustomCloseDemo;
