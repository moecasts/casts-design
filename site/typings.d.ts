declare module 'virtual:rd-provider' {
  import { Navigators } from '@casts/rd-vite/types/navigator';
  import { RouteObject } from 'react-router-dom';

  import { Source } from './packages/rd-vite/src/types';

  export const rdProvider: {
    sources: Source;
    navigators: Navigators;
    routes: RouteObject[];
  };
}

declare module '*.mdx';
