// @ts-ignore example should import React
import React from 'react';
import { InputNumber } from '@casts/input-number';
import { Space } from '@casts/space';

const InputNumberBasicDemo = () => {
  return (
    <Space>
      <InputNumber
        placeholder="Please input number"
        min={1}
        max={10}
        decimal={2}
        onChange={(value, context) => {
          console.log('input number change', { value, context });
        }}
      />
    </Space>
  );
};

export default InputNumberBasicDemo;
