module.exports = {
  extends: ['@casts/standard/dist/cjs/stylelint/stylelintrc'],
  ignoreFiles: [
    'coverage/**/*.css',
    'packages/casts-theme/styles/**/*',
    'packages/casts-cli/templates/**/*',
  ],
  customSyntax: 'postcss-scss',
};
