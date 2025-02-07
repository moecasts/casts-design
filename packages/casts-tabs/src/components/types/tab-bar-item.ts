import { ReactNode, Ref } from 'react';
import { BaseComponentProps } from '@casts/common';

import { TabValue } from './common';

export type TabsBarItemProps = UseTabsBarItemProps;

export type UseTabsBarItemProps = BaseComponentProps & {
  disabled?: boolean;
  label: ReactNode;
  value?: TabValue;
  itemRef?: Ref<HTMLButtonElement>;
};
