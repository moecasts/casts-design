import { useEffect, useRef } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { useAnchorContext } from '../anchor-context';
import { UseAnchorProps } from '../types';

export const useAnchor = (props: UseAnchorProps) => {
  const { direction } = props;

  const isHorizontal = direction === 'horizontal';
  /* --------------------------------- classes ---------------------------------------- */
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('anchor');
  const classes = clsx(prefixCls, {
    [`${prefixCls}--${direction}`]: direction,
  });
  const cursorClasses = `${prefixCls}-cursor`;

  const wrapRef = useRef<HTMLUListElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const { activeLink } = useAnchorContext();

  const updateCursor = () => {
    if (!wrapRef.current || !cursorRef.current) {
      return;
    }

    const activeLinkNode = wrapRef.current.querySelector(
      `.${prefixCls}-link--active  .${prefixCls}-link-title`,
    ) as HTMLElement | undefined;

    const { style: cursorStyle } = cursorRef.current;
    if (!activeLinkNode) {
      cursorStyle.height = '0px';
      return;
    }
    cursorStyle.top = isHorizontal ? '' : `${activeLinkNode.offsetTop}px`;
    cursorStyle.height = isHorizontal ? '' : `${activeLinkNode.clientHeight}px`;
    cursorStyle.left = isHorizontal ? `${activeLinkNode.offsetLeft}px` : '';
    cursorStyle.width = isHorizontal ? `${activeLinkNode.clientWidth}px` : '';
  };

  useEffect(() => {
    updateCursor();
  }, [activeLink]);

  return {
    wrapRef,
    cursorRef,

    classes,
    cursorClasses,
  };
};
