// @ts-ignore example should import React
import React from 'react';
import { Home3Fill } from '@casts/icons';
import { Link } from '@casts/link';
import { Space } from '@casts/space';

export const LinkBasicDemo = () => {
  return (
    <Space wrap size={24}>
      <Link href="#" theme="brand">
        Hyperlinks
      </Link>
      <Link href="#" theme="success">
        <Home3Fill />
        Hyperlinks
      </Link>
      <Link href="#" theme="info">
        Hyperlinks
        <Home3Fill />
      </Link>
      <Link href="#" theme="warning">
        <Home3Fill />
        Hyperlinks
      </Link>
      <Link href="#" theme="danger">
        <Home3Fill />
        Hyperlinks
      </Link>
      <Link href="#" theme="neutral" target="_blank">
        <Home3Fill />
        Blank Hyperlinks
      </Link>
    </Space>
  );
};

export default LinkBasicDemo;
