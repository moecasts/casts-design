import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    ignores: [
      'src/tokens/**/*.json',
    ],
  },
  esm: {
    ignores: [
      'src/tokens/**/*.json',
    ],
  },
});
