import { isString } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';
// NOTE: The `js` file is loaded first, as the `mjs` file requires additional webpack configuration
import { Highlight, themes } from 'prism-react-renderer/dist/index.js';

import { defaultCodeProps } from '../default-props';
import { UseCodeProps } from '../types/use-code';

export const useCode = (props: UseCodeProps) => {
  const {
    className,
    style,
    language = defaultCodeProps.language,
    showLineNumber = defaultCodeProps.showLineNumber,
    theme = defaultCodeProps.theme,
  } = props;

  const { getPrefixCls } = useConfig();

  const prismTheme = isString(theme) ? themes[theme] : theme;

  /* --------------------------------- classes and styles ---------------------------------------- */
  const prefixCls = getPrefixCls('code');

  const classes = clsx(prefixCls, className);

  const styles = style;

  /* --------------------------------- element ---------------------------------------- */
  const element = (
    <Highlight theme={prismTheme} code={props.source} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {showLineNumber && (
                <span className="token-line-num">{i + 1}</span>
              )}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );

  return {
    classes,
    styles,
    element,
  };
};
