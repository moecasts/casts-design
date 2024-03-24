import { CSSProperties, useEffect } from 'react';
import { noop, useControlled, useDebounceFn } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { MainColor, ThemeMode, UseThemeGeneratorProps } from '../types';
import {
  appendThemeVariablesToHead,
  generatePalettes,
  toCssVariables,
} from '../utils/generate-palette';

export const useThemeGenerator = (props: UseThemeGeneratorProps) => {
  const { className, style, addThemeCodeOnMounted } = props;

  const [visible, onVisibleChange] = useControlled<boolean>(
    props,
    'visible',
    props.onVisibleChange || noop,
  );

  const { getPrefixCls } = useConfig();

  const prefixCls = getPrefixCls('theme-generator');

  const classes = clsx(prefixCls, className);
  const styles: CSSProperties = { ...style };

  const drawerClasses = `${prefixCls}-drawer`;

  const itemClasses = `${prefixCls}-item`;

  const itemTitleClasses = `${itemClasses}-title`;

  const itemContentClasses = `${itemClasses}-content`;

  const pickerClasses = `${prefixCls}-picker`;

  const pickerPreviewClasses = `${pickerClasses}-preview`;
  const pickerTextClasses = `${pickerClasses}-text`;

  const [mode, setMode] = useControlled<ThemeMode>(
    props,
    'mode',
    props.onModeChange || noop,
    'light',
  );

  const [mainColors, setMainColors] = useControlled<MainColor[]>(
    props,
    'mainColors',
    props.onMainColorsChange || noop,
    [],
  );

  const debounceGeneratePalettes = useDebounceFn(
    (mainColors: MainColor[], mode: ThemeMode = 'light') => {
      const reverse = mode === 'dark' ? true : false;

      const palettes = generatePalettes(mainColors, reverse);

      const cssCodes = toCssVariables(palettes);
      document.documentElement.setAttribute('theme-mode', 'custom');
      appendThemeVariablesToHead(cssCodes);
    },
    {
      wait: 300,
    },
  );

  // generate current theme when component mounted
  useEffect(() => {
    if (!addThemeCodeOnMounted) {
      return;
    }
    debounceGeneratePalettes.run(mainColors, mode);
    debounceGeneratePalettes.flush();
  }, []);

  const handleMainColorsChange = (payload: { name: string; color: string }) => {
    const { name, color } = payload;

    const newColors = [...mainColors];

    const target = newColors.find((item) => item.name === name);

    if (target) {
      target.color = color;
    }

    setMainColors(newColors);

    debounceGeneratePalettes.run(newColors, mode);
  };

  const handleModeChange = (reverse: boolean) => {
    const mode = reverse ? 'dark' : 'light';
    setMode(mode);

    debounceGeneratePalettes.run(mainColors, mode);
  };

  return {
    classes,
    styles,

    drawerClasses,

    itemClasses,
    itemTitleClasses,
    itemContentClasses,

    pickerClasses,
    pickerPreviewClasses,
    pickerTextClasses,

    mainColors,
    handleMainColorsChange,
    reverse: mode === 'dark',
    handleModeChange,

    visible,
    onVisibleChange,
  };
};
