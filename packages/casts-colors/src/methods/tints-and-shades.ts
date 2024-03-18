/**
 * tints and shades generate algorithm
 *
 * Inspired by https://github.com/ant-design/ant-design/blob/734beb84ffc3f0469fbae1566aa8450f966cb261/components/style/color/colorPalette.less
 *
 */
import bezier from 'bezier-easing';
import { Colord, colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';

import { defaultCurves } from '../common';

extend([mixPlugin]);

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
