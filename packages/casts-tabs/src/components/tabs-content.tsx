import { Children, CSSProperties, ForwardedRef, forwardRef } from 'react';
import { BaseComponentProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { useTabsContext } from './context';

export type TabsContentProps = UseTabsContentProps;

export const TabsContent = forwardRef(
  (props: TabsContentProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { classes, styles } = useTabsContent(props);
    const { getPrefixCls } = useConfig();

    const { value } = useTabsContext();

    const contents = Children.map(props.items, (child) => {
      if (value !== child.props.value) {
        return null;
      }

      const { children } = child.props;
      const prefixCls = getPrefixCls('tabs-content-item');

      return <div className={prefixCls}>{children}</div>;
    });

    return (
      <div className={classes} style={styles} ref={ref} role="tabpanel">
        {contents}
      </div>
    );
  },
);

export type UseTabsContentProps = BaseComponentProps & {
  items: any;
};

export const useTabsContent = (props: UseTabsContentProps) => {
  const { className, style } = props;
  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('tabs-content');

  const classes = clsx(prefixCls, className);

  const styles: CSSProperties = {
    ...style,
  };

  return {
    classes,
    styles,
  };
};

TabsContent.displayName = 'TabsContent';
