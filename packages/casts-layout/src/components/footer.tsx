import { forwardRef, Ref } from 'react';
import { useConfig } from '@casts/config-provider';
import { useFooter } from './hooks';
import type { FooterProps } from './types';

export const Footer = forwardRef(
  (props: FooterProps, ref: Ref<HTMLDivElement>) => {
    const { getPrefixCls } = useConfig();
    const { classes, children, ...rest } = useFooter({
      ...props,
      getPrefixCls,
    });
    return (
      <footer className={classes} ref={ref} {...rest}>
        {children}
      </footer>
    );
  },
);

Footer.displayName = 'Layout.Footer';
