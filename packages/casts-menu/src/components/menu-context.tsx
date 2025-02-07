import { createContext, FC } from 'react';

import { defaultMenuContext } from './default-props';
import { useMenuProvider } from './hooks/use-menu-context';
import {
  MenuContextProps,
  MenuProviderProps,
  SubMenuContextProps,
  SubMenuProviderProps,
} from './types';

export const MenuContext = createContext<MenuContextProps>(defaultMenuContext);

export const MenuProvider: FC<MenuProviderProps> = (props) => {
  const { children, ...rest } = props;

  const { value } = useMenuProvider({
    ...defaultMenuContext,
    ...rest,
  });

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export const SubMenuContext = createContext<SubMenuContextProps>({});

export const SubMenuProvider: FC<SubMenuProviderProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <SubMenuContext.Provider value={rest}>{children}</SubMenuContext.Provider>
  );
};
