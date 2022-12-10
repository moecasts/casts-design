import React from 'react';
import { ChangeEventHandler, Radio, RadioGroup } from '@casts/radio';
import { Space } from '@casts/space';

const GroupDemo = () => {
  const defaultValue = 2;
  const onChange: ChangeEventHandler = (value) => {
    console.log('debug1', value);
  };
  return (
    <Space direction="vertical">
      <RadioGroup
        defaultValue={defaultValue}
        onChange={onChange}
        name="basic-group"
      >
        <Radio value={1}>radio1</Radio>
        <Radio value={2}>radio2</Radio>
        <Radio value={3}>radio3</Radio>
        <Radio value={4}>radio4</Radio>
      </RadioGroup>
    </Space>
  );
};

export default GroupDemo;
