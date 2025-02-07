import { ForwardedRef, forwardRef, ReactNode } from 'react';

import { useTabPane } from './hooks/use-tab-pane';
import { TabValue, UseTabPaneProps } from './types';

export type TabPaneProps = UseTabPaneProps & {
  label: ReactNode;
  value: TabValue;
  disabled?: boolean;
};

export const TabPane = forwardRef(
  (props: TabPaneProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { children } = props;
    const { classes, styles } = useTabPane(props);

    return (
      <div className={classes} style={styles} ref={ref}>
        {children}
      </div>
    );
  },
);

TabPane.displayName = 'TabPane';
