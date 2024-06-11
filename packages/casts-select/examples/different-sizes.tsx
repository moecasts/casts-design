// @ts-ignore example should import React
import React from 'react';
import { Select } from '@casts/select';
import { Space } from '@casts/space';
import { SelectOption } from 'casts-select/src/components/types';

const options: SelectOption[] = new Array(12).fill(true).map((_, index) => ({
  label: `Option ${index + 1}`,
  value: index + 1,
}));

export const SelectDifferentSizesDemo = () => {
  return (
    <Space direction="vertical">
      <Select
        placeholder={'Please select'}
        options={options}
        defaultValue={3}
        size="small"
      />
      <Select
        placeholder={'Please select'}
        options={options}
        defaultValue={3}
        size="medium"
      />
      <Select
        placeholder={'Please select'}
        options={options}
        defaultValue={3}
        size="large"
      />
    </Space>
  );
};

export default SelectDifferentSizesDemo;
