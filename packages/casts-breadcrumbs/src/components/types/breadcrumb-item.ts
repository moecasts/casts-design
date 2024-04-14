import { ReactNode } from 'react';
import { BaseComponentProps, LinkDOMProps } from '@casts/common';

export type UseBreadcrumbItemProps = BaseComponentProps &
  LinkDOMProps & {
    label?: ReactNode;
    icon?: ReactNode;
  };

export type BreadcrumbItemProps = UseBreadcrumbItemProps;
