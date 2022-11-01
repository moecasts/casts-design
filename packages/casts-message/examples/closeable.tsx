import React from 'react';
import { Message } from '@casts/message';
import { Home3Fill } from '@casts/icons';
import { Space } from '@casts/space';

const CloseableDemo = () => (
  <Space className="zone-scope" direction="vertical">
    <Message
      theme="info"
      icon={<Home3Fill />}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec blandit leo, sed scelerisque turpis. Vestibulum ac tortor odio. Praesent dapibus lectus accumsan lobortis convallis. In hac habitasse platea dictumst. Mauris laoreet lobortis enim, quis sollicitudin quam posuere id. Maecenas nibh mauris, dictum nec urna eget, gravida fringilla risus. Curabitur nec volutpat dui. Integer hendrerit lobortis ex, vitae iaculis velit lobortis mollis. Vivamus justo tellus, fermentum consequat leo id, dignissim posuere justo. In ac scelerisque dolor. Morbi eget euismod dolor, in dapibus dolor."
      close={false}
    />
    <Message
      theme="success"
      icon={<Home3Fill />}
      content="content"
      close={false}
    />
    <Message
      theme="warning"
      icon={<Home3Fill />}
      content="content"
      close={false}
    />
    <Message
      theme="error"
      icon={<Home3Fill />}
      content="content"
      close={false}
    />
  </Space>
);

export default CloseableDemo;
