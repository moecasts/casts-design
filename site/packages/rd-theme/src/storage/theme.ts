import { BrowserStorage } from '@casts/common';
import { MainColor, ThemeMode } from '@casts/theme-generator';

export const themeStorage = new BrowserStorage<{
  mode: ThemeMode;
  mainColors: MainColor[];
}>('theme');
