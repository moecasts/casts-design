import { formatHelpers, Formatter } from 'style-dictionary';

export const scssWithCssVariablesFormat: Formatter = (args) => {
  const { dictionary, file, platform, options } = args;
  const { prefix } = platform;
  const { selector = ':root', outputReferences } = options;

  const prefixCls = prefix ? `$prefix-cls: ${prefix} !default;` : '';

  const darkSelector = `${selector}[theme-mode="dark"]`;

  const darkTokens = formatHelpers
    .formattedVariables({
      format: 'css',
      dictionary: {
        ...dictionary,
        allTokens: dictionary.allTokens
          .filter((token) => {
            return token.darkValue;
          })
          .map((token) => {
            const { value: _value, darkValue, original, ...restToken } = token;

            return {
              ...restToken,
              value: darkValue,
              original: {
                ...original,
                value: original.darkValue,
              },
            };
          }),
      },
      outputReferences,
    })
    .replace(new RegExp(`--${prefix}`, 'g'), '--#{$prefix-cls}');

  const darkTokensCss =
    darkSelector && darkTokens ? `${darkSelector} {\n${darkTokens}\n}\n` : '';

  return [
    formatHelpers.fileHeader({ file, commentStyle: 'short' }),
    prefixCls,
    `${selector} {\n` +
      `--#{$prefix-cls}-prefix-cls: ${prefix};\n` +
      formatHelpers
        .formattedVariables({
          format: 'css',
          dictionary,
          outputReferences,
        })
        .replace(new RegExp(`--${prefix}`, 'g'), '--#{$prefix-cls}') +
      '\n}\n',
    darkTokensCss,
  ].join('\n');
};
