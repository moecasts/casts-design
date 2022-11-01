import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import { createElement, FC } from 'react';
import { TextProps, TextVariantProps } from './types';

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

export const Text: FC<TextProps> = (props) => {
  const { children, variant } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('typography');

  const classes = clsx(prefixCls, {
    [`${prefixCls}--${variant}`]: variant,
  });

  return <span className={classes}>{wrapperDecorations(props, children)}</span>;
};

Text.displayName = 'Text';
