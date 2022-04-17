import { createContext, useContext } from 'react';

export type Theme = {
  primaryColor?: string;
  infoColor?: string;
  successColor?: string;
  processingColor?: string;
  errorColor?: string;
  warningColor?: string;
};

const defaultPrefixCls = 'casts';
// let globalPrefixCls: string;

export type ConfigContextProps = {
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
};

const defaultGetPrefixCls = (
  suffixCls?: string,
  customizePrefixCls?: string,
) => {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : `${defaultPrefixCls}`;
};

const defaultConfig: ConfigContextProps = {
  getPrefixCls: defaultGetPrefixCls,
};

export const globalConfig = () => ({
  getPrefixCls: defaultGetPrefixCls,
});

export const ConfigContext = createContext<ConfigContextProps>(defaultConfig);

export const ConfigConsumer = ConfigContext.Consumer;

export const ConfigProvider = ConfigContext.Provider;

export const useConfig = () => {
  return useContext(ConfigContext);
};
