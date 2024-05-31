import { CSSProperties, KeyboardEvent } from 'react';
import { isKeyboardConfirm } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { PaginationItemValue } from '../types';
import { UsePaginationItemProps } from '../types/pagination-item';

export const usePaginationItem = (props: UsePaginationItemProps) => {
  const {
    page,
    current,
    className,
    style,
    onChange,
    render,
    disabled,
    ...rest
  } = props;

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('pagination-item');

  const btnPrefixCls = getPrefixCls('pagination-btn');

  const classes = clsx(prefixCls, btnPrefixCls, className, {
    [`${btnPrefixCls}--active`]: page === current,
    [`${btnPrefixCls}--disabled`]: disabled,
  });

  const styles: CSSProperties = { ...style };

  const handleClick = () => {
    onChange?.(page);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (!isKeyboardConfirm(event.code)) {
      return;
    }
    onChange?.(page);
  };

  const renderContent = (page: PaginationItemValue) => {
    if (render) {
      return render(page);
    }

    return page;
  };

  return {
    ...rest,
    classes,
    styles,
    page,
    handleClick,
    handleKeyDown,

    renderContent,
    disabled,
  };
};
