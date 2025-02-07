import { forwardRef, Ref } from 'react';
import { useConfig } from '@casts/config-provider';

import { useHeader } from './hooks';
import type { HeaderProps } from './types';

export const Header = forwardRef(
  (props: HeaderProps, ref: Ref<HTMLDivElement>) => {
    const { getPrefixCls } = useConfig();
    const { classes, children, ...rest } = useHeader({
      ...props,
      getPrefixCls,
    });
    return (
      <header className={classes} ref={ref} {...rest}>
        {children}
      </header>
    );
  },
);

Header.displayName = 'Layout.Header';
