import * as StyleDictionary from 'style-dictionary';

import { scssBaseOnCssVariableFormat } from './formatters/scss-base-on-css-variable';
import { scssWithCssVariablesFormat } from './formatters/scss-with-css-variables';
import { buildComponentTokens, buildCoreTokens } from './utils';

const run = () => {
  const sd = StyleDictionary.registerFormat({
    name: 'scssBaseOnCssVariableFormat',
    formatter: scssBaseOnCssVariableFormat,
  }).registerFormat({
    name: 'scssWithCssVariablesFormat',
    formatter: scssWithCssVariablesFormat,
  });
  buildCoreTokens(sd);
  buildComponentTokens(sd);
};

run();
