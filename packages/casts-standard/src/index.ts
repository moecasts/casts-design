import { Config } from '@umijs/test';

import fatherConfig from './father/fatherrc';
import jestConfig from './jest/jest.config';
import prettier from './prettier/prettierrc';
import tsBase from './tsconfig/base.json';
import tsReact17 from './tsconfig/react17.json';

export const StandardConfig = {
  tsConfig: {
    base: tsBase,
    react17: tsReact17,
  },
  jestConfig: jestConfig as Config.InitialOptions,
  prettier,
  father: fatherConfig,
};
