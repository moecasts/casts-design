// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import {
  Heart2Line,
  Home3Fill,
  PlayList2Line,
  SearchLine,
  ShieldFlashLine,
  UserLine,
} from '@casts/icons';
import { Menu, MenuObject } from '@casts/menu';
import { Space } from '@casts/space';
import { CdsRadiusMedium } from '@casts/theme';

import './styles.scss';

export const MenuDifferentSizeDemo = () => {
  const logoComponent = (
    <div
      style={{
        backgroundColor:
          'var(--cds-button-color-surface-neutral-active-on-pastel)',
        height: '100%',
        width: '100%',
        borderRadius: CdsRadiusMedium,
      }}
    ></div>
  );

  const items: MenuObject[] = [
    {
      key: 'home',
      value: 'home',
      prefixIcon: <Home3Fill />,
      label: 'Home',
    },
    {
      key: 0,
      value: 0,
      prefixIcon: <PlayList2Line />,
      label: <>Sub Menu</>,
      children: [
        {
          key: '0-1',
          value: '0-1',
          prefixIcon: <Heart2Line />,
          label: 'Sub Menu 1',
        },
        {
          key: '0-2',
          value: '0-2',
          prefixIcon: <ShieldFlashLine />,
          label: 'Sub Menu 2',
        },
        {
          key: '0-3',
          value: '0-3',
          prefixIcon: <PlayList2Line />,
          label: <>Nested Sub Menu</>,
          children: [
            {
              key: '0-3-1',
              value: '0-3-1',
              prefixIcon: <Heart2Line />,
              label: 'Sub Menu 1',
            },
            {
              key: '0-3-2',
              value: '0-3-2',
              prefixIcon: <ShieldFlashLine />,
              label: 'Sub Menu 2',
            },
          ],
        },
      ],
    },
    {
      key: '0-4',
      value: '0-4',
      label: 'Menu 1',
      disabled: true,
    },
    {
      key: '0-5',
      value: '0-5',
      label: 'Menu 2',
    },
    {
      type: 'group',
      key: 'group',
      label: 'Group',
      children: [
        {
          key: '0-6',
          value: '0-6',
          prefixIcon: <ShieldFlashLine />,
          label: 'Group Menu 1',
        },
      ],
    },
    {
      key: '0-7',
      value: '0-7',
      label: 'Menu 3',
      href: '#',
    },
    {
      key: '0-8',
      value: '0-8',
      label: 'Menu 4',
      href: './menu',
    },
  ];

  return (
    <div className="demo-page-container">
      <Space style={{ flexDirection: 'column', width: '100%' }}>
        <Menu
          defaultValue="0-2"
          logo={logoComponent}
          items={items}
          operations={
            <>
              <Button
                icon={<SearchLine />}
                theme="neutral"
                variant="text"
              ></Button>
              <Button
                icon={<UserLine />}
                theme="neutral"
                variant="text"
              ></Button>
            </>
          }
        ></Menu>
      </Space>
    </div>
  );
};

export default MenuDifferentSizeDemo;
