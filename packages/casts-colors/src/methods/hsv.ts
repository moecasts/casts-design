import { merge } from '@casts/common';
import { generate } from '@k-vyn/coloralgorithm/src';
import { colord } from 'colord';

export type HSVOptions = any;

export const hsv = (color: string, opts: HSVOptions = {}) => {
  const colorObj = colord(color);

  const { brightnessEasing = 'easeInOutSine', dark } = opts;

  const shades = generate(
    {
      steps: 11,
      hue: {
        start: colorObj.toHsv().h,
        end: colorObj.toHsv().h,
        curve: 'easeOutQuad',
      },
      saturation: {
        start: colorObj.toHsv().s,
        end: colorObj.toHsv().s,
        rate: 1,
        curve: 'easeInQuart',
      },
      brightness: {
        start: 1,
        end: 0,
        // curve: 'easeInOutSine',
        curve: brightnessEasing,
      },
    },
    {
      // minorSteps: [0, 1, 1, 1.5],
      // minorSteps: [0, 1],
      minorSteps: [0],
      name: 'Neutral',
      lockHex: '666666',
      provideInverted: true,
      rotation: 'clockwise',
    },
  );

  const idx = dark ? 1 : 0;

  const colors = shades[idx].colors.reduce((acc, shade) => {
    const color = colord(shade.hex);
    const name = String(Number(shade.step) * 100);

    return {
      ...acc,
      [name]: color.toHslString(),
    };
  }, {});

  const colors1 = shades[0].colors.reduce((acc, shade) => {
    const color = colord(shade.hex);
    const name = String(Number(shade.step) * 100);

    return {
      ...acc,
      [name]: {
        value: color.toHslString().replace(/hsl\((.+?)\)/g, '$1'),
      },
    };
  }, {});

  const colors2 = shades[1].colors.reduce((acc, shade) => {
    const color = colord(shade.hex);
    const name = String(Number(shade.step) * 100);

    return {
      ...acc,
      [name]: {
        darkValue: color.toHslString().replace(/hsl\((.+?)\)/g, '$1'),
      },
    };
  }, {});

  return [Object.values(colors), merge(colors1, colors2)];
};
