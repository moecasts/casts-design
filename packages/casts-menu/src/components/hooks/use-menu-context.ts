import { useContext } from 'react';
import { useSetState } from '@casts/common';

import { MenuContext, SubMenuContext } from '../menu-context';
import { MenuState, SetMenuState, UseMenuProviderProps } from '../types';

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  return context;
};

export const useMenuProvider = (props: UseMenuProviderProps) => {
  const { value, defaultValue, expanded, collapsed, ...rest } = props;
  const [state, setState] = useSetState<MenuState>({
    active: defaultValue,
    expanded,
    collapsed,
  });

  return {
    value: {
      ...rest,
      ...state,
      setState: setState as SetMenuState,
      active: value || state.active,
    },
  };
};

/* --------------------------------- Sub Menu Hooks ---------------------------------------- */
export const useSubMenuContext = () => useContext(SubMenuContext);
