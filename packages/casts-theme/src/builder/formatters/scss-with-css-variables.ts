import { formatHelpers, Formatter } from 'style-dictionary';

export const scssWithCssVariablesFormat: Formatter = (args) => {
  const { dictionary, file, platform, options } = args;
  const { prefix } = platform;
  const { selector = ':root', outputReferences } = options;

  const prefixCls = prefix ? `$prefix-cls: ${prefix} !default;` : '';

  const darkSelector = `${selector}[theme-mode="dark"]`;

  const darkColors = formatHelpers
    .formattedVariables({
      format: 'css',
      dictionary: {
        ...dictionary,
        allTokens: dictionary.allTokens
          .filter((token) => {
            return token.darkValue;
          })
          .map((token) => {
            const { value: _value, ...restToken } = token;
            return {
              ...restToken,
              value: token.darkValue,
            };
          }),
      },
      outputReferences,
    })
    .replace(new RegExp(`--${prefix}`, 'g'), '--#{$prefix-cls}');

  const darkColorsCss =
    darkSelector && darkColors ? `${darkSelector} {\n${darkColors}\n}\n` : '';

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
    darkColorsCss,
  ].join('\n');
};
