import { FC, ReactElement, ReactNode } from 'react';
import { Code as BaseCode } from '@casts/code';
import { BaseComponentProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { Heading, HeadingProps, Text } from '@casts/typography';
import { Components } from '@mdx-js/react/lib';
import clsx from 'clsx';

import { Api } from '../doc-features/api';
import { Code } from '../playground/code';
import { Toc } from './toc';

export const getHeadingComponents = (): Components => {
  const levels = 4;

  return Array.from({ length: levels }).reduce(
    (acc: Components, _, idx: number) => ({
      ...acc,
      [`h${idx + 1}`]: ({ children, ...rest }: { children: ReactNode }) => {
        return (
          <Heading level={(idx + 2) as HeadingProps['level']} {...rest}>
            {children}
          </Heading>
        );
      },
    }),
    {},
  );
};

export const Table: FC<BaseComponentProps> = (props) => {
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('table');
  const typographyCls = getPrefixCls('typography');
  const classes = clsx(
    prefixCls,
    `${prefixCls}--bordered`,
    `${prefixCls}--cell-bordered`,
    `${prefixCls}--round`,
    `${prefixCls}--header-fixed`,
    typographyCls,
  );

  return (
    <div className={classes}>
      <div className={`${prefixCls}-content`}>
        <table>{props.children}</table>
      </div>
    </div>
  );
};

export const THead: FC<BaseComponentProps> = ({ children }) => {
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('table');
  const classes = `${prefixCls}-thead`;
  return <thead className={classes}>{children}</thead>;
};

export const TBody: FC<BaseComponentProps> = ({ children }) => {
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('table');
  const classes = `${prefixCls}-body`;
  return <tbody className={classes}>{children}</tbody>;
};

export const Th: FC<BaseComponentProps> = ({ children }) => {
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('table');
  const classes = `${prefixCls}-th`;
  return <th className={classes}>{children}</th>;
};

const getTableComponents = (): Components => {
  return {
    table: Table,
    thead: THead,
    tbody: TBody,
    th: Th,
  };
};

export const components: Components = {
  ...getHeadingComponents(),
  ...getTableComponents(),
  pre: (props) => {
    const children = props.children as unknown as ReactElement<{
      className: string;
      children: string;
    }>;

    const source = children?.props?.children?.trim() || '';
    const language = children?.props?.className?.replace('language-', '') || '';

    return (
      <BaseCode showLineNumber={false} source={source} language={language} />
    );
  },
  code: ({ children }) => <Text code>{children}</Text>,
  API: Api,
  Code: Code,
  Toc: Toc,
};
