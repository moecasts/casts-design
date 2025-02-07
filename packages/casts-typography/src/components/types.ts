import { BaseComponentProps } from '@casts/common';

export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & BaseComponentProps &
  Partial<Omit<HTMLHeadingElement, 'children'>>;

export type ParagraphProps = BaseComponentProps;

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

export type TextProps = BaseComponentProps & TextVariantProps;

export type TypographyProps = BaseComponentProps;
