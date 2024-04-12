import { BaseComponentProps } from '@casts/common';
import { PrismTheme, themes } from 'prism-react-renderer/dist/index.js';

export type UseCodeProps = BaseComponentProps & {
  /**
   *  code language
   *  @default tsx
   */
  language?: string;
  /**
   * code content
   */
  source: string;
  /**
   * Whether to show line number
   * @default true
   */
  showLineNumber?: boolean;
  /**
   * code color theme
   * @default github
   */
  theme?: keyof typeof themes | PrismTheme;
};
