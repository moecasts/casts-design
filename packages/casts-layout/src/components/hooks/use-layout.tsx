import { Children, ReactElement, useMemo } from 'react';
import clsx from 'clsx';

import { Aside } from '../aside';
import { UseLayoutProps } from '../types';

export const useLayout = (props: UseLayoutProps) => {
  const { getPrefixCls, className, children, ...rest } = props;
  const prefixCls = getPrefixCls('layout');
  const withAside = useMemo(() => {
    let hasAside = false;
    Children.forEach(children, (child) => {
      if ((child as ReactElement)?.type === Aside && !hasAside) {
        hasAside = true;
      }
    });
    return hasAside;
  }, [children]);

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--with-aside`]: withAside,
  });

  return {
    ...rest,
    classes,
    children,
  };
};
