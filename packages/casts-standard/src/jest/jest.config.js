// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest/presets/js-with-ts-esm',
  testEnvironment: 'jsdom',

  rootDir: process.cwd(),

  verbose: true,

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
      path.resolve(__dirname, 'utils/__mocks__/file.js'),
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },

  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
  },
};
