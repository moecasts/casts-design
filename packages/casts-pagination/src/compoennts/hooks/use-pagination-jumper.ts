import { CSSProperties, useEffect, useState } from 'react';
import { isNumber, isValueEmpty } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { UsePaginationJumperProps } from '../types';

export const usePaginationJumper = (props: UsePaginationJumperProps) => {
  const { className, style, pageCount, onCurrentConfirmChange } = props;

  const [current, setCurrent] = useState<number | undefined>(props.current);

  useEffect(() => {
    setCurrent(props.current);
  }, [props]);

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('pagination-jumper');

  /* --------------------------------- classes and style ---------------------------------------- */
  const classes = clsx(prefixCls, className);

  const styles: CSSProperties = { ...style };

  const gotoClasses = `${prefixCls}-goto`;
  const separatorClasses = `${prefixCls}-separator`;
  const pageCountClasses = `${prefixCls}-page-count`;
  const pageClasses = `${prefixCls}-page`;

  const handleChange = (value: number | undefined) => {
    setCurrent(value);
  };

  const handleCurrentConfirmChange = (value: number | undefined) => {
    // reset current if the input value is illegal number
    if (isValueEmpty(current) || !isNumber(current)) {
      setCurrent(props.current);
      return;
    }

    // if the input value is the same as the current value, do nothing
    if (props.current === value) {
      return;
    }

    onCurrentConfirmChange?.(value);
  };

  const isCurrentInvalid =
    !isNumber(current) || current > pageCount || current < 1;

  return {
    classes,
    styles,

    gotoClasses,
    separatorClasses,
    pageCountClasses,
    pageClasses,

    current,
    pageCount,

    isCurrentInvalid,

    handleChange,
    handleCurrentConfirmChange,
  };
};
