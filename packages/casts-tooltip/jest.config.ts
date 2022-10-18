import { Config } from '@umijs/test';
import { StandardConfig } from '@casts/standard';

export default {
  ...StandardConfig.jestConfig,
} as Config.InitialOptions;
