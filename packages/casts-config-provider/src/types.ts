import { GetPrefixCls, type useSetState } from '@casts/common';
import { Locale } from '@casts/locale';

export type Theme = {
  brandColor?: string;
  infoColor?: string;
  successColor?: string;
  processingColor?: string;
  errorColor?: string;
  warningColor?: string;
};

export type Config = {
  prefixCls?: string;
  getPrefixCls: GetPrefixCls;
  locale: Locale;
  themeMode: 'default' | 'dark';
};

export type ConfigWithUpdater = Config & {
  setConfig: ReturnType<typeof useSetState<Config>>[1];
};

export type ConfigProviderProps = Partial<Config> & {
  children: React.ReactNode;
};
