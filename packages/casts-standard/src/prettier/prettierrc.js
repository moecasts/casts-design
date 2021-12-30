module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  endOfLine: 'lf',
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
};
