import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, mergeConfig } from 'vitest/config';

export default mergeConfig(
  {
    plugins: [react()],
  },
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: path.join(__dirname, 'vitest.setup'),
      css: true,
    },
  }),
);
