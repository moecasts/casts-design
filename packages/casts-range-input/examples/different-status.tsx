// @ts-ignore example should import React
import React from 'react';
import { Calendar2Line, CalendarEventLine } from '@casts/icons';
import { RangeInput } from '@casts/range-input';
import { Space } from '@casts/space';

export const RangeInputDifferentStatus = () => {
  return (
    <Space direction="vertical">
      <RangeInput
        placeholder="please enter"
        suffix={<Calendar2Line />}
        tips="this is a tips"
        onChange={(value, context) => {
          console.log('value:', value, context);
        }}
      />
      <RangeInput
        placeholder="please enter"
        prefix={<CalendarEventLine />}
        tips="this is a success tips"
        status="success"
      />
      <RangeInput
        placeholder="please enter"
        prefix={<CalendarEventLine />}
        suffix={<Calendar2Line />}
        tips="this is a warning tips"
        status="warning"
      />
      <RangeInput
        placeholder="please enter"
        prefix={<CalendarEventLine />}
        suffix={<Calendar2Line />}
        tips="this is a error tips"
        status="error"
      />
    </Space>
  );
};

export default RangeInputDifferentStatus;
