// @ts-ignore example should import React
import React from 'react';
import { DateRangePicker, DateTimeRangePicker } from '@casts/date-picker';
import { Space } from '@casts/space';

export const DateRangePickerDemo = () => {
  return (
    <Space direction="vertical" style={{ width: 400 }}>
      <DateRangePicker placeholder="Please select range date" />

      <DateTimeRangePicker placeholder="Please select range date" />
    </Space>
  );
};

export default DateRangePickerDemo;
