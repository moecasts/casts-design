import { ReactNode, RefObject } from 'react';
import { omit } from '@casts/common';

import { useOverflowWrap } from './hooks';
import { OverflowWrapProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/overflow-wrap.scss';

export const OverflowWrap = (props: OverflowWrapProps) => {
  const { children, ...rest } = props;
  const { classes, wrapRef, renderChildren } = useOverflowWrap(props);

  return (
    <div
      className={classes}
      ref={wrapRef as RefObject<HTMLDivElement>}
      {...omit(rest, 'renderCollapse')}
    >
      {renderChildren(children as ReactNode[])}
    </div>
  );
};
