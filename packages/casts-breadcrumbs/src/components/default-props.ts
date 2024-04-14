import { createElement } from 'react';
import { ArrowRightSLine } from '@casts/icons';

import { BreadcrumbItemProps, BreadcrumbsProps } from './types';

export const defaultBreadcrumbsProps = {
  separator: createElement(ArrowRightSLine),
} satisfies BreadcrumbsProps;

export const defaultBreadcrumbItemProps = {
  shouldRenderSeparator: true,
} satisfies BreadcrumbItemProps;
