import {
  Children,
  cloneElement,
  createElement,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  getStyle,
  isArray,
  isFragment,
  isFunction,
  isUndefined,
  translatePxToNumber,
  useResizeObserver,
} from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { MoreLine } from '@casts/icons';
import clsx from 'clsx';

import { UseOverflowWrapProps } from '../types';

const getNodeWidth = (node: HTMLElement) => {
  return node && Math.ceil(+node.getBoundingClientRect().width);
};

export const useOverflowWrap = (props: UseOverflowWrapProps) => {
  const { renderCollapse } = props;

  const wrapRef = useRef<HTMLElement>(null);

  const [lastVisibleElementIndex, setLastVisibleElementIndex] = useState<
    number | undefined
  >(undefined);

  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('overflow-wrap');
  const classes = `${prefixCls}`;

  /* --------------------------------- auto collapse overflow items ---------------------------------------- */
  const collapseClasses = `${prefixCls}-collapse`;

  const computeLastVisibleIndex = useCallback(() => {
    const wrapElement = wrapRef.current;
    if (!wrapElement) {
      return;
    }

    const wrapElementWidth = getNodeWidth(wrapElement);
    const elementGapSize = translatePxToNumber(
      getStyle(wrapElement)?.gap || '',
    );
    const childElements = Array.from(wrapElement.children);

    let totalElementsWidth = 0;
    let lastVisibleElementIndex = 0;

    for (const childElement of childElements) {
      const isOverflowCollapseMirror = childElement.classList.contains(
        `${collapseClasses}--mirror`,
      );
      const isOverflowCollapse = childElement.classList.contains(
        `${collapseClasses}`,
      );

      // collapse node should be calculated only once
      if (!isOverflowCollapseMirror && isOverflowCollapse) {
        continue;
      }

      const childElementWidth =
        getNodeWidth(childElement as HTMLElement) +
        (isOverflowCollapse ? 0 : elementGapSize);

      // break out of the loop when the current total width is greater than the container width
      if (wrapElementWidth < totalElementsWidth + childElementWidth) {
        break;
      }

      totalElementsWidth += childElementWidth;
      lastVisibleElementIndex += 1;
    }

    setLastVisibleElementIndex(lastVisibleElementIndex);

    return lastVisibleElementIndex;
  }, [collapseClasses]);

  /* --------------------------------- render collapse node ---------------------------------------- */
  const renderOverflowCollapse = useCallback(
    (children: ReactNode, mirror: boolean) => {
      const classes = clsx(`${collapseClasses}`, {
        [`${collapseClasses}--mirror`]: mirror,
        [getPrefixCls('is-hidden')]: mirror,
      });

      const collapsedChildren = mirror ? null : children;

      if (isFunction(renderCollapse)) {
        return createElement(
          'span',
          {
            key: `${prefixCls}-collapse${mirror ? '-mirror' : ''}`,
            className: classes,
          },
          renderCollapse({
            children: collapsedChildren,
          }),
        );
      }

      return createElement(
        'span',
        {
          key: `${prefixCls}-collapse${mirror ? '-mirror' : ''}`,
          className: classes,
        },
        createElement(MoreLine),
      );
    },
    [getPrefixCls, prefixCls, collapseClasses, renderCollapse],
  );

  /* --------------------------------- render non-overflowed children and foldable item that contain overflowed children ---------------------------------------- */
  const renderChildren = useMemo(
    () => (originChildren: ReactNode) => {
      const getChildrenArray = (children: unknown) => {
        if (isFragment(originChildren) && originChildren.props.children) {
          return Children.toArray(originChildren.props.children);
        }

        if (isArray(children)) {
          return Children.toArray(originChildren);
        }

        return [];
      };

      const childrenArray = getChildrenArray(originChildren);

      const computedLastVisibleNodeIndex = Math.max(
        (lastVisibleElementIndex || 0) - 1,
        0,
      );

      // only show visible children
      const visibleChildren =
        isUndefined(lastVisibleElementIndex) ||
        computedLastVisibleNodeIndex >= childrenArray.length
          ? childrenArray
          : childrenArray.map((child, index) => {
              if (computedLastVisibleNodeIndex > index) {
                return child;
              }

              // hide child if it is overflow
              return cloneElement(child as ReactElement, {
                key: (child as ReactElement).props._key,
                className: clsx(
                  (child as ReactElement).props.className,
                  getPrefixCls('is-hidden'),
                ),
              });
            });

      const collapseChildNodeMirror = renderOverflowCollapse(null, true);

      const collapseChildNodes = childrenArray.slice(
        computedLastVisibleNodeIndex,
      );

      const collapseChildNode = renderOverflowCollapse(
        collapseChildNodes,
        false,
      );

      const children = [collapseChildNodeMirror, ...visibleChildren];

      if (
        !isUndefined(lastVisibleElementIndex) &&
        computedLastVisibleNodeIndex < childrenArray.length
      ) {
        children.push(collapseChildNode);
      }

      return children;
    },

    [getPrefixCls, lastVisibleElementIndex, renderOverflowCollapse],
  );

  /* --------------------------------- observe container resize ---------------------------------------- */
  useResizeObserver(wrapRef, () => {
    computeLastVisibleIndex();
  });

  return {
    classes,
    wrapRef,
    renderChildren,
  };
};
