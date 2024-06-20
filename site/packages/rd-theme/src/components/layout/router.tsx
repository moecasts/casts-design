import { Suspense, useCallback } from 'react';
import { CircularProgress } from '@casts/progress';
import { useRd } from '@casts/rd-vite/client';

import { ComponentDoc } from './component-doc';
import { SitePage } from './page';

export const Router = () => {
  const { matches } = useRd();

  const currentRoute = matches?.[matches.length - 1].route;

  const renderContent = useCallback(() => {
    if (currentRoute?.meta?.layout === 'page') {
      return <SitePage />;
    }

    return <ComponentDoc />;
  }, [currentRoute]);

  return (
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
      {renderContent()}
    </Suspense>
  );
};
