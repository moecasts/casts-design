import { FC, ReactNode, useEffect } from 'react';
import { useSetState } from '@casts/common';

import { useAside } from '../hooks';
import { AppContext, AppContextValue, defaultAppContextValue } from './context';

export const AppProvider: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  const asideHook = useAside();

  const [appContext, setAppContext] = useSetState<AppContextValue>(
    defaultAppContextValue,
  );

  useEffect(() => {
    // only set theme mode when it is root appContext provider
    if (!appContext.themeMode) {
      return;
    }

    document.documentElement.setAttribute('theme-mode', appContext.themeMode);
  }, [appContext.themeMode]);

  return (
    <AppContext.Provider
      value={{
        ...appContext,
        ...asideHook,
        setAppContext,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
