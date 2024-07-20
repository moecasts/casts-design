import { DesignToken, formatHelpers, Formatter } from 'style-dictionary';
import { FormatterArguments } from 'style-dictionary/types/Format';

const getMapFlat = (args: FormatterArguments) => {
  const { dictionary, platform, options } = args;
  const { prefix } = platform;

  return (
    `$${options?.mapName || 'tokens'}: (\n` +
    dictionary.allTokens
      .map((token: DesignToken) => {
        const tokenName = token.name?.replace(`${prefix}-`, '');
        return `  '${tokenName}': $${tokenName}`;
      })
      .join(',\n') +
    '\n);'
  );
};

export const scssBaseOnCssVariableFormat: Formatter = (args) => {
  const { dictionary, file, platform, options } = args;
  const { prefix } = platform;

  return (
    formatHelpers.fileHeader({ file, commentStyle: 'short' }) +
    `$prefix-cls: ${prefix} !default;\n` +
    dictionary.allTokens
      .map((token: DesignToken) => {
        const { value, noReference } = token.original || {};
        if (noReference) {
          if (token.name?.includes('prefix-cls')) {
            return;
          }
          return `$${token.name?.replace(`${prefix}-`, '')}: ${value};`;
        }
        return `$${token.name?.replace(
          `${prefix}-`,
          '',
        )}: var(--${token.name?.replace(
          `${prefix}`,
          '#{$prefix-cls}',
        )}) !default;`;
      })
      .join('\n') +
    (options.withMapFlat ? '\n\n' + getMapFlat(args) : '')
  );
};
