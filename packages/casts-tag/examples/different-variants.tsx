// @ts-ignore example should import React
import React from 'react';
import { Space } from '@casts/space';
import { Tag } from '@casts/tag';

import '@casts/avatar/dist/esm/styles.scss';

const TagDifferentVariantsDemo = () => {
  return (
    <Space>
      <Space>
        <Tag theme="brand" variant="contained">
          TAG
        </Tag>
        <Tag theme="brand" variant="outline">
          TAG
        </Tag>
        <Tag theme="brand" variant="dashed">
          TAG
        </Tag>
      </Space>
    </Space>
  );
};

export default TagDifferentVariantsDemo;
