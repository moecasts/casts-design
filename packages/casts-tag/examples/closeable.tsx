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
        <Tag theme="success" closeable>
          TAG
        </Tag>
        <Tag theme="success" closeable prefix={<PriceTag3Line />}>
          TAG
        </Tag>
        <Tag theme="success" closeable suffix={<PriceTag3Line />}>
          TAG
        </Tag>
      </Space>

      <Space>
        <Tag theme="success" variant="outline" closeable>
          TAG
        </Tag>
        <Tag
          theme="success"
          variant="outline"
          closeable
          prefix={<PriceTag3Line />}
        >
          TAG
        </Tag>
        <Tag
          theme="success"
          variant="outline"
          closeable
          suffix={<PriceTag3Line />}
        >
          TAG
        </Tag>
      </Space>

      <Space>
        <Tag theme="success" pastel={false} closeable>
          TAG
        </Tag>
        <Tag
          theme="success"
          pastel={false}
          closeable
          prefix={<PriceTag3Line />}
        >
          TAG
        </Tag>
        <Tag
          theme="success"
          pastel={false}
          closeable
          suffix={<PriceTag3Line />}
        >
          TAG
        </Tag>
      </Space>
    </Space>
  );
};

export default TagCloseableDemo;
