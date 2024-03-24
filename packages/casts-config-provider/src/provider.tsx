import { FC, useEffect } from 'react';
import { useSetState } from '@casts/common';

import { ConfigContext, defaultConfig } from './context';
import { setGlobalConfig } from './global-config';
import { ConfigProviderProps, ConfigWithUpdater } from './types';
import { getCompletePrefixCls } from './utils';

export const ConfigProvider: FC<ConfigProviderProps> = (props) => {
  const { children, ...globalConfig } = props;

  if (globalConfig.prefixCls && !globalConfig.getPrefixCls) {
    globalConfig.getPrefixCls = (suffixCls, customizePrefixCls) =>
      getCompletePrefixCls({
        prefixCls: customizePrefixCls || globalConfig.prefixCls,
        suffixCls,
      });
  }

  const [config, setConfig] = useSetState<ConfigWithUpdater>(() => {
    return Object.assign({}, defaultConfig, globalConfig);
  });

  useEffect(() => {
    setGlobalConfig(config);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  useEffect(() => {
    if (!config.themeMode) {
      return;
    }

    document.documentElement.setAttribute('theme-mode', config.themeMode);
  }, [config.themeMode]);

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
