import { RefObject } from 'react';
import { useCircleTransition } from '@casts/common';

import { useAppContext } from '../store/context';

export const useThemeSwitch = (themeSwitchRef: RefObject<HTMLElement>) => {
  const { themeMode, setAppContext } = useAppContext();

  const { circleTransition } = useCircleTransition();

  const update = () => {
    const newThemeMode = themeMode === 'dark' ? 'default' : 'dark';
    setAppContext({ themeMode: newThemeMode });
  };

  const toggleThemeMode = async () => {
    circleTransition({ ref: themeSwitchRef, update });
  };

  return { toggleThemeMode };
};
