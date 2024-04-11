// @ts-ignore example should import React
import React from 'react';
import { Select } from '@casts/select';
import { Space } from '@casts/space';
import { SelectOption } from 'casts-select/src/components/types';

const options: SelectOption[] = new Array(100).fill(true).map((_, index) => ({
  label: `Option ${index + 1}`,
  value: index + 1,
}));

export const SelectVirtualDemo = () => {
  return (
    <Space>
      <Select
        placeholder={'Please select'}
        options={options}
        defaultValue={93}
      />
      {/* <Select placeholder={'Please select 2'} multiple options={options} /> */}
    </Space>
  );
};

export default SelectVirtualDemo;
