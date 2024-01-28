// @ts-ignore example should import React
import React from 'react';
import { PriceTag3Line } from '@casts/icons';
import { Space } from '@casts/space';
import { Tag } from '@casts/tag';

import '@casts/avatar/dist/esm/styles.scss';

const TagCloseableDemo = () => {
  return (
    <Space>
      <Tag closeable>TAG</Tag>
      <Tag closeable prefix={<PriceTag3Line />}>
        TAG
      </Tag>
      <Tag closeable suffix={<PriceTag3Line />}>
        TAG
      </Tag>
    </Space>
  );
};

export default TagCloseableDemo;
