// @ts-ignore example should import React
import React, { useState } from 'react';
import { Button } from '@casts/button';
import {
  Heart2Line,
  Home3Line,
  MenuUnfoldLine,
  PlayList2Line,
  ShieldFlashLine,
} from '@casts/icons';
import { Menu, MenuGroup, MenuItem, SubMenu } from '@casts/menu';
import { Space } from '@casts/space';
import { CdsRadiusMedium } from '@casts/theme';

import './styles.scss';

export const MenuCollapseDemo = () => {
  const [collapses, setCollapses] = useState({
    a: false,
    b: false,
    c: false,
  });
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
      <MenuItem prefixIcon={<ShieldFlashLine />} value={1}>
        Menu 1
      </MenuItem>
      <MenuGroup label="Group">
        <MenuItem prefixIcon={<ShieldFlashLine />} value={2}>
          Menu 2
        </MenuItem>
        <SubMenu
          value={'2-5'}
          label={'Nested Sub Menu 2'}
          prefixIcon={<ShieldFlashLine />}
        >
          <MenuItem prefixIcon={<ShieldFlashLine />} value={'2-5-1'}>
            Sub Menu 1
          </MenuItem>
          <MenuItem prefixIcon={<ShieldFlashLine />} value={'2-5-2'}>
            Sub Menu 2
          </MenuItem>
        </SubMenu>
        <MenuItem prefixIcon={<ShieldFlashLine />} value={3}>
          Menu 3
        </MenuItem>
      </MenuGroup>
      <MenuItem prefixIcon={<ShieldFlashLine />} value={4} disabled>
        Menu 4
      </MenuItem>
      <MenuItem prefixIcon={<ShieldFlashLine />} value={5}>
        Menu 5
      </MenuItem>
    </>
  );

  return (
    <div className="demo-page-container">
      <Space style={{ flexDirection: 'column', width: '100%' }}>
        <div style={{ width: '232px', flexShrink: 0 }}>
          <Menu
            defaultValue="0-2"
            size="small"
            logo={logoComponent}
            collapse={collapses.a}
            operations={
              <>
                <Button
                  icon={<MenuUnfoldLine />}
                  theme="neutral"
                  variant="text"
                  size="small"
                  onClick={() =>
                    setCollapses({
                      ...collapses,
                      a: !collapses.a,
                    })
                  }
                ></Button>
              </>
            }
          >
            {menuChildren}
          </Menu>
        </div>

        <div style={{ width: '232px', flexShrink: 0 }}>
          <Menu
            defaultValue="0-2"
            logo={logoComponent}
            collapse={collapses.b}
            operations={
              <>
                <Button
                  icon={<MenuUnfoldLine />}
                  theme="neutral"
                  variant="text"
                  size="small"
                  onClick={() =>
                    setCollapses({
                      ...collapses,
                      b: !collapses.b,
                    })
                  }
                ></Button>
              </>
            }
          >
            {menuChildren}
          </Menu>
        </div>

        <div style={{ width: '232px', flexShrink: 0 }}>
          <Menu
            defaultValue="0-2"
            size="large"
            logo={logoComponent}
            collapse={collapses.c}
            operations={
              <>
                <Button
                  icon={<MenuUnfoldLine />}
                  theme="neutral"
                  variant="text"
                  size="small"
                  onClick={() =>
                    setCollapses({
                      ...collapses,
                      c: !collapses.c,
                    })
                  }
                ></Button>
              </>
            }
          >
            {menuChildren}
          </Menu>
        </div>
      </Space>
    </div>
  );
};

export default MenuCollapseDemo;
