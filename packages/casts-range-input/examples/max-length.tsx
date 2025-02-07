// @ts-ignore example should import React
import React from 'react';
import { Calendar2Line } from '@casts/icons';
import { RangeInput } from '@casts/range-input';
import { Space } from '@casts/space';

export const RangeInputMaxLength = () => {
  return (
    <Space direction="vertical">
      <RangeInput
        maxLength={10}
        placeholder="please enter"
        suffix={<Calendar2Line />}
        tips="max length is 10"
        onChange={(value, context) => {
          console.log('value:', value, context);
        }}
      />

      <RangeInput
        maxLength={[5, 10]}
        placeholder="please enter"
        suffix={<Calendar2Line />}
        tips="max length is 5-10"
        onChange={(value, context) => {
          console.log('value:', value, context);
        }}
      />
    </Space>
  );
};

export default RangeInputMaxLength;
