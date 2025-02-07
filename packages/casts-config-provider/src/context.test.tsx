import { ReactNode } from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  ConfigConsumer,
  defaultGetPrefixCls,
  defaultPrefixCls,
} from './context';
import { getGlobalConfig } from './global-config';
import { useConfig } from './hooks';
import { ConfigProvider } from './provider';
import { ConfigProviderProps } from './types';
const customRender = (
  ui: ReactNode,
  contextProps: Partial<ConfigProviderProps>,
) => render(<ConfigProvider {...contextProps}>{ui}</ConfigProvider>);

const getPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  const defaultPrefixCls = 'test-prefix';
  return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : `${defaultPrefixCls}`;
};

describe('ConfigProvider', () => {
  it('globalConfig', () => {
    const { getPrefixCls } = getGlobalConfig();
    expect(getPrefixCls).toBe(defaultGetPrefixCls);
  });
  it('defaultGetPrefixCls - customizePrefixCls', () => {
    const suffixCls = 'test';
    const customizePrefixCls = 'cpc';
    const prefixCls = defaultGetPrefixCls(suffixCls, customizePrefixCls);
    expect(prefixCls).toBe(`${customizePrefixCls}-${suffixCls}`);
  });
  it('defaultGetPrefixCls - empty params', () => {
    const prefixCls = defaultGetPrefixCls();
    expect(prefixCls).toBe(defaultPrefixCls);
  });
  it('default context', () => {
    const { result } = renderHook(() => useConfig());
    expect(result.current.getPrefixCls('test')).toBe(
      `${defaultPrefixCls}-test`,
    );
  });
  it('custom context', () => {
    customRender(
      <ConfigConsumer>
        {(value) => <span>Prefix Cls: {value.getPrefixCls('test')}</span>}
      </ConfigConsumer>,
      { getPrefixCls },
    );

    expect(screen.getByText(/^Prefix Cls:/).textContent).toBe(
      `Prefix Cls: ${getPrefixCls('test')}`,
    );
  });
});
