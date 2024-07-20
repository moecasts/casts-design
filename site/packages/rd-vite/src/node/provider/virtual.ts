import { getNavigators } from '@casts/rd-vite/node/provider/nav';
import { getRoutes } from '@casts/rd-vite/node/provider/route';
import { Source } from '@casts/rd-vite/types';

export type InitRdProviderPayload = {
  sources: Source[];
  runtimeImports: any;
  /**
   * Site name
   */
  name?: string;
};

export const initRdProvider = ({
  sources,
  runtimeImports,
  ...rest
}: InitRdProviderPayload) => {
  const routes = getRoutes({
    sources,
    runtimeImports,
  });

  const navigators = getNavigators({ sources });

  return {
    ...rest,
    sources,
    routes,
    navigators,
  };
};
