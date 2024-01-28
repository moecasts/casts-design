import { BaseComponentProps } from '@casts/common';

export type UseCodeProps = BaseComponentProps & {
  language?: string;
  source: string;
  showLineNumber?: boolean;
};
