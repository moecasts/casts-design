import chroma from 'chroma-js';
import { DesignToken } from 'style-dictionary';

export const colorCss = (token: DesignToken) => {
  const { value, darkValue, type } = token;

  try {
    let finalValue = value;

    if (type) {
      finalValue = [type, '(', value, ')'].join('');
      return finalValue;
    }

    // const color = chroma(value);
    if (darkValue) {
      token.darkValue = chroma(darkValue).css('hsl');
    }
    // return color.css('hsl');
  } catch (error) {
    return value;
  }

  return value;
};
