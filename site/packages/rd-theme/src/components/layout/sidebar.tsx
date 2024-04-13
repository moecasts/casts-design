import { FC, MouseEvent } from 'react';
import { Menu } from '@casts/menu';
import { useRd } from '@casts/rd-vite/client/hooks/use-rd';
import { To, useLocation, useNavigate } from 'react-router-dom';

import { getPrefixCls } from '../../common';
import { SidebarProps } from '../../types';

export const Sidebar: FC<SidebarProps> = (props) => {
  const { operations } = props;
  const { menu } = useRd();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Menu
      width={240}
      className={`${getPrefixCls('menu')}`}
      size="large"
      value={location.pathname}
      onChange={(value) => {
        navigate(value as To);
      }}
      onClickCapture={(e: MouseEvent<HTMLDivElement>) => {
        e.nativeEvent.preventDefault();
      }}
      operations={operations}
      items={menu}
    ></Menu>
  );
};
