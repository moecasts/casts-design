import React, { useState } from 'react';
import { Input, ChangeEventHandler } from '@casts/input';
import { Space } from '@casts/space';

const ControlledDemo = () => {
  const [value, setValue] = useState('controlled value');
  const onChange: ChangeEventHandler = (value, { e }) => {
    setValue(value as string);
    console.log('onChange', value, e);
  };
  return (
    <Space direction="vertical">
      <Input
        value={value}
        placeholder="Please enter something"
        onChange={onChange}
      />
    </Space>
  );
};

export default ControlledDemo;
