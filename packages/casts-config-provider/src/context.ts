import { createContext, useContext } from 'react';

export const defaultPrefixCls = 'cds';
// let globalPrefixCls: string;

export type ConfigContextProps = {
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
};

export const defaultGetPrefixCls = (
  suffixCls?: string,
  customizePrefixCls?: string,
) => {
  const getCompletePrefixCls = ({
    prefixCls,
    suffixCls,
  }: {
    prefixCls?: string;
    suffixCls?: string;
  }) => [prefixCls, suffixCls].filter((text) => !!text).join('-');

  return getCompletePrefixCls({
    prefixCls: customizePrefixCls || defaultPrefixCls,
    suffixCls,
  });
};

const defaultConfig: ConfigContextProps = {
  getPrefixCls: defaultGetPrefixCls,
};

export const getGlobalConfig = () => ({
  getPrefixCls: defaultGetPrefixCls,
});

export const ConfigContext = createContext<ConfigContextProps>(defaultConfig);

export const ConfigConsumer = ConfigContext.Consumer;

export const ConfigProvider = ConfigContext.Provider;

export const useConfig = () => {
  return useContext(ConfigContext);
};
