import {
  forwardRef,
  KeyboardEvent,
  Ref,
  useImperativeHandle,
  useRef,
} from 'react';
import {
  isKeyboardConfirm,
  isUndefined,
  useCollapse,
  useDefaultProps,
} from '@casts/common';
import { FlipVerticalArrowLine } from '@casts/icons';
import { Popup, PopupProps } from '@casts/popup';
import { CdsMotionDurationFast } from '@casts/theme';

import { defaultSubMenuProps } from './default-props';
import { useMenuContext, useSubMenu } from './hooks';
import { SubMenuProvider } from './menu-context';
import { MenuItem } from './menu-item';
import { MenuBlockType, SubMenuProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/sub-menu.scss';

export const DEFAULT_DURATION = parseFloat(CdsMotionDurationFast);

export const SubMenu = forwardRef(
  (props: SubMenuProps, ref: Ref<HTMLDivElement>) => {
    const propsWithDefault = useDefaultProps(props, defaultSubMenuProps);
    const { prefixIcon, label, children } = propsWithDefault;

    const duration = DEFAULT_DURATION;

    const {
      classes,
      subClasses,
      subStyles,
      innerClasses,
      innerStyles,
      popupClasses,
      arrowClasses,
      handleSubOpenChange,
      open,
      disabled,
      focusable,
      level,
      hideAfterClick,
    } = useSubMenu(propsWithDefault);

    const menuContext = useMenuContext();

    const { popupPlacement, collapse } = menuContext;

    const expandType = collapse ? 'popup' : menuContext.expandType;

    const rootRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => rootRef.current as HTMLDivElement, [
      rootRef,
    ]);

    const { collapseRef, collapseStyles } = useCollapse({
      open: open,
      duration,
    });

    const innerEvents =
      expandType === 'normal'
        ? {
            onClick: () => handleSubOpenChange(!open),
            onKeyDown: ({ e }: { e: KeyboardEvent<HTMLSpanElement> }) => {
              isKeyboardConfirm(e.code) && handleSubOpenChange(!open);
            },
          }
        : {};

    const popupProps: Partial<PopupProps> = { ...propsWithDefault.popupProps };
    if (expandType === 'popup') {
      popupProps.visible = open;
    }

    const getFlip = () => {
      if (expandType !== 'popup') {
        return open;
      }

      return !isUndefined(level) && level <= 1 && open;
    };

    const innerComponent = (
      <MenuItem
        prefixIcon={prefixIcon}
        suffixIcon={
          <FlipVerticalArrowLine flip={getFlip()} className={arrowClasses} />
        }
        activatable={false}
        disabled={disabled}
        focusable={focusable}
        className={innerClasses}
        style={innerStyles}
        {...innerEvents}
      >
        {label}
      </MenuItem>
    );

    const childComponent = (
      <>
        <Popup
          className={popupClasses}
          content={children}
          visible={expandType === 'popup' && open}
          onVisibleChange={handleSubOpenChange}
          disabled={disabled || expandType !== 'popup'}
          attach={rootRef}
          placement={popupPlacement}
          {...popupProps}
        >
          {innerComponent}
        </Popup>
        {expandType === 'normal' && (
          <ul
            className={subClasses}
            ref={collapseRef as Ref<HTMLUListElement>}
            style={{ ...subStyles, ...collapseStyles }}
            aria-hidden={!open || disabled}
          >
            {children}
          </ul>
        )}
      </>
    );

    return (
      <SubMenuProvider
        open={open}
        onOpenChange={handleSubOpenChange}
        disabled={disabled}
        level={level}
        expandType={expandType}
        hideAfterClick={hideAfterClick}
      >
        <div className={classes} ref={rootRef}>
          {childComponent}
        </div>
      </SubMenuProvider>
    );
  },
);

SubMenu.displayName = MenuBlockType.SubMenu;
