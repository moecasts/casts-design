// @ts-ignore example should import React
import React, { useMemo } from 'react';
import { Link } from '@casts/link';
import { Table } from '@casts/table';

const makeData = () => {
  const names = ['Alice', 'Bob', 'Tom'];
  const ages = [12, 18, 23, 55, 22];
  const addresses = [
    'New York No. 1 Lake Park',
    'London No. 1 Lake Park',
    'Sydney No. 1 Lake Park',
  ];

  return [...Array(100)].map((_, idx) => {
    return {
      name: names[idx % names.length],
      age: ages[idx % ages.length],
      address: addresses[idx % addresses.length],
      address2: addresses[(idx + 1) % addresses.length],
      address3: addresses[(idx + 2) % addresses.length],
    };
  });
};

const TableBasicDemo = () => {
  const data = useMemo(() => makeData(), []);
  return (
    <Table
      data={data}
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
        {
          key: 'operate',
          title: 'operate',
          size: 100,
          cell: () => (
            <Link
              underline={false}
              onClick={() => {
                console.log('click');
              }}
            >
              View
            </Link>
          ),
        },
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

export default TableBasicDemo;
