// @ts-ignore example should import React
import React from 'react';
import { DatePicker, DateRangePicker } from '@casts/date-picker';
import { Space } from '@casts/space';

export const CodeBasic = () => {
  return (
    <Space direction="vertical" style={{ width: 300 }}>
      <DatePicker
        size={'small'}
        placeholder="Please select single date"
        mode={'single'}
      />

      <DatePicker
        size={'small'}
        placeholder="Please select multiple dates"
        mode={'multiple'}
      />

      <DateRangePicker size={'small'} placeholder="Please select range date" />

      <DatePicker placeholder="Please select single date" mode={'single'} />

      <DatePicker
        placeholder="Please select multiple dates"
        mode={'multiple'}
      />

      <DateRangePicker placeholder="Please select range date" />

      <DatePicker
        size={'large'}
        placeholder="Please select single date"
        mode={'single'}
      />

      <DatePicker
        size={'large'}
        placeholder="Please select multiple dates"
        mode={'multiple'}
      />

      <DateRangePicker size={'large'} placeholder="Please select range date" />
    </Space>
  );
};

export default CodeBasic;
