import { DesignToken } from 'style-dictionary';
import chroma from 'chroma-js';

export const colorCss = (token: DesignToken) => {
  const { value } = token;
  const color = chroma(value);
  return color.css('hsl');
};
