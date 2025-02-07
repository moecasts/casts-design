// @ts-ignore example should import React
import React from 'react';
import { Home3Fill } from '@casts/icons';
import { Link } from '@casts/link';
import { Space } from '@casts/space';

export const LinkDifferentSizesDemo = () => {
  return (
    <Space direction="vertical">
      <div>
        <Link href="#" size="small">
          <Home3Fill />
          Hyperlinks
        </Link>
      </div>
      <div>
        <Link href="#" size="medium">
          <Home3Fill />
          Hyperlinks
        </Link>
      </div>
      <div>
        <Link href="#" size="large">
          <Home3Fill />
          Hyperlinks
        </Link>
      </div>
    </Space>
  );
};

export default LinkDifferentSizesDemo;
