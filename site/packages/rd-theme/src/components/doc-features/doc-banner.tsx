import { useRef } from 'react';
import { Breadcrumbs } from '@casts/breadcrumbs';
import { identity, isEmpty, useScroll } from '@casts/common';
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

    const rect = element.getBoundingClientRect();

    // 获取元素的顶部偏移量
    const top = rect.top;

    // 获取元素的高度
    const height = rect.height;

    // 获取文档的滚动顶部偏移量
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 计算元素底边距离滚动顶部的距离
    // 元素的顶部偏移量 + 元素的高度 - 当前滚动的顶部偏移量
    return top + height + scrollTop;
  };

  const stickyOffsetTop =
    (getStickyBottomOffsetTop(containerRef.current) || 0) - 76 - 64;

  const isFixed =
    stickyOffsetTop > 0 && scroll?.top && scroll.top > stickyOffsetTop;

  const classes = clsx(`${prefixCls}-container`, {
    [`${prefixCls}-container--fixed`]: isFixed,
  });

  const stickyClasses = clsx(
    `${prefixCls}-container`,
    `${prefixCls}-container--sticky`,
    {
      [`${prefixCls}-container--fixed`]: isFixed,
    },
  );

  const path = [
    meta?.nav && {
      label: meta.nav?.title,
      href: meta.nav?.path,
    },
    meta?.group && {
      label: meta.group?.title,
      href: meta.group?.path,
    },
    meta?.title && {
      label: meta?.title,
    },
  ].filter(identity);

  if (!meta?.title) {
    return null;
  }

  return (
    <>
      <div className={classes} ref={containerRef}>
        <div className={prefixCls}>
          {!isEmpty(path) && (
            <Breadcrumbs
              className={`${prefixCls}-breadcrumbs`}
              routes={path as any}
            />
          )}
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
