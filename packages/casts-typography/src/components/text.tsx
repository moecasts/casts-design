import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import { createElement, FC, ReactNode } from 'react';

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

const wrapperDecorations = (
  {
    mark,
    code,
    underline,
    delete: del,
    strong,
    keyboard,
    italic,
    link,
    href,
  }: TextVariantProps,
  content: React.ReactNode,
) => {
  let currentContent = content;
  const wrap = (needed: boolean | undefined, tag: string, href?: string) => {
    if (!needed) {
      return;
    }
    currentContent = createElement(tag, { href }, currentContent);
  };

  wrap(strong, 'strong');
  wrap(underline, 'u');
  wrap(del, 'del');
  wrap(code, 'code');
  wrap(mark, 'mark');
  wrap(keyboard, 'kbd');
  wrap(italic, 'i');
  wrap(link, 'a', href);

  return currentContent;
};

export const Text: FC<TextProps> = (props: TextProps) => {
  const { children, variant } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('typography');

  const classes = clsx(prefixCls, {
    [`${prefixCls}--${variant}`]: variant,
  });

  return <span className={classes}>{wrapperDecorations(props, children)}</span>;
};

Text.displayName = 'Text';
