import { createElement, forwardRef, Ref } from 'react';

import { useColStyles } from './hooks';
import { ColProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/col.scss';

export const Col = forwardRef((props: ColProps, ref: Ref<HTMLElement>) => {
  const { tag = 'div', children } = props;

  const { classes, styles } = useColStyles({
    ...props,
  });

  return createElement(
    tag,
    {
      ref,
      className: classes,
      style: styles,
    },
    children,
  );
});

Col.displayName = 'Col';
