import { FC, useEffect } from 'react';
import { merge } from '@casts/common';

import { ConfigContext, defaultConfig } from './context';
import { setGlobalConfig } from './global-config';
import { useConfig } from './hooks';
import { ConfigProviderProps } from './types';
import { getCompletePrefixCls } from './utils';

export const ConfigProvider: FC<ConfigProviderProps> = (props) => {
  const { children, ...globalConfig } = props;

  const parentConfig = useConfig();

  if (globalConfig.prefixCls && !globalConfig.getPrefixCls) {
    globalConfig.getPrefixCls = (suffixCls, customizePrefixCls) =>
      getCompletePrefixCls({
        prefixCls: customizePrefixCls || globalConfig.prefixCls,
        suffixCls,
      });
  }

  const config = merge({}, defaultConfig, parentConfig, globalConfig, {
    _root: !parentConfig._root,
  });

  const isRootConfigProvider = config._root;

  useEffect(() => {
    // only set global config when it is root config provider
    if (!isRootConfigProvider) {
      return;
    }

    setGlobalConfig(config);
  }, [isRootConfigProvider, config]);

  return (
    <ConfigContext.Provider
      value={{
        ...config,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
