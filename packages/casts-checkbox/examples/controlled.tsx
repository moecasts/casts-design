import { useState } from 'react';
import {
  ChangeEventHandler,
  Checkbox,
  CheckboxGroup,
  CheckboxGroupProps,
  CheckboxValue,
} from '@casts/checkbox';
import { Space } from '@casts/space';

const GroupDemo = () => {
  const [value1, setValue1] = useState<CheckboxValue>(false);
  const onChange: ChangeEventHandler = (value, { e }) => {
    console.log('basic checkbox', value, e);
    setValue1(value);
  };

  const [groupValue, setGroupValue] = useState([1]);
  const onGroupChange: CheckboxGroupProps['onChange'] = (value, context) => {
    console.log('debug', value, context);
    setGroupValue(value as number[]);
  };

  return (
    <Space direction="vertical">
      <Checkbox checked={value1} onChange={onChange}>
        checkbox
      </Checkbox>
      <Space>
        <CheckboxGroup value={groupValue} onChange={onGroupChange}>
          <Checkbox value={1}>checkbox 1</Checkbox>
          <Checkbox value={2}>checkbox 2</Checkbox>
          <Checkbox value={3}>checkbox 3</Checkbox>
          <Checkbox value={4}>checkbox 4</Checkbox>
        </CheckboxGroup>
      </Space>
    </Space>
  );
};

export default GroupDemo;
