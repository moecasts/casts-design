import { Children, ForwardedRef, forwardRef, isValidElement } from 'react';

import { TabsProvider } from './context';
import { useTabs } from './hooks';
import { TabPane } from './tab-pane';
import { TabsBar } from './tabs-bar';
import { TabsContent } from './tabs-content';
import { UseTabProps as TabsProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/tabs.scss';

export const Tabs = forwardRef(
  (props: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { classes, styles } = useTabs(props);

    const items = Children.map(props.children, (child) => {
      if (isValidElement(child) && child.type === TabPane) {
        return child;
      }
      return undefined;
    });

    const renderTabBar = <TabsBar items={items} />;

    const renderTabContent = <TabsContent items={items} />;

    return (
      <TabsProvider defaultValue={props.defaultValue}>
        <div ref={ref} className={classes} style={styles}>
          {renderTabBar}
          {renderTabContent}
        </div>
      </TabsProvider>
    );
  },
);

Tabs.displayName = 'Tabs';
