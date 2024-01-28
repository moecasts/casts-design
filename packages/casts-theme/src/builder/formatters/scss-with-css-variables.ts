import { formatHelpers, Formatter } from 'style-dictionary';

export const scssWithCssVariablesFormat: Formatter = (args) => {
  const { dictionary, file, platform, options } = args;
  const { prefix } = platform;
  const { selector = ':root', outputReferences } = options;

  const prefixCls = prefix ? `$prefix-cls: ${prefix} !default;` : '';

  return [
    formatHelpers.fileHeader({ file, commentStyle: 'short' }),
    prefixCls,
    `${selector} {\n` +
      formatHelpers
        .formattedVariables({
          format: 'css',
          dictionary,
          outputReferences,
        })
        .replace(new RegExp(`--${prefix}`, 'g'), '--#{$prefix-cls}') +
      '\n}\n',
  ].join('\n');
};
