import { createContext } from 'react';
import { GetPrefixCls, noop } from '@casts/common';
import { zhCN } from '@casts/locale';

import { ConfigWithUpdater } from './types';
import { getCompletePrefixCls } from './utils';

export const defaultPrefixCls = 'cds';

export const defaultGetPrefixCls: GetPrefixCls = (
  suffixCls,
  customizePrefixCls,
) =>
  getCompletePrefixCls({
    prefixCls: customizePrefixCls || defaultPrefixCls,
    suffixCls,
  });

export const defaultConfig: ConfigWithUpdater = {
  prefixCls: 'cds',
  getPrefixCls: defaultGetPrefixCls,
  locale: zhCN,
  themeMode: 'default',
  setConfig: noop,
};

export const ConfigContext = createContext<ConfigWithUpdater>(defaultConfig);

export const ConfigConsumer = ConfigContext.Consumer;
