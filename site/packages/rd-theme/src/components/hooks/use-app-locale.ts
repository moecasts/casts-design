import { useEffect, useState } from 'react';
import * as Locale from '@casts/locale';
import { useRd } from '@casts/rd-vite/client/hooks/use-rd';

function convertLocaleFormat(locale: string): string {
  return locale.replace(/-/g, '');
}

export const useAppLocale = () => {
  const { localeCode } = useRd();

  const [locale, setLocale] = useState(Locale.enUS);

  useEffect(() => {
    let locale = Locale.enUS;

    if (localeCode) {
      const localeCodeInFormat = convertLocaleFormat(localeCode);

      const newLocale = Locale[localeCodeInFormat as keyof typeof Locale];

      if (newLocale) {
        locale = newLocale as any;
      }
    }

    setLocale(locale);
  }, [localeCode]);

  return {
    locale,
  };
};
