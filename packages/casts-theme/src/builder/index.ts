import * as StyleDictionary from 'style-dictionary';

import { es6BaseOnCssVariableFormat } from './formatters/es6-base-on-css-variables';
import { scssBaseOnCssVariableFormat } from './formatters/scss-base-on-css-variable';
import { scssWithCssVariablesFormat } from './formatters/scss-with-css-variables';
import { buildComponentTokens, buildCoreTokens } from './utils';

const run = () => {
  const sd = StyleDictionary.registerFormat({
    name: 'scssBaseOnCssVariableFormat',
    formatter: scssBaseOnCssVariableFormat,
  })
    .registerFormat({
      name: 'scssWithCssVariablesFormat',
      formatter: scssWithCssVariablesFormat,
    })
    .registerFormat({
      name: 'es6BaseOnCssVariableFormat',
      formatter: es6BaseOnCssVariableFormat,
    });
  buildCoreTokens(sd);
  buildComponentTokens(sd);
};

run();
