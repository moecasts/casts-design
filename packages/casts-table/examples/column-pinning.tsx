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
    '833 S Lark Ellen Ave',
    'Apt. 279 94808 Maryellen Run, Lake Josefinemouth, OR 24712-1214',
    'Apt. 639 17013 Lubowitz Isle, Robertschester, IN 93121-9896',
    '267 Kemmer Mall, New Rickeyburgh, IN 34429',
  ];

  return [...Array(100)].map((_, idx) => {
    return {
      name: names[idx % names.length],
      age: ages[idx % ages.length],
      address1: addresses[idx % addresses.length],
      address2: addresses[(idx + 1) % addresses.length],
      address3: addresses[(idx + 2) % addresses.length],
      address4: addresses[(idx + 3) % addresses.length],
      address5: addresses[(idx + 4) % addresses.length],
      address6: addresses[(idx + 4) % addresses.length],
    };
  });
};

const TableColumnPinningDemo = () => {
  const data = useMemo(() => makeData(), []);
  return (
    <Table
      data={data}
      columns={[
        {
          key: 'age',
          title: 'age',
          fixed: 'left',
        },
        {
          key: 'name',
          title: ({ column }) => `${column.id}`,
          fixed: 'left',
        },
        { key: 'address1', title: 'address1' },
        { key: 'address2', title: 'address2' },
        {
          key: 'address3',
          title: 'address3',

          fixed: 'right',
        },
        { key: 'address4', title: 'address4' },
        { key: 'address5', title: 'address5', fixed: 'right' },
        { key: 'address6', title: 'address6', fixed: 'right' },
        {
          key: 'operate',
          title: 'operate',
          size: 100,
          fixed: 'right',
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

export default TableColumnPinningDemo;
