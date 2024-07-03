import { FC, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Anchor, AnchorProps } from '@casts/anchor';
import { BaseComponentProps, isCanUseDocument } from '@casts/common';
import clsx from 'clsx';

import { getPrefixCls } from '../../common';

export type TocProps = BaseComponentProps & {
  data?: AnchorProps['items'];
};

export const Toc: FC<TocProps> = (props) => {
  const { className, data } = props;

  const prefixCls = getPrefixCls('toc');

  const classes = clsx(prefixCls, className);

  const containerRef = useRef(
    isCanUseDocument() ? document.querySelector('.rd-main-content') : null,
  );

  if (!containerRef.current) {
    return null;
  }

  const children = (
    <div className={classes}>
      <Anchor scrollOffsetY={-160} items={data} />
    </div>
  );
  return createPortal(children, containerRef.current);
};
