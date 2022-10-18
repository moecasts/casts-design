import { DesignToken } from 'style-dictionary';
import chroma from 'chroma-js';

export const colorAlpha = (token: DesignToken) => {
  const { value, alpha } = token;
  const color = chroma(value);
  return color.alpha(alpha).css();
};
