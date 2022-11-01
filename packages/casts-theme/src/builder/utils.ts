import { statSync } from 'fs';
import { basename, extname } from 'path';
import { componentsTokenFilter, coreTokenFilter } from './filters';
import { styleTransformGroup, transformers } from './transformers';
import * as glob from 'glob';
import { Config, Core } from 'style-dictionary';

export const buildCoreTokens = (sd: Core) => {
  const config = {
    source: ['src/tokens/core/**/*.@(json|json5|js|ts)'],
    transform: transformers,
    platforms: {
      coreCss: {
        transformGroup: 'css',
        prefix: 'cds',
        transforms: styleTransformGroup,
        buildPath: 'styles/css/',
        files: [
          {
            destination: 'core.css',
            format: 'css/variables',
            filter: coreTokenFilter,
          },
        ],
        options: {
          outputReferences: true,
        },
      },
      // scss: {
      //   transformGroup: 'scss',
      //   buildPath: 'styles/',
      //   files: [
      //     {
      //       destination: 'core.scss',
      //       format: 'scss/variables',
      //       filter: coreTokenFilter
      //     },
      //   ],
      //   options: {
      //     outputReferences: true,
      //   },
      // },
      coreScssCustom: {
        transformGroup: 'scss',
        prefix: 'cds',
        buildPath: 'styles/scss/',
        files: [
          {
            destination: 'core.scss',
            format: 'scssBaseOnCssVariableFormat',
            filter: coreTokenFilter,
          },
        ],
        options: {
          outputReferences: true,
          withMapFlat: true,
          mapName: 'core-tokens',
        },
      },
    },
  };
  sd.extend(config).buildAllPlatforms();
};

export const getComponentTokenSources = () => {
  const paths = glob.sync('src/tokens/components/*');
  return paths.reduce((acc, path) => {
    const name = basename(path, extname(path));
    const stats = statSync(path);
    if (stats.isDirectory()) {
      return {
        ...acc,
        [name]: `${path}/**/*.@(json|json5|js|ts)`,
      };
    }
    return {
      ...acc,
      [name]: path,
    };
  }, {});
};

export const getBuildComponentTokenConfigs = (): Config[] => {
  const componentTokenSources = getComponentTokenSources();
  return Object.keys(componentTokenSources).reduce((acc, componentName) => {
    const componentTokenSource = componentTokenSources[componentName];
    const buildTokenConfig: Config = {
      include: ['src/tokens/core/**/*.@(json|json5|js|ts)'],
      source: [componentTokenSource],
      transform: transformers,
      platforms: {
        [`${componentName}/css`]: {
          transformGroup: 'css',
          prefix: 'cds',
          transforms: styleTransformGroup,
          buildPath: 'styles/css/',
          files: [
            {
              destination: `${componentName}.css`,
              format: 'css/variables',
              filter: componentsTokenFilter,
            },
          ],
          options: {
            outputReferences: true,
          },
        },
        [`${componentName}/scss`]: {
          transformGroup: 'scss',
          prefix: 'cds',
          buildPath: 'styles/scss/',
          files: [
            {
              destination: `${componentName}.scss`,
              format: 'scssBaseOnCssVariableFormat',
              filter: componentsTokenFilter,
            },
          ],
          options: {
            outputReferences: true,
            withMapFlat: true,
            mapName: `${componentName}-tokens`,
          },
        },
      },
    };

    return [...acc, buildTokenConfig];
  }, [] as Config[]);
};

export const buildComponentTokens = (sd: Core) => {
  const configs = getBuildComponentTokenConfigs();
  configs.forEach((config) => {
    sd.extend(config).buildAllPlatforms();
  });
};
