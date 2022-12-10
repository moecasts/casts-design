import { useState } from 'react';
import { ChangeEventHandler, Checkbox, CheckboxValue } from '@casts/checkbox';
import { Space } from '@casts/space';

const BasicDemo = () => {
  const [value1, setValue1] = useState<CheckboxValue>(false);
  const onChange: ChangeEventHandler = (value, { e }) => {
    console.log('basic checkbox', value, e);
    setValue1(value);
  };
  return (
    <Space direction="vertical">
      <Checkbox />
      <Checkbox checked={value1} onChange={onChange}>
        controlled checkbox
      </Checkbox>
      <Checkbox indeterminate>indeterminate checkbox</Checkbox>
      <Checkbox disabled>disabled unchecked checkbox</Checkbox>
      <Checkbox defaultChecked disabled>
        disabled checked checkbox
      </Checkbox>
    </Space>
  );
};

export default BasicDemo;
