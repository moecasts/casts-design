import { forwardRef, Ref } from 'react';
import { useConfig } from '@casts/config-provider';

import { useAside } from './hooks';
import { AsideProps } from './types';

export const Aside = forwardRef((props: AsideProps, ref: Ref<HTMLElement>) => {
  const { getPrefixCls } = useConfig();
  const { classes, children, ...rest } = useAside({
    ...props,
    getPrefixCls,
  });

  return (
    <aside className={classes} ref={ref} {...rest}>
      {children}
    </aside>
  );
});

Aside.displayName = 'Layout.Aside';
