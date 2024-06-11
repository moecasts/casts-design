import { DesignToken } from 'style-dictionary';

export const shadowCss = (token: DesignToken) => {
  const value = Array.isArray(token.value) ? token.value : [token.value];

  const shadows = value.map((shadow) => {
    const {
      inset = '',
      offsetX = '0px',
      offsetY = '0px',
      blur = '0px',
      spread = '',
      color = '',
    } = shadow;

    return [inset, offsetX, offsetY, blur, spread, color].join(' ');
  });
  return shadows.join(', ');
};
