import { useCallback } from 'react';
import { useMemo } from 'react';
import {
  fallbackLocaleCode,
  LocaleCode,
  LocaleCodes,
} from '@casts/rd-vite/common';
import { useLocation } from 'react-router-dom';

import { useCurrentLocale } from './use-current-locale';
import { useRd } from './use-rd';

export const useLocaleLocation = (localeCodes: LocaleCodes) => {
  const [locale] = useCurrentLocale(localeCodes);
  const location = useLocation();

  const firstDiffLocale = useMemo(
    () => localeCodes.find((code) => code !== locale) || fallbackLocaleCode,
    [locale, localeCodes],
  );

  const { matches } = useRd();

  const getRouteBase = useCallback((): string => {
    const baseRoute = matches?.[0];
    return baseRoute?.pathname || '';
  }, [matches]);

  const getLocaleLocation = useCallback(
    (targetLocaleCode: LocaleCode) => {
      // const base = location.pathname;
      const base = getRouteBase();

      const baseWithoutLocale = base.replace(`/${locale}`, '');

      const pathnameWithoutLocale =
        location.pathname.replace(
          new RegExp(`^${base}(/|$)`),
          `${baseWithoutLocale}$1`,
        ) || '/';

      if (targetLocaleCode !== fallbackLocaleCode) {
        const routePrefix = `${baseWithoutLocale}/${targetLocaleCode}`.replace(
          /\/\//,
          '/',
        );
        const pathnameWithoutBase = location.pathname.replace(
          // to avoid stripped the first /
          base.replace(/^\/$/, '//'),
          '',
        );

        return `${routePrefix}${pathnameWithoutBase}`.replace(/\/\//g, '/');
      }

      return pathnameWithoutLocale;
    },
    [getRouteBase, locale, location.pathname],
  );

  return { firstDiffLocale, getLocaleLocation };
};
