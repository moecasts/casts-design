module.exports = {
  extends: ['@casts/standard/dist/cjs/stylelint/stylelintrc'],
  ignoreFiles: ['coverage/**/*.css', 'packages/casts-theme/styles/**/*'],
  customSyntax: 'postcss-scss',
};
