import { defineConfig } from 'father';

type GetType<T> = T extends (arg: infer P) => void ? P : string;

export default {
  cjs: {
    transformer: 'esbuild',
  },
  esm: {
    // transformer: 'esbuild',
    transformer: 'babel',
  },
  // umd: {},
} as GetType<typeof defineConfig>;
