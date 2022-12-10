import { defineConfig } from 'dumi';
import { getDirectoryNames, getPackageAlias, getPackageDocPaths, getPackageNames, removePackageAlias } from './utils';
import * as path from 'path';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  title: 'Cast Design',
  mode: 'site',
  esbuild: {},
  chainWebpack: (memo) => {
    if (isProd) {
      removePackageAlias(memo, path.join(__dirname, './packages'));
    }
  },
  apiParser: {
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: true,
      savePropValueAsString: true,
    },
  },
  sass: {
    sassOptions: {
      includePaths: [path.join(__dirname, 'node_modules')],
    },
  },
  // alias: isProd
  //   ? {}
  //   : getPackageAlias(path.join(__dirname, './packages')),
  alias: getPackageAlias(path.join(__dirname, './packages')),
  resolve: {
    includes: [
      'docs',
      ...getPackageDocPaths('./packages'),
    ],
  },
  // more config: https://d.umijs.org/config
});
