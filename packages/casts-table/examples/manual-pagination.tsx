// @ts-ignore example should import React
import React, { useEffect, useMemo, useState } from 'react';
import { Table, TableProps } from '@casts/table';

const makeData = (count = 100) => {
  const names = ['Alice', 'Bob', 'Tom'];
  const ages = [12, 18, 23, 55, 22];
  const addresses = [
    'New York No. 1 Lake Park',
    'London No. 1 Lake Park',
    'Sydney No. 1 Lake Park',
  ];

  return [...Array(count)].map((_, idx) => {
    return {
      id: idx + 1,
      name: names[idx % names.length],
      age: ages[idx % ages.length],
      address: addresses[idx % addresses.length],
      address2: addresses[(idx + 1) % addresses.length],
      address3: addresses[(idx + 2) % addresses.length],
    };
  });
};

const TableBasicDemo = () => {
  const total = 1000;

  const data = useMemo(() => makeData(total), []);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total,
  });

  const [loading, setLoading] = useState(true);

  const [dataSlice, setDataSlice] = useState<any[]>([]);

  const fetchData = (payload: { current: number; pageSize: number }) => {
    setLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        const dataSlice = data.slice(
          ((payload.current || 1) - 1) * payload.pageSize,
          (payload.current || 1) * payload.pageSize,
        );

        resolve(dataSlice);
      }, 300);
    })
      .then((data: any) => {
        setDataSlice(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData({
      current: pagination.current,
      pageSize: pagination.pageSize,
    });
  }, []);

  const handlePaginationChange: TableProps['onPaginationChange'] = (data) => {
    console.log('paginationChange', data);
    setPagination(data);
    fetchData({
      current: data.current,
      pageSize: data.pageSize,
    });
  };

  return (
    <Table
      loading={loading}
      data={dataSlice}
      columns={[
        {
          key: 'id',
          title: 'id',
        },
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
      stripe={false}
      maxHeight={500}
      manualPagination={true}
      pagination={pagination}
      onPaginationChange={handlePaginationChange}
    />
  );
};

export default TableBasicDemo;
