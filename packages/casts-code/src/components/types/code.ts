import { BaseComponentProps } from '@casts/common';

export type CodeProps = BaseComponentProps & {
  language?: string;
  source: string;
};
