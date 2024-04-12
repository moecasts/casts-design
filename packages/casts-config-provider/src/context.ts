import { createContext } from 'react';
import { GetPrefixCls } from '@casts/common';
import { zhCN } from '@casts/locale';

import { Config } from './types';
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

export const defaultConfig: Config = {
  prefixCls: 'cds',
  getPrefixCls: defaultGetPrefixCls,
  locale: zhCN,
  themeMode: 'default',
  _root: false,
};

export const ConfigContext = createContext<Config>(defaultConfig);

export const ConfigConsumer = ConfigContext.Consumer;
