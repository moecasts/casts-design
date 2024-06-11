// @ts-ignore example should import React
import React from 'react';
import { Avatar } from '@casts/avatar';
import { Button } from '@casts/button';
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
  DropdownProps,
} from '@casts/dropdown';
import { User5Line } from '@casts/icons';
import { Space } from '@casts/space';

const DropdownBasicDemo = () => {
  const handleOpenChange: DropdownProps['onOpenChange'] = (open) => {
    console.log('debug onOpenChange', { open });
  };

  const handleClick: DropdownProps['onClick'] = (value, context) => {
    console.log('debug onClick', { value, context });
  };

  return (
    <Space size={100} wrap>
      <Dropdown
        onOpenChange={handleOpenChange}
        onClick={handleClick}
        maxColumnWidth={200}
        trigger="hover"
        options={[
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
        ]}
      >
        <Button>MORE</Button>
      </Dropdown>

      <Dropdown
        onOpenChange={handleOpenChange}
        onClick={handleClick}
        options={[
          {
            label: 'Option 1',
            value: '1',
          },
          {
            label: 'Option 2',
            value: '2',
          },
          {
            label: 'Option 3',
            value: '3',
          },
          {
            label: 'Option 4',
            value: '4',
          },
          {
            label: 'Option 5',
            value: '5',
          },
        ]}
      >
        <Button>MORE</Button>
      </Dropdown>

      <Dropdown
        onOpenChange={handleOpenChange}
        onClick={handleClick}
        maxHeight={200}
        minColumnWidth={100}
        maxColumnWidth={150}
        renderContent={() => (
          <DropdownMenu>
            <DropdownItem value={1}>Option 1</DropdownItem>
            <DropdownItem value={2}>Option 2</DropdownItem>
            <DropdownItem value={3}>Option 3</DropdownItem>
            <DropdownItem value={4}>Option 4</DropdownItem>
            <DropdownItem value={5}>Option 5</DropdownItem>
            <DropdownItem value={6}>This is a long option label</DropdownItem>
          </DropdownMenu>
        )}
      >
        <Button>MORE</Button>
      </Dropdown>

      <Dropdown
        onOpenChange={handleOpenChange}
        onClick={handleClick}
        maxHeight={200}
        minColumnWidth={100}
        maxColumnWidth={150}
        renderContent={() => (
          <DropdownMenu>
            <DropdownItem value={1}>Option 1</DropdownItem>
            <DropdownItem value={2}>Option 2</DropdownItem>
            <DropdownDivider />
            <DropdownItem value={3}>Option 3</DropdownItem>
            <DropdownItem value={4}>Option 4</DropdownItem>
            <DropdownItem value={5}>Option 5</DropdownItem>
            <DropdownDivider />
            <DropdownItem value={6} style={{ height: 'fit-content' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  shape="circle"
                  size={20}
                  style={{
                    backgroundColor: '#87d068',
                    marginRight: '4px',
                    flexShrink: 0,
                  }}
                  icon={<User5Line />}
                />
                <span
                  style={{
                    display: 'inline-block',
                    minWidth: 0,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                  }}
                >
                  Custom Dropdown Item
                </span>
              </div>
            </DropdownItem>
          </DropdownMenu>
        )}
      >
        <Button>MORE</Button>
      </Dropdown>
    </Space>
  );
};

export default DropdownBasicDemo;
