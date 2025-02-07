// @ts-ignore example should import React
import React from 'react';
import { Table } from '@casts/table';

const TableEmptyDemo = () => {
  return (
    <Table
      data={[]}
      columns={[
        {
          key: 'age',
          title: 'age',
        },
        {
          key: 'name',
          title: ({ column }) => `${column.id}`,
        },
        { key: 'address', title: 'address' },
        { key: 'address2', title: 'address2' },
        { key: 'address3', title: 'address3' },
      ]}
      round
      // rowRound
      bordered
      // cellBordered
      rowBordered
      // stripe
      maxHeight={500}
    />
  );
};

export default TableEmptyDemo;
