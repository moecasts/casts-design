// @ts-ignore example should import React
import React from 'react';
import { Pagination } from '@casts/pagination';
import { Space } from '@casts/space';

const PaginationBasicDemo = () => (
  <Space className="zone-scope" direction="vertical">
    <Pagination pageSize={10} defaultCurrent={2} total={120} />
  </Space>
);

export default PaginationBasicDemo;
