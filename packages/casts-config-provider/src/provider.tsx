import { FC, useEffect, useState } from 'react';

import { ConfigContext, defaultConfig } from './context';
import { setGlobalConfig } from './global-config';
import { ConfigProviderProps } from './types';
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

  const [config] = useState(() => {
    return Object.assign({}, defaultConfig, globalConfig);
  });

  useEffect(() => {
    setGlobalConfig(globalConfig);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

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
