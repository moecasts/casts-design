import { CSSProperties } from 'react';
import { isObject, isUndefined } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { useRowContext } from '../row';
import { BaseColProps, UseColStylesProps } from '../types';
import { calcColGutterStyles, formatFlex } from '../utils';

export const useColStyles = (props: UseColStylesProps) => {
  const { className, span, offset, pull, push, order, style, flex } = props;
  const { getPrefixCls } = useConfig();
  const { gutter, size } = useRowContext();

  const prefixCls = getPrefixCls('col');

  const allSizes = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];

  const sizeClasses = allSizes.reduce((acc, currSize) => {
    const sizeProp = (props as Record<PropertyKey, any>)[currSize];
    let sizeObj: Partial<BaseColProps> = {};
    if (typeof sizeProp === 'number') {
      sizeObj.span = sizeProp;
    } else if (isObject(sizeProp)) {
      sizeObj = sizeProp || {};
    }

    return {
      ...acc,
      [`${prefixCls}-${currSize}-${sizeObj.span}`]: sizeObj.span !== undefined,
      [`${prefixCls}-${currSize}-order-${sizeObj.order}`]:
        !isUndefined(sizeObj.order) && sizeObj.order >= 0,
      [`${prefixCls}-${currSize}-offset-${sizeObj.offset}`]:
        !isUndefined(sizeObj.offset) && sizeObj.offset >= 0,
      [`${prefixCls}-${currSize}-push-${sizeObj.push}`]:
        !isUndefined(sizeObj.push) && sizeObj.push >= 0,
      [`${prefixCls}-${currSize}-pull-${sizeObj.pull}`]:
        !isUndefined(sizeObj.pull) && sizeObj.pull >= 0,
    };
  }, {});

  const classes = clsx(
    prefixCls,
    className,
    {
      [`${prefixCls}-${span}`]: span !== undefined,
      [`${prefixCls}-offset-${offset}`]: offset !== undefined && offset >= 0,
      [`${prefixCls}-pull-${pull}`]: pull !== undefined && pull >= 0,
      [`${prefixCls}-push-${push}`]: push !== undefined && push >= 0,
      [`${prefixCls}-order-${order}`]: order !== undefined && order >= 0,
    },
    sizeClasses,
  );

  const colGutter = Array.isArray(gutter) && gutter.length ? gutter[0] : gutter;
  const styles: CSSProperties = {
    ...calcColGutterStyles({
      gutter: colGutter,
      size,
    }),
    flex: flex && formatFlex(flex),
    ...style,
  };

  return {
    classes,
    styles,
  };
};
