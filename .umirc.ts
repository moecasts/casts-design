import { defineConfig } from 'dumi';
import { getPackageAlias, getPackageDocPaths } from './util';
import path from 'path';

export default defineConfig({
  title: 'Casts Design',
  mode: 'site',
  // nodeModulesTransform: {
  //   type: 'none',
  //   exclude: [],
  // },
  esbuild: {},
  alias: process.env.NODE_ENV === 'production'
    ? {}
    : getPackageAlias(path.join(__dirname, './packages')),
  resolve: {
    includes: [
      'docs',
      ...getPackageDocPaths('./packages'),
    ],
  },
  apiParser: {
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: true,
    },
  },
  sass: {
    sassOptions: {
      includePaths: [path.join(__dirname, 'node_modules')],
    },
  }
  // more config: https://d.umijs.org/config
});
