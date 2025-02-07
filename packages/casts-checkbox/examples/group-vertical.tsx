import { Checkbox, CheckboxGroup } from '@casts/checkbox';
import { Space } from '@casts/space';

const GroupDemo = () => {
  return (
    <Space direction="vertical">
      <CheckboxGroup defaultValue={[1]} disabled direction="vertical">
        <Checkbox value={1}>checkbox 1</Checkbox>
        <Checkbox value={2}>checkbox 2</Checkbox>
        <Checkbox value={3}>checkbox 3</Checkbox>
        <Checkbox value={4}>checkbox 4</Checkbox>
      </CheckboxGroup>
    </Space>
  );
};

export default GroupDemo;
