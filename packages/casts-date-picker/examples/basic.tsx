// @ts-ignore example should import React
import React from 'react';
import {
  DatePicker,
  DateRangePicker,
  DateTimePicker,
} from '@casts/date-picker';
import { Space } from '@casts/space';

export const CodeBasic = () => {
  return (
    <Space direction="vertical" style={{ width: 300 }}>
      <DateTimePicker />

      <DatePicker placeholder="Please select single date" mode={'single'} />

      <DatePicker
        placeholder="Please select multiple dates"
        mode={'multiple'}
      />

      <DateRangePicker placeholder="Please select range date" />
    </Space>
  );
};

export default CodeBasic;
