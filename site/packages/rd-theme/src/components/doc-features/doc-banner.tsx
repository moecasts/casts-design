import { useRef } from 'react';
import { useScroll } from '@casts/common';
import { useRd } from '@casts/rd-vite/client';
import { Heading } from '@casts/typography';
import clsx from 'clsx';

import { getPrefixCls } from '../../common';

import '../styles/doc-banner.scss';

export const DocBanner = () => {
  const { matches } = useRd();

  const currentRoute = matches?.[matches.length - 1].route;

  const prefixCls = getPrefixCls('doc-banner');

  const meta = currentRoute?.meta;

  const scroll = useScroll();

  const containerRef = useRef<HTMLDivElement>(null);

  const getStickyBottomOffsetTop = (element: HTMLElement | null) => {
    if (!element) {
      return;
    }

    // 获取元素的顶部偏移量
    const top = element.offsetTop;

    // 获取元素的高度
    const height = element.offsetHeight;

    // 获取文档的滚动顶部偏移量
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 计算元素底边距离滚动顶部的距离
    // 元素的顶部偏移量 + 元素的高度 - 当前滚动的顶部偏移量
    return top + height - scrollTop;
  };

  const stickyOffsetTop = getStickyBottomOffsetTop(containerRef.current);

  const stickyClasses = clsx(
    `${prefixCls}-container`,
    `${prefixCls}-container--sticky`,
    {
      [`${prefixCls}-container--fixed`]:
        stickyOffsetTop && (scroll?.top || 0) > stickyOffsetTop,
    },
  );

  if (!meta?.title) {
    return null;
  }

  return (
    <>
      <div className={`${prefixCls}-container`} ref={containerRef}>
        <div className={prefixCls}>
          <Heading level={1} className={`${prefixCls}-title`}>
            {meta.title}
          </Heading>
          {meta.description && (
            <p className={`${prefixCls}-subtitle`}>{meta.description}</p>
          )}
        </div>
      </div>
      <div className={stickyClasses}>
        <div className={`${prefixCls} ${prefixCls}--sticky`}>
          <Heading level={2} className={`${prefixCls}-title`}>
            {meta.title}
          </Heading>
        </div>
      </div>
    </>
  );
};
