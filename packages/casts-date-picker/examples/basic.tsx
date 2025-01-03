// @ts-ignore example should import React
import React from 'react';
import {
  DatePicker,
  DateRangePicker,
  DateTimePicker,
  DateTimeRangePicker,
} from '@casts/date-picker';
import { Space } from '@casts/space';

export const CodeBasic = () => {
  return (
    <Space direction="vertical" style={{ width: 400 }}>
      <div style={{ marginBottom: 40 }}>
        <DateTimeRangePicker
          defaultValue={{
            from: new Date('2025-01-1 19:33:22'),
            to: new Date('2025-01-17 19:33:24'),
          }}
          // visible
        />
      </div>

      <DateTimePicker
        defaultValue={new Date('2024-12-17 19:33:22')}
        onChange={console.log}
      />

      <DatePicker
        defaultValue={new Date('2024-12-17 19:33:22')}
        placeholder="Please select single date"
        mode={'single'}
      />

      <DatePicker
        defaultValue={[
          new Date('2024-12-17 19:33:22'),
          new Date('2024-12-18 19:33:22'),
        ]}
        placeholder="Please select multiple dates"
        mode={'multiple'}
      />
      <DatePicker
        defaultValue={['2024-12-17 19:33:22', new Date('2024-12-18 19:33:22')]}
        placeholder="Please select multiple dates"
        mode={'multiple'}
      />

      <DateRangePicker
        defaultValue={{
          from: new Date('2024-12-17 19:33:22'),
          to: new Date('2024-12-31 19:33:24'),
        }}
        placeholder="Please select range date"
      />
    </Space>
  );
};

export default CodeBasic;
