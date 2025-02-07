import { useEffect, useState } from 'react';
import * as locales from '@casts/locale';
import { useRd } from '@casts/rd-vite/client/hooks/use-rd';

function convertLocaleFormat(locale: string): string {
  return locale.replace(/-/g, '');
}

export const useAppLocale = () => {
  const { localeCode } = useRd();

  const [locale, setLocale] = useState<any>(locales.enUS);

  useEffect(() => {
    let locale = locales.enUS;

    if (localeCode) {
      const localeCodeInFormat = convertLocaleFormat(localeCode);

      const newLocale = locales[localeCodeInFormat as keyof typeof locales];

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
