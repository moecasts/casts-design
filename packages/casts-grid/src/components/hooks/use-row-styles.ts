import { useCallback, useState } from 'react';
import { isCanUseDocument, throttle, useEventListener } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { CSSProperties } from 'react';

import { GutterObject, UseRowStylesProps } from '../types';
import { calcRowGutterStyles, calcSize } from '../utils';

export const useRowStyles = (props: UseRowStylesProps) => {
  const { gutter, justify, align } = props;
  const { getPrefixCls } = useConfig();

  const [size, setSize] = useState<keyof GutterObject>(() => {
    if (isCanUseDocument()) {
      return calcSize(window.innerWidth);
    }

    return 'medium';
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSize = useCallback(
    throttle(() => {
      const newSize = calcSize(window.innerWidth);
      if (newSize !== size) {
        setSize(newSize);
      }
    }, 50),
    [],
  );
  useEventListener('resize', updateSize);

  const prefixCls = getPrefixCls('row');

  const classes = clsx(prefixCls, props.className, {
    [`${prefixCls}--${justify}`]: justify,
    [`${prefixCls}--${align}`]: align,
  });

  const styles: CSSProperties = {
    ...props.style,
    ...calcRowGutterStyles({
      gutter,
      size,
    }),
  };

  return {
    classes,
    styles,
    size,
  };
};
