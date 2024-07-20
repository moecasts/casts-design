import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';
import { TooltipProps } from '@casts/tooltip';

import { BreadcrumbItemProps } from './breadcrumb-item';

export type RenderCollapseFunction = (collapsedItems: ReactNode[]) => ReactNode;

export type UseBreadcrumbsProps = BaseComponentProps & {
  /**
   * The max item width of each breadcrumb item.
   */
  maxItemWidth?: number | string;

  /**
   * 	The custom separator between Breadcrumbs. It is a ArrowRightSLine by default.
   */
  separator?: ReactNode;

  /**
   * The routes to generate the breadcrumbs.
   */
  routes?: BreadcrumbItemProps[];

  /**
   * The maximum number of breadcrumbs to display.
   */
  maxCount?: number;
  /**
   * The number of items to show before the ellipsis.
   */
  countBeforeCollapse?: number;
  /**
   * The number of items to show after the ellipsis.
   */
  countAfterCollapse?: number;

  /**
   * the props of the tooltip that the breadcrumb item is overflow.
   */
  tooltipProps?: Partial<TooltipProps>;

  /**
   * The custom render function for the collapse.
   */
  renderCollapse?: RenderCollapseFunction;
};

export type BreadcrumbsProps = UseBreadcrumbsProps;
