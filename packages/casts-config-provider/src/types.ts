import { GetPrefixCls } from '@casts/common';
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
};

export type ConfigProviderProps = Partial<Config> & {
  children: React.ReactNode;
};