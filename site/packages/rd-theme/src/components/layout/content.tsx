import { Suspense, useRef } from 'react';
import { useConfig } from '@casts/config-provider';
import { CircularProgress } from '@casts/progress';
import { MDXProvider } from '@mdx-js/react';
import clsx from 'clsx';

import { getPrefixCls } from '../../common';
import { components } from './markdown';
import { Routes } from './routes';

export const SiteContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { getPrefixCls: cdsGetPrefixCls } = useConfig();

  return (
    <div className={`${getPrefixCls('main-content')}`} ref={containerRef}>
      <div className={clsx('markdown', cdsGetPrefixCls('typography'))}>
        <Suspense
          fallback={
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '10vh',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <CircularProgress size={32} />
            </div>
          }
        >
          <MDXProvider components={components}>
            <Routes containerRef={containerRef} />
          </MDXProvider>
        </Suspense>
      </div>
    </div>
  );
};
