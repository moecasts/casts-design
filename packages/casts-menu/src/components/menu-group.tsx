import { forwardRef, Ref } from 'react';

import { useMenuGroup } from './hooks';
import { MenuBlockType, MenuGroupProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/menu-group.scss';

export const MenuGroup = forwardRef(
  (props: MenuGroupProps, ref: Ref<HTMLDivElement>) => {
    const { children, label } = props;
    const { classes, labelClasses } = useMenuGroup(props);

    return (
      <div className={classes} ref={ref}>
        <div className={labelClasses}>{label}</div>
        {children}
      </div>
    );
  },
);

MenuGroup.displayName = MenuBlockType.MenuGroup;
