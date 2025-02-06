import { forwardRef, Ref } from 'react';
import { omit, useDefaultProps } from '@casts/common';

import { defaultMenuProps } from './default-props';
import { useMenu, useMenuElements } from './hooks';
import { MenuProvider } from './menu-context';
import { MenuProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/menu.scss';

export const Menu = forwardRef((props: MenuProps, ref: Ref<HTMLDivElement>) => {
  const propsWithDefault = useDefaultProps(props, defaultMenuProps);
  const {
    children,
    logo,
    operations,

    value,
    defaultValue,
    size,
    expandType,
    popupPlacement,
    collapse,
    onChange,
    items,

    ...restProps
  } = propsWithDefault;

  const { classes, contentClasses, operationsClasses, logoClasses, styles } =
    useMenu(propsWithDefault);

  const providerProps = {
    value,
    defaultValue,
    size,
    expandType,
    popupPlacement,
    collapse,
    onChange,
  };

  const { elements } = useMenuElements(items);

  return (
    <MenuProvider {...providerProps}>
      <div
        className={classes}
        ref={ref}
        style={styles}
        {...omit(restProps, ['className', 'style', 'width', 'hideAfterClick'])}
      >
        {logo && <div className={logoClasses}>{logo}</div>}
        <ul className={contentClasses}>{children || elements}</ul>
        {operations && <div className={operationsClasses}>{operations}</div>}
      </div>
    </MenuProvider>
  );
});

Menu.displayName = 'Menu';
