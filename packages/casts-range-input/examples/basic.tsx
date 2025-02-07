// @ts-ignore example should import React
import React from 'react';
import { Calendar2Line } from '@casts/icons';
import { RangeInput } from '@casts/range-input';
import { Space } from '@casts/space';

export const RangeInputBasic = () => {
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
    </Space>
  );
};

export default RangeInputBasic;
