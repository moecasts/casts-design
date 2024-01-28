// @ts-ignore example should import React
import React from 'react';
import { PriceTag3Line } from '@casts/icons';
import { Space } from '@casts/space';
import { Tag } from '@casts/tag';

import '@casts/avatar/dist/esm/styles.scss';

const TagBasicDemo = () => {
  return (
    <Space>
      <Tag>TAG</Tag>
      <Tag prefix={<PriceTag3Line />}>TAG</Tag>
      <Tag suffix={<PriceTag3Line />}>TAG</Tag>
      <Tag prefix={<PriceTag3Line />} suffix={<PriceTag3Line />}>
        TAG
      </Tag>
    </Space>
  );
};

export default TagBasicDemo;
