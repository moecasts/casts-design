import { GetPrefixCls } from '@casts/common';
import { Locale } from '@casts/locale';
import { type RouterProvider } from '@react-aria/utils';

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
  themeMode: 'default' | 'dark' | 'custom';
  /**
   * private flag, to check is the root ConfigProvider
   */
  _root: boolean;
};

export type ConfigProviderProps = Partial<Omit<Config, 'navigate'>> & {
  /**
   * Provides a client side router to all nested components such as
   * Link, Menu, Tabs, Table, etc.
   */
  navigate?: Parameters<typeof RouterProvider>[0]['navigate'];
  children: React.ReactNode;
};
