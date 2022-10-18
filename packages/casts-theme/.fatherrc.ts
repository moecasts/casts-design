import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    ignores: [
      'src/tokens/**/*',
    ],
  },
});
