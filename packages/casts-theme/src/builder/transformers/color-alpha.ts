import chroma from 'chroma-js';
import { DesignToken } from 'style-dictionary';

import { createReferenceRegex } from '../utils/create-reference-regex';

export const colorAlpha = (token: DesignToken) => {
  const { value, alpha } = token;
  const regex = createReferenceRegex();

  if (regex.test(value)) {
    return value;
  }

  try {
    const color = chroma(value);
    return color.alpha(alpha).css();
  } catch (error) {
    return value;
  }
};
