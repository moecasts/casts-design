import { useState } from 'react';
import { Button } from '@casts/button';
import { BrushLine } from '@casts/icons';
import { MainColor, ThemeGenerator, ThemeMode } from '@casts/theme-generator';

import { getPrefixCls } from '../../common';
import { themeStorage } from '../../storage/theme';
import { defaultMainColors } from '../../theme';

export const FloatButton = () => {
  const prefixCls = getPrefixCls('float-button');

  const classes = `${prefixCls}`;

  const [themeGeneratorVisible, setThemeGeneratorVisible] = useState(false);

  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    return themeStorage.get()?.mode || 'default';
  });

  const [themeMainColors, setThemeMainColors] = useState<MainColor[]>(() => {
    return themeStorage.get()?.mainColors || defaultMainColors;
  });

  const updateTheme = (payload: {
    mainColors?: MainColor[];
    mode?: ThemeMode;
  }) => {
    const { mainColors, mode } = payload;

    if (mainColors) {
      setThemeMainColors(mainColors);
    }

    if (mode) {
      setThemeMode(mode);
    }

    if (mode !== 'dark') {
      document.body.style.backgroundColor =
        'var(--cds-color-surface-container-default)';
    } else {
      document.body.style.backgroundColor = '';
    }

    const theme = {
      mode: themeMode,
      mainColors: themeMainColors,
      ...payload,
    };

    themeStorage.set(theme);
  };

  return (
    <>
      <Button
        className={classes}
        shape="pill"
        icon={<BrushLine />}
        size="large"
        onClick={() => setThemeGeneratorVisible(!themeGeneratorVisible)}
      ></Button>
      <ThemeGenerator
        defaultMode={themeMode}
        defaultMainColors={themeMainColors}
        onMainColorsChange={(mainColors) => updateTheme({ mainColors })}
        onModeChange={(mode) => updateTheme({ mode })}
        visible={themeGeneratorVisible}
        onVisibleChange={(visible) => setThemeGeneratorVisible(visible)}
        addThemeCodeOnMounted={true}
      />
    </>
  );
};
