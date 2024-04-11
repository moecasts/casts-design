// eslint-disable-next-line unused-imports/no-unused-imports
import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';

import { SourceMeta } from '../packages/rd-vite/src/types';

declare module 'react-router-dom' {
  interface IndexRouteObject {
    meta?: SourceMeta;
  }

  interface NonIndexRouteObject {
    meta?: SourceMeta;
  }
}
