import { isObject } from '@casts/common';

import { getDefaultVirtual } from '../default-props';
import { SelectProps } from '../types';

export const getVirtual = (virtual?: SelectProps['virtual']) => {
  if (virtual === true) {
    return getDefaultVirtual();
  }

  if (isObject(virtual)) {
    return {
      ...getDefaultVirtual(),
      ...virtual,
    };
  }

  return false;
};
