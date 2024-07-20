import { CSSProperties, useEffect, useRef } from 'react';
import {
  noop,
  useCircleTransition,
  useControlled,
  useDebounceFn,
} from '@casts/common';
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

  /* --------------------------------- classes and styles ---------------------------------------- */
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

  /* --------------------------------- states ---------------------------------------- */
  const [mode, setMode] = useControlled<ThemeMode>(
    props,
    'mode',
    props.onModeChange || noop,
    'default',
  );

  const { circleTransition } = useCircleTransition();
  const generatorRef = useRef<HTMLElement>(null);

  const [mainColors, setMainColors] = useControlled<MainColor[]>(
    props,
    'mainColors',
    props.onMainColorsChange || noop,
    [],
  );

  /* --------------------------------- events ---------------------------------------- */

  const debounceGeneratePalettes = useDebounceFn(
    (mainColors: MainColor[], mode: ThemeMode = 'default') => {
      const update = () => {
        const reverse = mode === 'dark' ? true : false;

        const palettes = generatePalettes(mainColors, reverse);

        const cssCodes = toCssVariables(palettes);
        document.documentElement.setAttribute('theme-mode', mode);
        document.documentElement.setAttribute('theme-palette', 'custom');
        appendThemeVariablesToHead(cssCodes);
      };

      circleTransition({
        ref: generatorRef,
        update,
      });
    },
    {
      wait: 300,
    },
  );

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
    const mode = reverse ? 'dark' : 'default';
    setMode(mode);

    debounceGeneratePalettes.run(mainColors, mode);
  };

  // generate current theme when component mounted
  useEffect(() => {
    if (!addThemeCodeOnMounted) {
      return;
    }
    debounceGeneratePalettes.run(mainColors, mode);
    debounceGeneratePalettes.flush();
  }, []);

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

    generatorRef,
  };
};
