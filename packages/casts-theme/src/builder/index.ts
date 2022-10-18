import * as StyleDictionary from 'style-dictionary';
import { scssBaseOnCssVariableFormat } from './formatters/scss-base-on-css-varaible';
import { buildComponentTokens, buildCoreTokens } from './utils';

const run = () => {
  const sd = StyleDictionary.registerFormat({
    name: 'scssBaseOnCssVariableFormat',
    formatter: scssBaseOnCssVariableFormat,
  });
  buildCoreTokens(sd);
  buildComponentTokens(sd);
};

run();
