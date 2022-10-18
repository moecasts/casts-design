import { DesignToken } from 'style-dictionary';

export const shadowCss = (token: DesignToken) => {
  const {
    inset = '',
    offsetX = '0px',
    offsetY = '0px',
    blur = '0px',
    color = '',
  } = token.value;
  return [inset, offsetX, offsetY, blur, color].join(' ');
};
