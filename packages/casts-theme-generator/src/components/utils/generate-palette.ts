import { reduce } from '@casts/common';
import { CdsPrefixCls } from '@casts/theme';
import { inputToRGB, rgbToHex, rgbToHsv, TinyColor } from '@ctrl/tinycolor';

import { MainColor } from '../types';

export type Palette = Record<
  number,
  { attributes: { category: string }; value: string }
>;

export type Palettes = Record<string, Palette>;

const hueStep = 2; // 色相阶梯
const saturationStep = 0.16; // 饱和度阶梯，浅色部分
const saturationStep2 = 0.05; // 饱和度阶梯，深色部分
const brightnessStep1 = 0.05; // 亮度阶梯，浅色部分
const brightnessStep2 = 0.15; // 亮度阶梯，深色部分
const lightColorCount = 5; // 浅色数量，主色上
const darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表
const darkColorMap = [
  { index: 7, opacity: 0.15 },
  { index: 6, opacity: 0.25 },
  { index: 5, opacity: 0.3 },
  { index: 5, opacity: 0.45 },
  { index: 5, opacity: 0.65 },
  { index: 5, opacity: 0.85 },
  { index: 4, opacity: 0.9 },
  { index: 3, opacity: 0.95 },
  { index: 2, opacity: 0.97 },
  { index: 1, opacity: 0.98 },
];

interface HsvObject {
  h: number;
  s: number;
  v: number;
}

interface RgbObject {
  r: number;
  g: number;
  b: number;
}

// Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`
function toHsv({ r, g, b }: RgbObject): HsvObject {
  const hsv = rgbToHsv(r, g, b);
  return { h: hsv.h * 360, s: hsv.s, v: hsv.v };
}

// Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`
function toHex({ r, g, b }: RgbObject): string {
  return `#${rgbToHex(r, g, b, false)}`;
}

// Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.
function mix(rgb1: RgbObject, rgb2: RgbObject, amount: number): RgbObject {
  const p = amount / 100;
  const rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b,
  };
  return rgb;
}

function getHue(hsv: HsvObject, i: number, light?: boolean): number {
  let hue: number;
  // 根据色相不同，色相转向不同
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light
      ? Math.round(hsv.h) - hueStep * i
      : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light
      ? Math.round(hsv.h) + hueStep * i
      : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}

function getSaturation(hsv: HsvObject, i: number, light?: boolean): number {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  let saturation: number;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  // 边界值修正
  if (saturation > 1) {
    saturation = 1;
  }
  // 第一格的 s 限制在 0.06-0.1 之间
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}

function getValue(hsv: HsvObject, i: number, light?: boolean): number {
  let value: number;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}

interface Opts {
  theme?: 'dark' | 'default';
  backgroundColor?: string;
}

export function generate(color: string, opts: Opts = {}): string[] {
  const patterns: string[] = [];
  const pColor = inputToRGB(color);
  for (let i = lightColorCount; i > 0; i -= 1) {
    const hsv = toHsv(pColor);
    const colorString: string = toHex(
      inputToRGB({
        h: getHue(hsv, i, true),
        s: getSaturation(hsv, i, true),
        v: getValue(hsv, i, true),
      }),
    );
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (let i = 1; i <= darkColorCount; i += 1) {
    const hsv = toHsv(pColor);
    const colorString: string = toHex(
      inputToRGB({
        h: getHue(hsv, i),
        s: getSaturation(hsv, i),
        v: getValue(hsv, i),
      }),
    );
    patterns.push(colorString);
  }

  // dark theme patterns
  if (opts.theme === 'dark') {
    return darkColorMap.map(({ index, opacity }) => {
      const darkColorString: string = toHex(
        mix(
          inputToRGB(opts.backgroundColor || '#141414'),
          inputToRGB(patterns[index]),
          opacity * 100,
        ),
      );
      return darkColorString;
    });
  }
  return patterns;
}

export const namings = {
  materials: [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
};

export const neutral = (reverse = false) => {
  const shades = [
    '0, 0%, 100%',
    '0, 0%, 99%',
    '0, 0%, 97%',
    '0, 0%, 96.8%',
    '0, 0%, 95%',
    '0, 0%, 93%',
    '0, 0%, 85%',
    '0, 0%, 68%',
    '0, 0%, 40%',
    '0, 0%, 28%',
    '0, 0%, 18%',
    '0, 0%, 6%',
    '0, 0%, 0%',
  ];

  const invertedShades = [
    '0, 0%, 0%',
    '0, 0%, 3%',
    '0, 0%, 9%',
    '0, 0%, 13%',
    '0, 0%, 18%',
    '0, 0%, 21%',
    '0, 0%, 28%',
    '0, 0%, 35%',
    '0, 0%, 75%',
    '0, 0%, 78%',
    '0, 0%, 87%',
    '0, 0%, 95%',
    '0, 0%, 100%',
  ];

  const naming = [
    '0',
    '50',
    '100',
    '150',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    '1000',
  ];

  const finalShades = reverse ? invertedShades : shades;

  const namedShades = naming.reduce((namedShadesAcc, step, index) => {
    const hsl = finalShades[index];
    return {
      ...namedShadesAcc,
      [step]: {
        value: hsl,
      },
    };
  }, {});

  return namedShades;
};

export const generatePalettes = (
  mainColors: MainColor[],
  reverse = false,
): Palettes => {
  const palettes: Palettes = mainColors.reduce((acc, { color, name }) => {
    const shades = generate(color, {
      theme: reverse ? 'dark' : 'default',
    });

    // const finalShades = reverse ? shades.reverse() : shades;
    const finalShades = shades;

    const namedShades = namings.materials.reduce(
      (namedShadesAcc, step, index) => {
        const color = new TinyColor(finalShades[index]);

        const hsl = color.toHslString().replace('hsl(', '').replace(')', '');
        return {
          ...namedShadesAcc,
          [step]: {
            value: hsl,
          },
        };
      },
      {},
    );

    return {
      ...acc,
      [name]: namedShades,
    };
  }, {});

  palettes.neutral = neutral(reverse);

  return palettes;
};

export const toCssVariables = (palettes: Palettes) => {
  const getPaletteVariableName = (payload: {
    category: string;
    step: string;
  }) => {
    return `--${CdsPrefixCls}-color-palette-hsl-${payload.category}-${payload.step}`;
  };

  const cssVariables =
    ':root[theme-palette="custom"] {\n' +
    reduce(
      palettes,
      (allCode, palette, category) => {
        return (
          allCode +
          reduce(
            palette,
            (code, value, step) => {
              return (
                code +
                `${getPaletteVariableName({
                  category,
                  step,
                })}: ${value.value};\n`
              );
            },
            '',
          )
        );
      },
      '',
    ) +
    '}\n';

  return cssVariables;
};

export const appendThemeVariablesToHead = (codes: string) => {
  const getStyleElement = () => {
    let style = document.querySelector('style#theme-custom');

    if (!style) {
      style = document.createElement('style');
      style.setAttribute('id', 'theme-custom');
      document.head.appendChild(style);
    }

    return style;
  };

  getStyleElement().innerHTML = codes;
};
