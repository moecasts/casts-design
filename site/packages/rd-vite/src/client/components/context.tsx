import { createContext, FC, useMemo } from 'react';
import { BaseComponentProps } from '@casts/common';
import { MenuObject } from '@casts/menu';
import { Navigator } from '@casts/rd-vite/types/navigator';
import { matchRoutes, RouteObject, useLocation } from 'react-router-dom';
import { rdProvider } from 'virtual:rd-provider';

import { LocaleCode, localeCodes } from '../../common/locale';
import { Source } from '../../types';
import { useCurrentLocale } from '../hooks';
import { getMenuDataFromRoute } from '../utils/route';

export const RdContext = createContext<{
  /**
   * Site name
   */
  name?: string;
  menu?: MenuObject[];
  sources?: Source[];
  nav?: Navigator[];
  matches?: Array<{ pathname: string; route: RouteObject }> | null;
  localeCode?: LocaleCode;
}>({});

export type RdProviderProps = BaseComponentProps;

export const RdProvider: FC<RdProviderProps> = (props) => {
  const { children } = props;

  const { routes, sources, navigators, ...rest } = rdProvider;

  const location = useLocation();
  const [localeCode] = useCurrentLocale(localeCodes);

  const matches = useMemo(() => matchRoutes(routes, location), [location]);

  const menu = useMemo(
    () => getMenuDataFromRoute({ routes, matches, localeCode }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [localeCode, matches],
  );

  const nav = useMemo(() => {
    return navigators[localeCode] || [];
  }, [localeCode, navigators]);

  return (
    <RdContext.Provider
      value={{ ...rest, menu, sources, nav, matches, localeCode }}
    >
      {children}
    </RdContext.Provider>
  );
};
