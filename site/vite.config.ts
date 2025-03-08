import vitestConfig from '@casts/standard/dist/cjs/vite/vite.config';
import react from '@vitejs/plugin-react-swc';
import { omit } from 'lodash-es';
import path from 'path';
import { defineConfig } from 'vite';
import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import { getPackageAlias } from '../utils';
import { rd } from './packages/rd-vite/src';

const packagesAlias = omit(
  getPackageAlias(path.resolve(path.join(__dirname, '../packages'))),
  ['@casts/theme/dist/esm', '@casts/theme/dist/cjs', '@casts/theme'],
);

export default mergeConfig(
  vitestConfig,
  defineConfig({
    server: {
      host: '0.0.0.0',
      port: 15000,
      open: '/',
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '..'),
        ...packagesAlias,
      },
    },

    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '$prefix-cls: rdc;\n',
    //     },
    //   },
    // },

    plugins: [
      react(),
      svgr(),
      rd({
        name: 'Casts Design',
        sitemap: {
          hostname: 'https://design.moecasts.com',
        },
        // docRoot: path.resolve(__dirname, '..'),
      }),
    ],

    optimizeDeps: {
      include: ['@casts/icons'],
      exclude: ['@casts/config-provider'],
      esbuildOptions: {
        jsx: 'automatic',
      },
    },
  }),
);
