// @ts-ignore example should import React
import React, { useState } from 'react';
import { ChangeEventHandler, Radio, RadioValue } from '@casts/radio';
import { Space } from '@casts/space';

const BasicDemo = () => {
  const [value1, setValue1] = useState<RadioValue>(false);
  const onChange: ChangeEventHandler = (value, { e }) => {
    console.log('basic radio', value, e);
    setValue1(value);
  };
  return (
    <Space direction="vertical">
      <Radio>radio</Radio>
      <Radio checked={value1} allowUncheck onChange={onChange}>
        allow uncheck
      </Radio>
      <Radio disabled>disabled unchecked radio</Radio>
      <Radio defaultChecked disabled>
        disabled checked radio
      </Radio>
    </Space>
  );
};

export default BasicDemo;
