import { defineConfig } from 'father';
import { StandardConfig } from '@casts/standard';

export default defineConfig({
  ...StandardConfig.father,
  cjs: {
    ...StandardConfig.father.cjs,
    transformer: 'babel',
    overrides: {
      'src/*/': {
        alias: {
          'lodash-es': 'lodash',
        },
      },
    },
  },
});
