import React from 'react';
import { Button } from '@casts/button';
import {
  ChangeEventContext,
  ChangeEventHandler,
  Radio,
  RadioGroup,
  RadioValue,
} from '@casts/radio';
import { Space } from '@casts/space';

const GroupCustomItemDemo = () => {
  const defaultValue = 2;
  const onChange: ChangeEventHandler = (value, { e }) => {
    console.log('debug1', value, e);
  };
  return (
    <Space>
      <RadioGroup defaultValue={defaultValue} onChange={onChange}>
        {[1, 2, 3, 4].map((item) => (
          <Radio value={item} key={item}>
            {({ checked }) => (
              <Button shape="pill" variant={checked ? 'contained' : 'outline'}>
                Radio{item}
              </Button>
            )}
          </Radio>
        ))}
      </RadioGroup>
    </Space>
  );
};

export default GroupCustomItemDemo;
