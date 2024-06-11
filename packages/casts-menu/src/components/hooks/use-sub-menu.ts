import { CSSProperties, useState } from 'react';
import { formatSizeUnit, getPriorityValue, has } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { PopupProps } from '@casts/popup';
import clsx from 'clsx';

import { UseSubMenuProps } from '../types';
import { isExpandNormal, isSubMenuChildrenActive } from '../utils';
import { useMenuContext, useSubMenuContext } from './use-menu-context';

export const useSubMenu = (props: UseSubMenuProps) => {
  const { className, children, ...rest } = props;
  const { getPrefixCls } = useConfig();

  const menuContext = useMenuContext();
  const { size, active, collapse } = menuContext;

  const parentContext = useSubMenuContext();

  const hideAfterClick = getPriorityValue(
    props.hideAfterClick,
    parentContext.hideAfterClick,
    menuContext.hideAfterClick,
  );

  const expandType = collapse ? 'popup' : menuContext.expandType;

  const [_open, setOpen] = useState(false);

  const open =
    has(parentContext, 'open') && expandType === 'popup'
      ? parentContext.open && _open
      : _open;

  const prefixCls = getPrefixCls('sub-menu');

  const {
    open: parentOpen,
    disabled: parentDisabled,
    level: parentLevel = 0,
  } = useSubMenuContext();

  const disabled = props.disabled ?? parentDisabled;
  const focusable = parentOpen !== false && !disabled;

  const level = parentLevel + 1;

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--${size}`]: size,
    [`${prefixCls}--open`]: open,
    [`${prefixCls}--active`]:
      active && isSubMenuChildrenActive(children, active),
    [`${prefixCls}--disabled`]: disabled,
    [`${prefixCls}--${expandType}`]: expandType,
  });

  const innerClasses = clsx(`${prefixCls}-inner`, {
    [`${prefixCls}-inner--active`]:
      active && isSubMenuChildrenActive(children, active),
    [`${prefixCls}-inner--disabled`]: disabled,
  });

  const INDENT_START = 30;
  const INDENT_SIZE = 12;

  const innerStyles = {
    '--padding-indent':
      isExpandNormal(expandType) && parentLevel
        ? formatSizeUnit(INDENT_START + (parentLevel - 1) * INDENT_SIZE)
        : '',
  } as CSSProperties;

  const prefixIconClasses = `${prefixCls}-prefix-icon`;
  const labelClasses = `${prefixCls}-label`;

  /* --------------------------------- menu sub ---------------------------------------- */
  const subClasses = getPrefixCls('menu-sub');

  const subStyles = {
    '--padding-indent':
      isExpandNormal(expandType) &&
      formatSizeUnit(INDENT_START + parentLevel * INDENT_SIZE),
  } as CSSProperties;

  /* --------------------------------- popup ---------------------------------------- */
  const popupClasses = clsx(`${prefixCls}-popup`);

  const handleSubOpenChange: PopupProps['onVisibleChange'] = (
    open: boolean,
  ) => {
    if (disabled) {
      return;
    }

    setOpen(open);
    if (expandType === 'popup') {
      parentContext.onOpenChange?.(open);
    }
  };

  /* --------------------------------- arrow ---------------------------------------- */
  const arrowClasses = clsx(`${prefixCls}-arrow`);

  return {
    ...rest,
    classes,
    subClasses,
    subStyles,
    innerClasses,
    innerStyles,
    prefixIconClasses,
    labelClasses,
    popupClasses,
    arrowClasses,
    handleSubOpenChange,
    open,
    disabled,
    focusable,
    level,
    expandType,
    hideAfterClick,
  };
};
