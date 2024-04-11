// @ts-ignore example should import React
import React, { useState } from 'react';
import { Space } from '@casts/space';
import { Tag } from '@casts/tag';

import '@casts/avatar/dist/esm/styles.scss';

const TagCheckableDemo = () => {
  const [tagChecked, setTagChecked] = useState(false);
  return (
    <Space>
      <Tag
        checkable
        checked={tagChecked}
        onChange={(checked) => {
          console.log('tag checked change', { checked });
          setTagChecked(checked);
        }}
        theme="brand"
      >
        tag
      </Tag>
      <Tag checkable defaultChecked theme="info">
        tag
      </Tag>
      <Tag checkable theme="success">
        tag
      </Tag>
      <Tag checkable theme="warning">
        tag
      </Tag>
      <Tag checkable theme="danger">
        tag
      </Tag>
      <Tag checkable theme="neutral">
        tag
      </Tag>
    </Space>
  );
};

export default TagCheckableDemo;
