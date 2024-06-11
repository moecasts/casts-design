import { UseTabsBarProps } from './use-tab-bar';

export type TabsBarProps = Omit<
  UseTabsBarProps,
  'barRef' | 'barContainerRef' | 'itemsRef' | 'barScrollRef'
>;
