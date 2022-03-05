/* eslint-disable @typescript-eslint/no-var-requires */
const tsBase = require('./tsconfig/base.json');
const tsReact17 = require('./tsconfig/react17.json');
const jestConfig = require('./jest/jest.config');
const prettier = require('./prettier/prettierrc');

module.exports = {
  tsconfig: {
    base: tsBase,
    react17: tsReact17,
  },
  jestConfig,
  prettier,
};
