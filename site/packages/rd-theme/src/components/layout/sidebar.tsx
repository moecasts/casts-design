import { FC } from 'react';
import { Menu } from '@casts/menu';
import { useRd } from '@casts/rd-vite/client/hooks/use-rd';
import { useLocation } from 'react-router-dom';

import { getPrefixCls } from '../../common';
import { SidebarProps } from '../../types';

export const Sidebar: FC<SidebarProps> = (props) => {
  const { operations } = props;
  const { menu } = useRd();
  const location = useLocation();

  return (
    <Menu
      width={240}
      className={`${getPrefixCls('menu')}`}
      size="large"
      value={location.pathname}
      operations={operations}
      items={menu}
    ></Menu>
  );
};
