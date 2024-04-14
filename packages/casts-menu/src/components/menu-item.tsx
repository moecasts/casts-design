import {
  createElement,
  forwardRef,
  Ref,
  useImperativeHandle,
  useRef,
} from 'react';
import { noop, useDefaultProps, useLinkProps, useRipple } from '@casts/common';
import { useLink } from '@casts/config-provider';

import { defaultMenuItemProps } from './default-props';
import { useMenuItem } from './hooks';
import { MenuBlockType, MenuItemProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/menu-item.scss';

export const MenuItem = forwardRef(
  (props: MenuItemProps, ref: Ref<HTMLLIElement>) => {
    const propsWithDefault = useDefaultProps(props, defaultMenuItemProps);
    const { label, children, prefixIcon, suffixIcon, href } = propsWithDefault;

    const {
      classes,
      innerClasses,
      handleClick,
      handleKeyDown,
      disabled,
      contentClasses,
      prefixIconClasses,
      suffixIconClasses,
      focusable,
    } = useMenuItem(propsWithDefault);

    const menuItemRef = useRef<HTMLLIElement>(null);
    useRipple(menuItemRef, { disabled });

    useImperativeHandle(ref, () => menuItemRef.current as HTMLLIElement, [
      menuItemRef,
    ]);

    const linkProps = useLinkProps(propsWithDefault);
    const { handleLinkClick } = useLink({
      ...propsWithDefault,
      onClick: noop,
    });
    const innerTag = href ? 'a' : 'span';

    const inner = createElement(
      innerTag,
      {
        ...linkProps,
        tabIndex: focusable ? 0 : -1,
        className: innerClasses,
        href,
        onClick: handleLinkClick,
      },
      <>
        {prefixIcon && <span className={prefixIconClasses}>{prefixIcon}</span>}
        <span className={contentClasses}>{children || label}</span>
        {suffixIcon && <span className={suffixIconClasses}>{suffixIcon}</span>}
      </>,
    );

    return (
      <li
        className={classes}
        ref={menuItemRef}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role={'menuitem'}
        aria-disabled={disabled}
      >
        {inner}
      </li>
    );
  },
);

MenuItem.displayName = MenuBlockType.MenuItem;
