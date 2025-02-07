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

const DropdownRenderByFunctionDemo = () => {
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

export default DropdownRenderByFunctionDemo;
