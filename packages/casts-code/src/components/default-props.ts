import { prismCastsTheme } from './themes';
import { CodeProps } from './types';

export const defaultCodeProps = {
  language: 'tsx',
  showLineNumber: true,
  theme: prismCastsTheme,
} satisfies Partial<CodeProps>;
