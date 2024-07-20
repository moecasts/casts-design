// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import {
  Heart2Line,
  Home3Line,
  PlayList2Line,
  SearchLine,
  ShieldFlashLine,
  UserLine,
} from '@casts/icons';
import { HeadMenu, MenuItem, SubMenu } from '@casts/menu';
import { CdsRadiusMedium } from '@casts/theme';

import './styles.scss';

export const HeadMenuDemo = () => {
  const logoComponent = (
    <div
      style={{
        backgroundColor:
          'var(--cds-button-color-surface-neutral-active-on-pastel)',
        height: '100%',
        width: '80px',
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
      <MenuItem
        prefixIcon={<ShieldFlashLine />}
        value={6}
        href="https:///www.tore.moe"
      >
        Link 1
      </MenuItem>
      <MenuItem prefixIcon={<ShieldFlashLine />} value={7} href="#">
        Link 2
      </MenuItem>
    </>
  );

  return (
    <div className="demo-page-container">
      <HeadMenu
        defaultValue="0-2"
        size="small"
        logo={logoComponent}
        hideAfterClick={false}
        operations={
          <>
            <Button
              icon={<SearchLine />}
              theme="neutral"
              variant="text"
              size="small"
            ></Button>
            <Button
              icon={<UserLine />}
              theme="neutral"
              variant="text"
              size="small"
            ></Button>
          </>
        }
      >
        {menuChildren}
      </HeadMenu>

      <HeadMenu
        defaultValue="0-2"
        logo={logoComponent}
        operations={
          <>
            <Button
              icon={<SearchLine />}
              theme="neutral"
              variant="text"
            ></Button>
            <Button icon={<UserLine />} theme="neutral" variant="text"></Button>
          </>
        }
      >
        {menuChildren}
      </HeadMenu>

      <HeadMenu
        defaultValue="0-2"
        size="large"
        logo={logoComponent}
        operations={
          <>
            <Button
              icon={<SearchLine />}
              theme="neutral"
              variant="text"
            ></Button>
            <Button icon={<UserLine />} theme="neutral" variant="text"></Button>
          </>
        }
      >
        {menuChildren}
      </HeadMenu>
    </div>
  );
  // return ;
};

export default HeadMenuDemo;
