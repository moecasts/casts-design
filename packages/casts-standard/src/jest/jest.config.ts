import { Config, createConfig } from '@umijs/test';
import path from 'path';

export default {
  ...createConfig({
    target: 'browser',
  }),
  setupFilesAfterEnv: [path.join(__dirname, 'jest-setup')],
  collectCoverageFrom: ['src/**/*.{ts,js,tsx,jsx}'],
  modulePathIgnorePatterns: ['<rootDir>/dist'],
} as Config.InitialOptions;
