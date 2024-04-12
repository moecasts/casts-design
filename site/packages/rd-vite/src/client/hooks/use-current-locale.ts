import { useCallback } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { fallbackLocaleCode, LocaleCodes } from '../../common/locale';

export const useCurrentLocale = (localeCodes: LocaleCodes) => {
  const localeRE = useMemo(
    () => new RegExp(`^/(${localeCodes.join('|')})`),
    [localeCodes],
  );

  const location = useLocation();

  const getCurrentLocale = useCallback(() => {
    const locale = localeRE.exec(location.pathname)?.[1];
    return locale || fallbackLocaleCode;
  }, [localeRE, location.pathname]);

  const [locale, setLocale] = useState(() => getCurrentLocale());

  useEffect(() => {
    const locale = getCurrentLocale();
    setLocale(locale || fallbackLocaleCode);
  }, [getCurrentLocale]);

  return [locale, locale === fallbackLocaleCode] as const;
};
