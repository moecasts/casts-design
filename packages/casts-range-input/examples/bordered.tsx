// @ts-ignore example should import React
import React from 'react';
import { Calendar2Line } from '@casts/icons';
import { RangeInput } from '@casts/range-input';
import { Space } from '@casts/space';

export const RangeInputDifferentSize = () => {
  return (
    <Space direction="vertical">
      <RangeInput
        bordered
        size="small"
        placeholder="please enter"
        suffix={<Calendar2Line />}
        onChange={(value, context) => {
          console.log('value:', value, context);
        }}
      />

      <RangeInput
        bordered
        size="medium"
        placeholder="please enter"
        suffix={<Calendar2Line />}
        onChange={(value, context) => {
          console.log('value:', value, context);
        }}
      />

      <RangeInput
        bordered
        size="large"
        placeholder="please enter"
        suffix={<Calendar2Line />}
        onChange={(value, context) => {
          console.log('value:', value, context);
        }}
      />
    </Space>
  );
};

export default RangeInputDifferentSize;
