import chroma from 'chroma-js';
import { DesignToken } from 'style-dictionary';

import { createReferenceRegex } from '../utils/create-reference-regex';

export const colorCss = (token: DesignToken) => {
  const { value, darkValue } = token;

  const regex = createReferenceRegex();

  if (regex.test(value)) {
    return value;
  }

  try {
    if (darkValue) {
      token.darkValue = chroma(darkValue).css('hsl');
    }
    return value.css('hsl');
  } catch (error) {
    return value;
  }
};
