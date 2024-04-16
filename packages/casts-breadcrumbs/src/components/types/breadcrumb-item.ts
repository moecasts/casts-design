import { ReactNode } from 'react';
import { BaseComponentProps, LinkDOMProps } from '@casts/common';

export type UseBreadcrumbItemProps = BaseComponentProps &
  LinkDOMProps & {
    label?: ReactNode;
    icon?: ReactNode;
    maxItemWidth?: number | string;
    separator?: ReactNode;
    shouldRenderSeparator?: boolean;
  };

export type BreadcrumbItemProps = UseBreadcrumbItemProps;
