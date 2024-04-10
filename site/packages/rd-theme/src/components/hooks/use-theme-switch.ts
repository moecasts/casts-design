import { RefObject } from 'react';
import { useCircleTransition } from '@casts/common';
import { useConfig } from '@casts/config-provider';

export const useThemeSwitch = (themeSwitchRef: RefObject<HTMLElement>) => {
  const { themeMode, setConfig } = useConfig();

  const { circleTransition } = useCircleTransition();

  const update = () => {
    const newThemeMode = themeMode === 'dark' ? 'default' : 'dark';
    setConfig({ themeMode: newThemeMode });
  };

  const toggleThemeMode = async () => {
    circleTransition({ ref: themeSwitchRef, update });
  };

  return { toggleThemeMode };
};
