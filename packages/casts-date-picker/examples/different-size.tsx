// @ts-ignore example should import React
import React from 'react';
import { DatePicker, DateRangePicker } from '@casts/date-picker';
import { Space } from '@casts/space';

export const CodeBasic = () => {
  return (
    <Space direction="vertical" style={{ width: 300 }}>
      <Space direction="vertical">
        <DatePicker size={'small'} placeholder="Please select single date" />

        <DatePicker placeholder="Please select single date" />
        <DatePicker size={'large'} placeholder="Please select single date" />
      </Space>

      <Space direction="vertical">
        <DateRangePicker
          size={'small'}
          placeholder="Please select range date"
        />

        <DateRangePicker placeholder="Please select range date" />

        <DateRangePicker
          size={'large'}
          placeholder="Please select range date"
        />
      </Space>
    </Space>
  );
};

export default CodeBasic;
