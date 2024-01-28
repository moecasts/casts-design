import chroma from 'chroma-js';
import { DesignToken } from 'style-dictionary';

export const colorCss = (token: DesignToken) => {
  const { value } = token;
  const color = chroma(value);
  return color.css('hsl');
};
