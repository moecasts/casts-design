import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    output: 'dist',
  },
  prebundle: {
    deps: ['git-remote-origin-url']
  }
});
