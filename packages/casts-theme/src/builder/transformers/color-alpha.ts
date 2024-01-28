import chroma from 'chroma-js';
import { DesignToken } from 'style-dictionary';

export const colorAlpha = (token: DesignToken) => {
  const { value, alpha } = token;
  const color = chroma(value);
  return color.alpha(alpha).css();
};
