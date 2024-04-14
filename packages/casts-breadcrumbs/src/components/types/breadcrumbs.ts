import { ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';

import { BreadcrumbItemProps } from './breadcrumb-item';

export type UseBreadcrumbProps = BaseComponentProps & {
  separator?: ReactNode;

  items?: BreadcrumbItemProps[];
};

export type BreadcrumbProps = UseBreadcrumbProps;
