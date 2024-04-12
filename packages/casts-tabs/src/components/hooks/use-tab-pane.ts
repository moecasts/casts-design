import { CSSProperties } from 'react';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { UseTabPaneProps } from '../types';

export const useTabPane = (props: UseTabPaneProps) => {
  const { className, style } = props;
  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('tab-pane');

  const classes = clsx(prefixCls, className);

  const styles: CSSProperties = {
    ...style,
  };

  return {
    classes,
    styles,
  };
};
