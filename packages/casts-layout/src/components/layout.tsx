import { forwardRef, Ref } from 'react';
import { useConfig } from '@casts/config-provider';

import { useLayout } from './hooks';
import type { LayoutProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/layout.scss';

export const Layout = forwardRef(
  (props: LayoutProps, ref: Ref<HTMLDivElement>) => {
    const { getPrefixCls } = useConfig();
    const { classes, children, ...rest } = useLayout({
      ...props,
      getPrefixCls,
    });

    return (
      <div className={classes} ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

Layout.displayName = 'Layout';
