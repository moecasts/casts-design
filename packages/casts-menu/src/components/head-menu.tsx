import { ForwardedRef, forwardRef } from 'react';
import { omit, useDefaultProps } from '@casts/common';
import { MoreLine } from '@casts/icons';

import { defaultHeadMenuProps } from './default-props';
import { useHeadMenu, useMenuElements } from './hooks';
import { MenuProvider } from './menu-context';
import { OverflowWrap } from './overflow-wrap';
import { SubMenu } from './sub-menu';
import { HeadMenuProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/head-menu.scss';

export const HeadMenu = forwardRef(
  (props: HeadMenuProps, ref: ForwardedRef<HTMLDivElement>) => {
    const propsWithDefault = useDefaultProps(props, defaultHeadMenuProps);
    const {
      prefix,
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

      hideAfterClick,

      ...restProps
    } = propsWithDefault;

    const {
      classes,
      styles,
      logoClasses,
      contentClasses,
      operationsClasses,
      prefixClasses,
    } = useHeadMenu(propsWithDefault);

    const providerProps = {
      value,
      defaultValue,
      size,
      expandType,
      popupPlacement,
      collapse,
      onChange,
      hideAfterClick,
    };

    const { elements } = useMenuElements(items);

    return (
      <MenuProvider {...providerProps}>
        <div
          className={classes}
          ref={ref}
          style={styles}
          {...omit(restProps, [
            'className',
            'style',
            'width',
            'hideAfterClick',
          ])}
        >
          {prefix && <div className={prefixClasses}>{prefix}</div>}
          {logo && <div className={logoClasses}>{logo}</div>}
          <ul className={contentClasses}>
            <OverflowWrap
              renderCollapse={({ children }) => (
                <SubMenu label={<MoreLine />}>{children}</SubMenu>
              )}
            >
              {children || elements}
            </OverflowWrap>
          </ul>
          {operations && <div className={operationsClasses}>{operations}</div>}
        </div>
      </MenuProvider>
    );
  },
);

HeadMenu.displayName = 'HeadMenu';
