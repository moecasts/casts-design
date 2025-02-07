// @ts-ignore example should import React
import React from 'react';
import { Home3Fill } from '@casts/icons';
import { Link } from '@casts/link';
import { Space } from '@casts/space';

export const LinkDifferentUnderlineDemo = () => {
  return (
    <Space wrap size={24}>
      <Link href="#" underline={false}>
        <Home3Fill />
        No underline
      </Link>
      <Link href="#" underline={'hover'}>
        <Home3Fill />
        Hover underline
      </Link>
      <Link href="#" underline={true}>
        <Home3Fill />
        Permanent underline
      </Link>
    </Space>
  );
};

export default LinkDifferentUnderlineDemo;
