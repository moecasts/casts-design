// @ts-ignore example should import React
import React from 'react';
import {
  Heart2Line,
  Home3Line,
  PlayList2Line,
  ShieldFlashLine,
} from '@casts/icons';
import { Menu, MenuItem, SubMenu } from '@casts/menu';
import { CdsRadiusMedium } from '@casts/theme';

import './styles.scss';

export const MenuDemo = () => {
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
  const menuChildren = (
    <>
      <MenuItem value={'home'} prefixIcon={<Home3Line />}>
        Home
      </MenuItem>
      <SubMenu value={0} prefixIcon={<PlayList2Line />} label={<>Sub Menu</>}>
        <MenuItem prefixIcon={<Heart2Line />} value={'0-1'}>
          Sub Menu 1
        </MenuItem>
        <MenuItem prefixIcon={<ShieldFlashLine />} value={'0-2'}>
          Sub Menu 2
        </MenuItem>
        <SubMenu
          disabled
          value={'0-3'}
          prefixIcon={<ShieldFlashLine />}
          label={'Nested Sub Menu 1'}
        >
          <MenuItem prefixIcon={<ShieldFlashLine />} value={'0-3-1'}>
            Sub Menu 1
          </MenuItem>
          <MenuItem prefixIcon={<ShieldFlashLine />} value={'0-3-2'}>
            Sub Menu 2
          </MenuItem>
        </SubMenu>
        <SubMenu
          value={'0-4'}
          label={'Nested Sub Menu 2'}
          prefixIcon={<ShieldFlashLine />}
        >
          <MenuItem prefixIcon={<ShieldFlashLine />} value={'0-4-1'}>
            Sub Menu 1
          </MenuItem>
          <MenuItem prefixIcon={<ShieldFlashLine />} value={'0-4-2'}>
            Sub Menu 2
          </MenuItem>
        </SubMenu>
      </SubMenu>
      <MenuItem prefixIcon={<ShieldFlashLine />} value={1} disabled>
        Menu 1
      </MenuItem>
      <MenuItem prefixIcon={<ShieldFlashLine />} value={2}>
        Menu 2
      </MenuItem>
      <MenuItem prefixIcon={<ShieldFlashLine />} value={3}>
        Menu 3
      </MenuItem>
      <MenuItem prefixIcon={<ShieldFlashLine />} value={4}>
        Menu 4
      </MenuItem>
      <MenuItem prefixIcon={<ShieldFlashLine />} value={5}>
        Menu 5
      </MenuItem>
    </>
  );

  return (
    <div className="demo-page-container">
      <Menu defaultValue="0-2" logo={logoComponent} expandType="popup">
        {menuChildren}
      </Menu>
    </div>
  );
};

export default MenuDemo;
