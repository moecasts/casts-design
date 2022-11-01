import React from 'react';
import { ChangeEventHandler, Radio, RadioGroup } from '@casts/radio';
import { Space } from '@casts/space';

const GroupDisabledDemo = () => {
  const defaultValue = 2;
  const onChange: ChangeEventHandler = (value, { e }) => {
    console.log('debug1', value, e);
  };
  return (
    <Space>
      <RadioGroup
        defaultValue={defaultValue}
        onChange={onChange}
        name="basic-group"
        disabled
      >
        <Radio value={1}>radio1</Radio>
        <Radio value={2}>radio2</Radio>
        <Radio value={3} disabled>
          radio3
        </Radio>
        <Radio value={4}>radio4</Radio>
      </RadioGroup>
    </Space>
  );
};

export default GroupDisabledDemo;
