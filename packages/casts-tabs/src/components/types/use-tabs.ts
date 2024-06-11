import { BaseComponentProps, Size } from '@casts/common';

import { TabValue } from './common';

export type UseTabProps = BaseComponentProps & {
  size?: Size;
  value?: TabValue;
  defaultValue?: TabValue;
};
