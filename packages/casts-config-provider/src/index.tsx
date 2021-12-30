import { createContext } from 'react';

export type Theme = {
  primaryColor?: string;
  infoColor?: string;
  successColor?: string;
  processingColor?: string;
  errorColor?: string;
  warningColor?: string;
};

export type ConfigContextProps = {
  getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
};

const defaultGetPrefixCls = (
  suffixCls?: string,
  customizePrefixCls?: string,
) => {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `casts-${suffixCls}` : 'casts';
};

const defaultConfig: ConfigContextProps = {
  getPrefixCls: defaultGetPrefixCls,
};

export const ConfigContext = createContext<ConfigContextProps>(defaultConfig);

export const ConfigConsumer = ConfigContext.Consumer;
