// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Dropdown, DropdownProps } from '@casts/dropdown';
import { Space } from '@casts/space';

export const DropdownDifferentSizesDemo = () => {
  const options: DropdownProps['options'] = [
    {
      label: 'Option 1 Option 1 Option 1 Option 1 Option 1',
      value: '1',
      children: [
        {
          label: 'Nested Option 1',
          value: '1-1',
        },
        {
          label: 'Nested Option 2',
          value: '1-2',
          children: [
            {
              label: 'Nested Option 1',
              value: '1-2-1',
            },
            {
              label: 'Nested Option 2',
              value: '1-2-2',
            },
          ],
        },
        {
          label: 'Nested Option 3',
          value: '1-3',
        },
        {
          label: 'Nested Option 4',
          value: '1-4',
        },
      ],
    },
    {
      label: 'Option 2',
      value: '2',
    },
    {
      label: 'Option 3',
      value: '3',
    },
    { type: 'divider' },
    {
      label: 'Option 4',
      value: '4',
    },
    {
      label: 'Option 5',
      value: '5',
    },
    {
      label: 'Section 1',
      type: 'section',
      children: [
        {
          label: 'Section 1 - Option 1',
          value: 'section-1-1',
        },
        {
          label: 'Section 1 - Option 2',
          value: 'section-1-2',
        },
      ],
    },
    { type: 'divider' },
    {
      label: 'Section 2',
      type: 'section',
      children: [
        {
          label: 'Section 2 - Option 1',
          value: 'section-2-1',
        },
        {
          label: 'Section 2 - Option 2',
          value: 'section-2-2',
        },
      ],
    },
  ];

  return (
    <Space size={100}>
      <Dropdown maxColumnWidth={200} options={options}>
        <Button>SMALL</Button>
      </Dropdown>
      <Dropdown size="medium" maxColumnWidth={200} options={options}>
        <Button>MEDIUM</Button>
      </Dropdown>
      <Dropdown size="large" maxColumnWidth={200} options={options}>
        <Button>LARGE</Button>
      </Dropdown>
    </Space>
  );
};

export default DropdownDifferentSizesDemo;
