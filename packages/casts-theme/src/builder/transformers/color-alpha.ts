import chroma from 'chroma-js';
import { DesignToken } from 'style-dictionary';

export const colorAlpha = (token: DesignToken) => {
  const { value, alpha, type } = token;
  try {
    if (type) {
      return [type, '(', value, `,${alpha}`, ')'].join('');
    }

    const color = chroma(value);
    return color.alpha(alpha).css();
  } catch (error) {
    return value;
  }
};
