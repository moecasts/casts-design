import { CodeProps } from './types';

export const defaultCodeProps = {
  language: 'tsx',
  showLineNumber: true,
  theme: 'github',
} satisfies Partial<CodeProps>;
