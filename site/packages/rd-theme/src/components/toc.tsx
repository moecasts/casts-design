import { FC, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Affix } from '@casts/affix';
import { Anchor, AnchorProps } from '@casts/anchor';
import { BaseComponentProps } from '@casts/common';
import clsx from 'clsx';

import { getPrefixCls } from '../common';

export type TocProps = BaseComponentProps & {
  data?: AnchorProps['items'];
};

export const Toc: FC<TocProps> = (props) => {
  const { className, data } = props;

  const prefixCls = getPrefixCls('toc');

  const classes = clsx(prefixCls, className);

  const containerRef = useRef(document.querySelector('.rd-main-content'));

  if (!containerRef.current) {
    return null;
  }

  const children = (
    <div className={classes}>
      <Affix>
        <Anchor items={data} />
      </Affix>
    </div>
  );
  return createPortal(children, containerRef.current);
};