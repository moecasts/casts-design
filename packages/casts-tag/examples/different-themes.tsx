// @ts-ignore example should import React
import React from 'react';
import { Space } from '@casts/space';
import { Tag } from '@casts/tag';

import '@casts/avatar/dist/esm/styles.scss';

const TagDifferentThemesDemo = () => {
  return (
    <Space direction="vertical">
      <Space>
        <Tag theme="brand">tag</Tag>
        <Tag theme="info">tag</Tag>
        <Tag theme="success">tag</Tag>
        <Tag theme="warning">tag</Tag>
        <Tag theme="danger">tag</Tag>
        <Tag theme="neutral">tag</Tag>
      </Space>
      <Space>
        <Tag disabled theme="brand">
          tag
        </Tag>
        <Tag disabled theme="info">
          tag
        </Tag>
        <Tag disabled theme="success">
          tag
        </Tag>
        <Tag disabled theme="warning">
          tag
        </Tag>
        <Tag disabled theme="danger">
          tag
        </Tag>
        <Tag disabled theme="neutral">
          tag
        </Tag>
      </Space>
    </Space>
  );
};

export default TagDifferentThemesDemo;
