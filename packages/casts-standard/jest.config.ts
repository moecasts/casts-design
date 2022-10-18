import { Config } from '@umijs/test';
import JestConfig from './dist/cjs/jest/jest.config';

export default {
  ...JestConfig,
} as Config.InitialOptions;
