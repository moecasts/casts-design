import { FlexType } from '../types';

export const formatFlex = (flex: FlexType) => {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|r?em|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
};
