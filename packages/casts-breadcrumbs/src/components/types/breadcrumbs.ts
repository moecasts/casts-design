import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';

import { BreadcrumbItemProps } from './breadcrumb-item';

export type UseBreadcrumbsProps = BaseComponentProps & {
  maxItemWidth?: number | string;

  separator?: ReactNode;

  routes?: BreadcrumbItemProps[];

  maxCount?: number;
  countBeforeCollapse?: number;
  countAfterCollapse?: number;
};

export type BreadcrumbsProps = UseBreadcrumbsProps;
