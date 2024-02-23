// @ts-ignore example should import React
import React from 'react';
import { PriceTag3Line } from '@casts/icons';
import { Space } from '@casts/space';
import { Tag } from '@casts/tag';

import '@casts/avatar/dist/esm/styles.scss';

const TagCloseableDemo = () => {
  return (
    <Space direction="vertical">
      <Space>
        <Tag closeable>TAG</Tag>
        <Tag closeable prefix={<PriceTag3Line />}>
          TAG
        </Tag>
        <Tag closeable suffix={<PriceTag3Line />}>
          TAG
        </Tag>
      </Space>

      <Space>
        <Tag variant="outline" closeable>
          TAG
        </Tag>
        <Tag variant="outline" closeable prefix={<PriceTag3Line />}>
          TAG
        </Tag>
        <Tag variant="outline" closeable suffix={<PriceTag3Line />}>
          TAG
        </Tag>
      </Space>

      <Space>
        <Tag pastel={false} closeable>
          TAG
        </Tag>
        <Tag pastel={false} closeable prefix={<PriceTag3Line />}>
          TAG
        </Tag>
        <Tag pastel={false} closeable suffix={<PriceTag3Line />}>
          TAG
        </Tag>
      </Space>
    </Space>
  );
};

export default TagCloseableDemo;
