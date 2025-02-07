import { BaseComponentProps } from '@casts/common';

import { UseBadgeProps } from '../hooks';

export type BadgeProps = BaseComponentProps &
  Omit<UseBadgeProps, 'getPrefixCls'>;
