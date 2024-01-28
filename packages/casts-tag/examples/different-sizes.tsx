// @ts-ignore example should import React
import React from 'react';
import { Space } from '@casts/space';
import { Tag } from '@casts/tag';

import '@casts/avatar/dist/esm/styles.scss';

const TagDifferentSizesDemo = () => {
  return (
    <Space align="center">
      <Tag theme="brand" size="small">
        small tag
      </Tag>
      <Tag theme="brand" size="medium">
        medium tag
      </Tag>
      <Tag theme="brand" size="large">
        large tag
      </Tag>
    </Space>
  );
};

export default TagDifferentSizesDemo;
