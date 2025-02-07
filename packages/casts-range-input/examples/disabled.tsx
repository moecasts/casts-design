// @ts-ignore example should import React
import React from 'react';
import { Calendar2Line, CalendarEventLine } from '@casts/icons';
import { RangeInput } from '@casts/range-input';
import { Space } from '@casts/space';

export const RangeInputDisabled = () => {
  return (
    <Space direction="vertical">
      <RangeInput
        disabled
        placeholder="please enter"
        suffix={<Calendar2Line />}
        tips="this is a tips"
        onChange={(value, context) => {
          console.log('value:', value, context);
        }}
      />
      <RangeInput
        disabled
        placeholder="please enter"
        suffix={<CalendarEventLine />}
        tips="this is a success tips"
        status="success"
      />
      <RangeInput
        disabled
        placeholder="please enter"
        suffix={<Calendar2Line />}
        tips="this is a warning tips"
        status="warning"
      />
      <RangeInput
        disabled
        placeholder="please enter"
        suffix={<Calendar2Line />}
        tips="this is a error tips"
        status="error"
      />
    </Space>
  );
};

export default RangeInputDisabled;
