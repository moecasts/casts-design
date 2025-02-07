// @ts-ignore example should import React
import React, { useState } from 'react';
import { Calendar2Line } from '@casts/icons';
import { RangeInput, RangeInputValue } from '@casts/range-input';
import { Space } from '@casts/space';

export const RangeInputControlled = () => {
  const [value, setValue] = useState<RangeInputValue>(['', '']);
  return (
    <Space direction="vertical">
      <RangeInput
        value={value}
        placeholder="please enter"
        prefix={<Calendar2Line />}
        tips="this is a tips"
        onChange={(value, context) => {
          console.log('value:', value, context);
          setValue(value);
        }}
      />
    </Space>
  );
};

export default RangeInputControlled;
