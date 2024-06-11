import { Children, ReactElement, ReactNode } from 'react';

import { MenuValue } from '../types';
import { isMenuItem, isSubMenu } from './is-component-type';

export const isSubMenuChildrenActive = (
  children: ReactNode,
  active?: MenuValue,
) => {
  let activeFlag = false;
  Children.forEach(children as ReactElement[], (child: React.ReactElement) => {
    if (activeFlag) {
      return;
    }
    if (isSubMenu(child)) {
      activeFlag = isSubMenuChildrenActive(child.props.children, active);
    } else if (isMenuItem(child)) {
      activeFlag = active === child.props.value ? true : activeFlag;
    }
  });
  return activeFlag;
};
