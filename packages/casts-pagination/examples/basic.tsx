// @ts-ignore example should import React
import React from 'react';
import { Pagination } from '@casts/pagination';
import { Space } from '@casts/space';

import './styles.scss';

const PaginationBasicDemo = () => {
  const handleChange = (data) => {
    console.log('onChange', data);
  };

  const handleCurrentChange = (current) => {
    console.log('onCurrentChange', current);
  };

  const handlePageSizeChange = (pageSize) => {
    console.log('onPageSizeChange', pageSize);
  };

  return (
    <Space
      className="zone-scope demo-pagination-scope"
      direction="vertical"
      style={{ justifyContent: 'start' }}
      align="start"
    >
      <Pagination
        onChange={handleChange}
        onCurrentChange={handleCurrentChange}
        onPageSizeChange={handlePageSizeChange}
        total={50}
      />
      <Pagination
        onChange={handleChange}
        onCurrentChange={handleCurrentChange}
        onPageSizeChange={handlePageSizeChange}
        defaultCurrent={6}
        total={120}
      />
      <Pagination
        onChange={handleChange}
        onCurrentChange={handleCurrentChange}
        onPageSizeChange={handlePageSizeChange}
        defaultCurrent={6}
        total={1000}
      />
    </Space>
  );
};

export default PaginationBasicDemo;
