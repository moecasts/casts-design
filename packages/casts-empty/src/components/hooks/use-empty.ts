import { createElement, CSSProperties } from 'react';
import { useConfig } from '@casts/config-provider';
import { EmptyDrawerFill } from '@casts/icons';
import { translate } from '@casts/locale';
import { clsx } from 'clsx';

import { UseEmptyProps } from '../types';

export const useEmpty = (props: UseEmptyProps) => {
  const { style, className, imageStyle, imageClassName, ...restProps } = props;
  const { getPrefixCls, locale } = useConfig();

  const prefixCls = getPrefixCls('empty');

  const description = props.description ?? translate(locale.empty.description);

  const image = props.image ?? createElement(EmptyDrawerFill);

  const classes = clsx(prefixCls, className);

  const imageClasses = clsx(`${prefixCls}-image`, imageClassName);
  const imageStyles: CSSProperties = { ...imageStyle };
  const descriptionClasses = clsx(`${prefixCls}-description`);

  const styles: CSSProperties = { ...style };

  return {
    ...restProps,
    classes,
    styles,
    imageClasses,
    imageStyles,
    descriptionClasses,
    description,
    image,
  };
};
