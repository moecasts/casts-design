import { DesignToken } from 'style-dictionary';

export const keepOrigin = (token: DesignToken) => {
  const { value } = token;
  return value;
};
