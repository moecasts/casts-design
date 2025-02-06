// @ts-ignore example should import React
import React from 'react';
import { Space } from '@casts/space';
import { Tag } from '@casts/tag';

import '@casts/avatar/dist/esm/styles.scss';

const TagDifferentSolidThemesDemo = () => {
  return (
    <Space direction="vertical">
      <Space>
        <Tag pastel={false} theme="brand">
          tag
        </Tag>
        <Tag pastel={false} theme="info">
          tag
        </Tag>
        <Tag pastel={false} theme="success">
          tag
        </Tag>
        <Tag pastel={false} theme="warning">
          tag
        </Tag>
        <Tag pastel={false} theme="danger">
          tag
        </Tag>
        <Tag pastel={false} theme="neutral">
          tag
        </Tag>
      </Space>
      <Space>
        <Tag disabled pastel={false} theme="brand">
          tag
        </Tag>
        <Tag disabled pastel={false} theme="info">
          tag
        </Tag>
        <Tag disabled pastel={false} theme="success">
          tag
        </Tag>
        <Tag disabled pastel={false} theme="warning">
          tag
        </Tag>
        <Tag disabled pastel={false} theme="danger">
          tag
        </Tag>
        <Tag disabled pastel={false} theme="neutral">
          tag
        </Tag>
      </Space>
    </Space>
  );
};

export default TagDifferentSolidThemesDemo;
