/**
 * tints and shades generate algorithm
 *
 * Inspired by https://github.com/ant-design/ant-design/blob/734beb84ffc3f0469fbae1566aa8450f966cb261/components/style/color/colorPalette.less
 *
 */
import bezier from 'bezier-easing';
import { Colord, colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';

extend([mixPlugin]);

const defaultCurves: Record<
  string,
  {
    name: string;
    formatted_name: string;
    value: [number, number, number, number];
  }
> = {
  linear: {
    name: 'linear',
    formatted_name: 'Linear',
    value: [0.5, 0.5, 0.5, 0.5],
  },
  easeInCubic: {
    name: 'easeInCubic',
    formatted_name: 'Cubic - EaseIn',
    value: [0.55, 0.055, 0.675, 0.19],
  },
  easeOutCubic: {
    name: 'easeOutCubic',
    formatted_name: 'Cubic - EaseOut',
    value: [0.215, 0.61, 0.355, 1],
  },
  easeInOutCubic: {
    name: 'easeInOutCubic',
    formatted_name: 'Cubic - EaseInOut',
    value: [0.645, 0.045, 0.355, 1],
  },
  easeInSine: {
    name: 'easeInSine',
    formatted_name: 'Sine - EaseIn',
    value: [0.47, 0, 0.745, 0.715],
  },
  easeOutSine: {
    name: 'easeOutSine',
    formatted_name: 'Sine - EaseOut',
    value: [0.39, 0.575, 0.565, 1],
  },
  easeInOutSine: {
    name: 'easeInOutSine',
    formatted_name: 'Sine - EaseInOut',
    value: [0.445, 0.05, 0.55, 0.95],
  },
  easeInQuad: {
    name: 'easeInQuad',
    formatted_name: 'Quad - EaseIn',
    value: [0.55, 0.085, 0.68, 0.53],
  },
  easeOutQuad: {
    name: 'easeOutQuad',
    formatted_name: 'Quad - EaseOut',
    value: [0.25, 0.46, 0.45, 0.94],
  },
  easeInOutQuad: {
    name: 'easeInOutQuad',
    formatted_name: 'Quad - EaseInOut',
    value: [0.455, 0.03, 0.515, 0.955],
  },
  easeInQuart: {
    name: 'easeInQuart',
    formatted_name: 'Quart - EaseIn',
    value: [0.895, 0.03, 0.685, 0.22],
  },
  easeOutQuart: {
    name: 'easeOutQuart',
    formatted_name: 'Quart - EaseOut',
    value: [0.165, 0.84, 0.44, 1],
  },
  easeInOutQuart: {
    name: 'easeInOutQuart',
    formatted_name: 'Quart - EaseInOut',
    value: [0.77, 0, 0.175, 1],
  },
  easeInQuint: {
    name: 'easeInQuint',
    formatted_name: 'Quint - EaseIn',
    value: [0.755, 0.05, 0.855, 0.06],
  },
  easeOutQuint: {
    name: 'easeOutQuint',
    formatted_name: 'Quint - EaseOut',
    value: [0.23, 1, 0.32, 1],
  },
  easeInOutQuint: {
    name: 'easeInOutQuint',
    formatted_name: 'Quint - EaseInOut',
    value: [0.86, 0, 0.07, 1],
  },
  easeInCirc: {
    name: 'easeInCirc',
    formatted_name: 'Circ - EaseIn',
    value: [0.6, 0.04, 0.98, 0.335],
  },
  easeOutCirc: {
    name: 'easeOutCirc',
    formatted_name: 'Circ - EaseOut',
    value: [0.075, 0.82, 0.165, 1],
  },
  easeInOutCirc: {
    name: 'easeInOutCirc',
    formatted_name: 'Circ - EaseInOut',
    value: [0.785, 0.135, 0.15, 0.86],
  },
  easeInExpo: {
    name: 'easeInExpo',
    formatted_name: 'Expo - EaseIn',
    value: [0.95, 0.05, 0.795, 0.035],
  },
  easeOutExpo: {
    name: 'easeOutExpo',
    formatted_name: 'Expo - EaseOut',
    value: [0.19, 1, 0.22, 1],
  },
  easeInOutExpo: {
    name: 'easeInOutExpo',
    formatted_name: 'Expo - EaseInOut',
    value: [1, 0, 0, 1],
  },
  easeInBack: {
    name: 'easeInBack',
    formatted_name: 'Back - EaseIn',
    value: [0.6, -0.28, 0.735, 0.045],
  },
  easeOutBack: {
    name: 'easeOutBack',
    formatted_name: 'Back - EaseOut',
    value: [0.175, 0.885, 0.32, 1.275],
  },
  easeInOutBack: {
    name: 'easeInOutBack',
    formatted_name: 'Back - EaseInOut',
    value: [0.68, -0.55, 0.265, 1.55],
  },
};

const defaultEasingFn = bezier(...defaultCurves.easeInCubic.value);

const getShadeColor = (colorObj: Colord) => {
  const shadeColor = colorObj;

  const warmDark = 0.5; // warm color darken radio
  const warmRotate = -26; // warm color rotate degree
  const coldDark = 0.55; // cold color darken radio
  const coldRotate = 10; // cold color rotate degree

  if (shadeColor.toRgb().r > shadeColor.toRgb().b) {
    return shadeColor
      .darken((shadeColor.toHsl().l * warmDark) / 100)
      .rotate(warmRotate);
  }

  // colder color
  return shadeColor
    .darken((shadeColor.toHsl().l * coldDark) / 100)
    .rotate(coldRotate);
};

export type TintsAndShadesOptions = {
  steps?: number;
  padStart?: number;
  padEnd?: number;
  easing?: [number, number, number, number];
  dark?: boolean;
};

export const tintsAndShades = (
  color: string,
  opts: TintsAndShadesOptions = {},
) => {
  const { dark, steps = 10 } = opts;

  const [defaultPadStart, defaultPadEnd] = dark ? [0, 0.08] : [0.008, 0.01];

  const padStart = opts.padStart ?? defaultPadStart;
  const padEnd = opts.padEnd ?? defaultPadEnd;

  const easingFn = opts.easing ? bezier(...opts.easing) : defaultEasingFn;

  const colorObj = colord(color);

  const [startColorObj, endColorObj] = dark
    ? [getShadeColor(colorObj), colord('#fff')]
    : [colord('#fff'), getShadeColor(colorObj)];

  const primaryStep = Math.round(steps / 2);

  const beforeSteps = Array(primaryStep)
    .fill(null)
    .map((_, idx) => idx);

  const afterSteps = Array(steps - primaryStep - 1)
    .fill(null)
    .map((_, idx) => primaryStep + idx + 1);

  const totalSteps = [...beforeSteps, primaryStep, ...afterSteps];

  const factors = totalSteps.map((step) => {
    const factor =
      easingFn(step / (steps - 1)) * (1 - padStart - padEnd) + padStart;

    return factor;
  });

  const colors = totalSteps.map((step, idx) => {
    let currentColorObj = colorObj;

    const currentFactor = factors[idx];
    const primaryFactor = factors[primaryStep];

    if (step < primaryStep) {
      currentColorObj = startColorObj.mix(
        currentColorObj,
        currentFactor / primaryFactor,
      );
    }

    if (step > primaryStep) {
      const finalFactor =
        1 - (currentFactor - primaryFactor) / (1 - primaryFactor);

      currentColorObj = endColorObj.mix(currentColorObj, finalFactor);
    }

    return currentColorObj.toHslString();
  });

  return colors;
};
