import { createContext, useContext } from 'react';
import { noop, useSetState } from '@casts/common';

export type AppContextValue = {
  themeMode: 'default' | 'dark' | 'custom';

  isAsideShouldFloat: boolean;
  asideVisible: boolean;
  toggleAsideVisible: () => void;
};

export type AppContextValueWithUpdater = AppContextValue & {
  setAppContext: ReturnType<typeof useSetState<AppContextValue>>[1];
};

export const defaultAppContextValue: AppContextValueWithUpdater = {
  themeMode: 'default',
  setAppContext: noop,

  /** aside hook returns */
  isAsideShouldFloat: false,
  asideVisible: false,
  toggleAsideVisible: noop,
};

export const AppContext = createContext<AppContextValueWithUpdater>(
  defaultAppContextValue,
);

export const useAppContext = () => useContext(AppContext);
