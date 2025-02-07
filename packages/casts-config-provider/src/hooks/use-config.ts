import { useContext } from 'react';

import { ConfigContext } from '../context';
import { getGlobalConfig } from '../global-config';
import { Config } from '../types';

/**
 * get config hook
 * @param isGetGlobalConfig When it is true,
 *  the component will not listen for changes in the context,
 *  and will only get the latest value from the `vanilla store`.
 * @returns {Config}
 */
export const useConfig = (isGetGlobalConfig?: boolean): Config => {
  const context = useContext(ConfigContext);

  return isGetGlobalConfig ? getGlobalConfig() : context;
};
