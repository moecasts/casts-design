// @ts-ignore example should import React
import React from 'react';
import { Space } from '@casts/space';
import { Tag } from '@casts/tag';

import '@casts/avatar/dist/esm/styles.scss';

const TagDifferentThemesBorderedDemo = () => {
  return (
    <Space direction="vertical">
      <Space>
        <Tag bordered theme="brand">
          tag
        </Tag>
        <Tag bordered theme="info">
          tag
        </Tag>
        <Tag bordered theme="success">
          tag
        </Tag>
        <Tag bordered theme="warning">
          tag
        </Tag>
        <Tag bordered theme="danger">
          tag
        </Tag>
        <Tag bordered theme="neutral">
          tag
        </Tag>
      </Space>
      <Space>
        <Tag disabled bordered theme="brand">
          tag
        </Tag>
        <Tag disabled bordered theme="info">
          tag
        </Tag>
        <Tag disabled bordered theme="success">
          tag
        </Tag>
        <Tag disabled bordered theme="warning">
          tag
        </Tag>
        <Tag disabled bordered theme="danger">
          tag
        </Tag>
        <Tag disabled bordered theme="neutral">
          tag
        </Tag>
      </Space>
    </Space>
  );
};

export default TagDifferentThemesBorderedDemo;
