import { FC, ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { Heading, HeadingProps, Text } from '@casts/typography';
import { Components } from '@mdx-js/react/lib';
import clsx from 'clsx';
import { Highlight } from 'prism-react-renderer';

import { CodeTheme } from '../theme/code';
import { Api } from './api';
import { Code } from './playground/code';
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
  const classes = clsx(
    prefixCls,
    `${prefixCls}--bordered`,
    `${prefixCls}--cell-bordered`,
    `${prefixCls}--round`,
    `${prefixCls}--header-fixed`,
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
  pre: ({ children }) => {
    console.log('debug1', children);
    const codeBlock = children?.props?.children?.trim() || '';
    return (
      <Highlight theme={CodeTheme} code={codeBlock} language="tsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span>{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );

    // return (
    //   <BaseCode
    //     showLineNumber={false}
    //     source={children?.props?.children?.trim() || ''}
    //     theme={CodeTheme}
    //   ></BaseCode>
    // );
  },
  code: ({ children }) => <Text code>{children}</Text>,
  API: Api,
  Code: Code,
  Toc: Toc,
};
