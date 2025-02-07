import { DesignToken } from 'style-dictionary';

export const coreTokenFilter = (token: DesignToken) =>
  !!~token.filePath.indexOf('/core');

export const componentsTokenFilter = (token: DesignToken) =>
  !!~token.filePath.indexOf('/components');
