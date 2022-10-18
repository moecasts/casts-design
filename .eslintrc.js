module.exports = {
  extends: [require.resolve('@casts/standard/dist/cjs/eslint/eslintrc.js')],
  ignorePatterns: [
    'dist',
    'packages/casts-theme/src/tokens',
    'packages/casts-cli/templates',
  ],
  plugins: [],
  rules: {},
};
