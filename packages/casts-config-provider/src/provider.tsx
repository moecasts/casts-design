import { FC, useEffect } from 'react';
import { noop, useSetState } from '@casts/common';

import { ConfigContext, defaultConfig } from './context';
import { setGlobalConfig } from './global-config';
import { useConfig } from './hooks';
import { ConfigProviderProps, ConfigWithUpdater } from './types';
import { getCompletePrefixCls } from './utils';

export const ConfigProvider: FC<ConfigProviderProps> = (props) => {
  const { children, ...globalConfig } = props;

  const parentConfig = useConfig();

  const isRootConfigProvider = parentConfig.setConfig === noop;

  if (globalConfig.prefixCls && !globalConfig.getPrefixCls) {
    globalConfig.getPrefixCls = (suffixCls, customizePrefixCls) =>
      getCompletePrefixCls({
        prefixCls: customizePrefixCls || globalConfig.prefixCls,
        suffixCls,
      });
  }

  const [config, setConfig] = useSetState<ConfigWithUpdater>(() => {
    return Object.assign({}, defaultConfig, parentConfig, globalConfig);
  });

  useEffect(() => {
    // only set global config when it is root config provider
    if (!isRootConfigProvider) {
      return;
    }

    setGlobalConfig(config);
  }, [isRootConfigProvider, config]);

  useEffect(() => {
    // only set theme mode when it is root config provider
    if (!isRootConfigProvider || !config.themeMode) {
      return;
    }

    document.documentElement.setAttribute('theme-mode', config.themeMode);
  }, [isRootConfigProvider, config.themeMode]);

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        setConfig,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
