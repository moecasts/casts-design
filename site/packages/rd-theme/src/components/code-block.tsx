import { FC } from 'react';
import { BaseComponentProps } from '@casts/common';
import { Highlight, PrismTheme } from 'prism-react-renderer';

import { CodeTheme } from '../theme/code';

export type CodeBlockProps = BaseComponentProps & {
  theme?: PrismTheme;
  source: string;
  language?: string;
};

export const CodeBlock: FC<CodeBlockProps> = (props) => {
  const { theme = CodeTheme, source, language = 'tsx' } = props;
  return (
    <Highlight theme={theme} code={source} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className={className}>
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
};
