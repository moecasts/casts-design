import { BaseComponentProps } from '@casts/common';

import { MainColor } from './common';

export type ThemeMode = 'light' | 'dark';

export type UseThemeGeneratorProps = BaseComponentProps & {
  /**
   * mode switchable: light or dark
   */
  modeSwitchable?: boolean;

  mode?: ThemeMode;

  defaultMode?: ThemeMode;

  onModeChange?: (mode: ThemeMode) => void;

  /**
   * main colors
   */
  mainColors?: MainColor[];

  defaultMainColors?: MainColor[];

  onMainColorsChange?: (mainColors: MainColor[]) => void;

  /**
   * theme generator drawer visible
   */
  visible?: boolean;

  /**
   * theme generator drawer visible change
   */
  onVisibleChange?: (visible: boolean) => void;

  /**
   * append theme code on mounted
   * @default true
   */
  addThemeCodeOnMounted?: boolean;
};

export type ThemeGeneratorProps = UseThemeGeneratorProps;
