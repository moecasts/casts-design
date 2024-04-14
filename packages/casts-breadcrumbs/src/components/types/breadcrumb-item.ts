import { ReactNode } from 'react';
import { BaseComponentProps, LinkDOMProps } from '@casts/common';

export type UseBreadcrumbItemProps = BaseComponentProps &
  LinkDOMProps & {
    label?: ReactNode;
    icon?: ReactNode;
    maxItemWidth?: number | string;
  };

export type BreadcrumbItemProps = UseBreadcrumbItemProps;
