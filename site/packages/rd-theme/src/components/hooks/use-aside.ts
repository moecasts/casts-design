import { useEffect, useMemo, useState } from 'react';
import { useAdaptive } from '@casts/common';

export const useAside = () => {
  const adaptive = useAdaptive();

  const isAsideShouldFloat = useMemo(() => !adaptive?.medium, [adaptive]);

  const [asideVisible, setAsideVisible] = useState(() => adaptive?.medium);

  const toggleAsideVisible = () => setAsideVisible(!asideVisible);

  useEffect(() => {
    // always show aside when screen is bigger than medium
    setAsideVisible(!isAsideShouldFloat);
  }, [adaptive?.medium, isAsideShouldFloat]);

  return {
    isAsideShouldFloat,
    asideVisible,
    toggleAsideVisible,
  };
};
