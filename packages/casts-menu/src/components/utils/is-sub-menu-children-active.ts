import { Children, ComponentType, ReactElement, ReactNode } from 'react';
import { isComponentOfType } from '@casts/common';

import { MenuItem } from '../menu-item';
import { SubMenu } from '../sub-menu';
import { MenuValue } from '../types';

export const isSubMenuChildrenActive = (
  children: ReactNode,
  active?: MenuValue,
) => {
  let activeFlag = false;
  Children.forEach(children as ReactElement[], (child: React.ReactElement) => {
    if (activeFlag) {
      return;
    }

    const childType = child.type as ComponentType;

    if (isComponentOfType(childType, SubMenu)) {
      activeFlag = isSubMenuChildrenActive(child.props.children, active);
    } else if (isComponentOfType(childType, MenuItem)) {
      activeFlag = active === child.props.value ? true : activeFlag;
    }
  });
  return activeFlag;
};
