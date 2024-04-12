import { defineConfig } from 'father';

type GetType<T> = T extends (arg: infer P) => void ? P : string;

export default {
  cjs: {
    transformer: 'swc',
  },
  esm: {
    // transformer: 'esbuild',
    transformer: 'swc',
  },
  // umd: {},
} as GetType<typeof defineConfig>;
