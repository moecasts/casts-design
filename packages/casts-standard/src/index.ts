import tsBase from './tsconfig/base.json';
import tsReact17 from './tsconfig/react17.json';
import jestConfig from './jest/jest.config';
import prettier from './prettier/prettierrc';
import { Config } from '@umijs/test';
import fatherConfig from './father/fatherrc';

export const StandardConfig = {
  tsConfig: {
    base: tsBase,
    react17: tsReact17,
  },
  jestConfig: jestConfig as Config.InitialOptions,
  prettier,
  father: fatherConfig,
};
