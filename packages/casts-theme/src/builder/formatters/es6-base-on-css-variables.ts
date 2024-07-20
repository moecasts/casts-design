import { DesignToken, formatHelpers, Formatter } from 'style-dictionary';

const capitalize = (s = '') => s && s[0].toUpperCase() + s.slice(1);

export const es6BaseOnCssVariableFormat: Formatter = (args) => {
  const { dictionary, file, platform } = args;
  const { prefix = '' } = platform;

  const prefixTokenName = `Token${capitalize(prefix)}PrefixCls`;

  return (
    formatHelpers.fileHeader({ file }) +
    '\n' +
    `export const ${prefixTokenName} = ${JSON.stringify(prefix)};\n` +
    dictionary.allTokens
      .map((token: DesignToken) => {
        const { value, noReference } = token.original || {};
        if (noReference) {
          if (token.name?.includes('PrefixCls')) {
            return;
          }

          return `export const Token${token.name} = ${JSON.stringify(value)}`;
        }

        return `export const Token${token.name} = \`var(--${[
          `\${${prefixTokenName}}`,
          ...token.path,
        ].join('-')})\``;
      })
      .join('\n')
  );
};
