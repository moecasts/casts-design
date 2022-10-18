import type { Dirent } from 'fs';
import { readdirSync, readFileSync } from 'fs';
import * as path from 'path';
import WebpackChain from 'webpack-chain';

export const getDirectoryNames = (source: string) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent: Dirent) => dirent.isDirectory())
    .map((dirent: Dirent) => dirent.name);

export const getPackageDocPaths = (source: string) =>
  getDirectoryNames(source).map(
    (packageDir: string) => `packages/${packageDir}/docs`,
  );

export const getPackageNames = (packageDirNames: string[]) => {
  return packageDirNames.map((packageDir) => {
    const content = readFileSync(path.join(packageDir, 'package.json'), 'utf8');
    const packageJson = JSON.parse(content);
    return packageJson.name;
  });
};

export const getPackageAlias = (source: string) => {
  const packageDirNames = getDirectoryNames(source);
  const packageDirPaths = packageDirNames.map((packageDirName: string) =>
    path.join(source, packageDirName),
  );
  const packageNames = getPackageNames(packageDirPaths);

  return packageNames.reduce(
    (acc: { [key: string]: string }, packageName: string, index) => {
      const alias = {
        [`${packageName}/dist/esm`]: path.join(packageDirPaths[index], 'src'),
        [`${packageName}/dist/cjs`]: path.join(packageDirPaths[index], 'src'),
        [`${packageName}`]: path.join(packageDirPaths[index], 'src'),
      };
      return { ...acc, ...alias };
    },
    {},
  );
};

export const removePackageAlias = (memo: WebpackChain, source: string) => {
  const packageDirNames = getDirectoryNames(source);
  const packageDirPaths = packageDirNames.map((packageDirName: string) =>
    path.join(source, packageDirName),
  );
  const packageNames = getPackageNames(packageDirPaths);

  packageNames.forEach((name) => {
    memo.resolve.alias.delete(name);
  });
};
