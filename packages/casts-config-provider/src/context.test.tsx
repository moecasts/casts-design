import {
  ConfigConsumer,
  ConfigContextProps,
  ConfigProvider,
  defaultGetPrefixCls,
  defaultPrefixCls,
  getGlobalConfig,
  useConfig,
} from './context';
import { render, renderHook, screen } from '@testing-library/react';
import { ReactNode } from 'react';

const customRender = (ui: ReactNode, contextProps: ConfigContextProps) =>
  render(<ConfigProvider value={contextProps}>{ui}</ConfigProvider>);

const getPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;
  const defaultPrefixCls = 'test-prefix';
  return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : `${defaultPrefixCls}`;
};

describe('ConfigProvider', () => {
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
        {(value: ConfigContextProps) => (
          <span>Prefix Cls: {value.getPrefixCls('test')}</span>
        )}
      </ConfigConsumer>,
      { getPrefixCls },
    );

    expect(screen.getByText(/^Prefix Cls:/).textContent).toBe(
      `Prefix Cls: ${getPrefixCls('test')}`,
    );
  });
  it('globalConfig', () => {
    const { getPrefixCls } = getGlobalConfig();
    expect(getPrefixCls).toBe(defaultGetPrefixCls);
  });
});
