import { ReactNode } from 'react';
import { BaseComponentProps, LinkDOMProps } from '@casts/common';
import { TooltipProps } from '@casts/tooltip';

export type UseBreadcrumbItemProps = BaseComponentProps & {
  /**
   * The content of the breadcrumb item.
   */
  label?: ReactNode;
  /**
   * The prefix icon of the breadcrumb item.
   */
  icon?: ReactNode;
  /**
   * The max item width of the breadcrumb item.
   */
  maxItemWidth?: number | string;
  /**
   * The separator after the breadcrumb item.
   */
  separator?: ReactNode;
  /**
   * Whether to display the separator after the breadcrumb item.
   */
  shouldRenderSeparator?: boolean;

  /**
   * the props of the tooltip that the breadcrumb item is overflow.
   */
  tooltipProps?: Partial<TooltipProps>;
} & LinkDOMProps;

export type BreadcrumbItemProps = UseBreadcrumbItemProps;
