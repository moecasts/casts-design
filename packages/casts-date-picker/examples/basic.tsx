// @ts-ignore example should import React
import React from 'react';
import { DatePicker } from '@casts/date-picker';
import { Space } from '@casts/space';

export const DatePickerBasic = () => {
  return (
    <Space direction="vertical" style={{ width: 400 }}>
      <DatePicker placeholder="Please select single date" mode={'single'} />

      <DatePicker
        placeholder="Please select multiple dates"
        mode={'multiple'}
      />
    </Space>
  );
};

export default DatePickerBasic;
