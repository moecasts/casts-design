import { ReactNode } from 'react';

export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
} & Partial<Omit<HTMLHeadingElement, 'children'>>;

export type ParagraphProps = {
  children?: ReactNode;
};

export type TextVariantProps = {
  code?: boolean;
  mark?: boolean;
  underline?: boolean;
  delete?: boolean;
  strong?: boolean;
  keyboard?: boolean;
  italic?: boolean;
  // LinkProps
  link?: boolean;
  href?: string;
  // type
  variant?: 'hero' | 'subtitle' | 'caption';
};

export type TextProps = {
  children: ReactNode;
} & TextVariantProps;

export type TypographyProps = {
  children?: ReactNode;
};
