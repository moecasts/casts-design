import { useMemo, useState } from 'react';
import { CurveEditor, hsv } from '@casts/colors';
import {
  capitalize,
  groupBy,
  map,
  pickBy,
  sortBy,
  useDebounceFn,
} from '@casts/common';
import { Space } from '@casts/space';
import * as tokens from '@casts/theme';
import { toCssVariables } from '@casts/theme-generator';
import { Heading } from '@casts/typography';

import './palette.scss';

const categories = [
  'neutral',
  'brand',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  // 'neutral',
  'white',
  'black',
  'transparent',
];

const Palette = () => {
  const getColorStep = (color: string) => {
    const matches = color.match(/color-palette-(.+?)(-(\d+))?\)/);
    return Number(matches?.[3] || matches?.[1]) || color;
  };

  const paletteTokens = useMemo(() => {
    let result: any = tokens;
    result = pickBy(result, (_, name) =>
      new RegExp('Token.*?ColorPalette').test(name),
    );
    result = groupBy(result, (value) => {
      const matches = String(value).match(/color-palette-(.+?)(-\d+)?\)/);

      return matches?.[1] || value;
    });

    return result as Record<string, string>;
  }, []);

  const [easing, setEasing] = useState<
    [number, number, number, number] | undefined
    // >(undefined);
  >([0, 0, 1, 0.75]);

  const debounceGenerate = useDebounceFn(
    (palettes) => {
      const code = toCssVariables(palettes);

      // document.documentElement.setAttribute('theme-mode', 'custom');
      // appendThemeVariablesToHead(code);

      console.log('debug1', palettes, code);
    },
    {
      wait: 100,
    },
  );

  const generateColors = (dark = false) => {
    // const baseColors = ['#CA56DA'];
    const baseColors = ['#666666'];

    const palettes = baseColors.map((color) => {
      return hsv(color, {
        dark,
        brightnessEasing: easing,
      });
      // return tintsAndShades(color, {
      //   easing,
      // });
    });

    const colors = map(palettes, (item) => item[0]);

    const colorsHsl = map(palettes, (item) => item[1])[0];

    if (!dark) {
      debounceGenerate.run({
        neutral: colorsHsl,
      });
    }

    return colors;
  };

  const colorGroups = useMemo(() => generateColors(), [easing]);
  const colorGroupsB = useMemo(() => generateColors(true), [easing]);

  return (
    <Space direction="vertical" size={40}>
      <CurveEditor
        points={easing}
        onChange={(points) => {
          setEasing(points);
        }}
      />
      {map(colorGroups, (colors, idx) => (
        <Space wrap key={idx}>
          {map(colors, (color: string, i) => (
            <div
              className="demo-color-item"
              style={{ backgroundColor: color }}
              key={i}
            ></div>
          ))}
        </Space>
      ))}

      {map(colorGroupsB, (colors, idx) => (
        <Space wrap key={idx} style={{ marginTop: '40px' }}>
          {map(colors, (color: string, i) => (
            <div
              className="demo-color-item"
              style={{ backgroundColor: color }}
              key={i}
            ></div>
          ))}
        </Space>
      ))}

      {map(categories, (category) => {
        const palettes = paletteTokens[category];
        return (
          <div key={`${category}`}>
            <Heading level={3}>{capitalize(category)}</Heading>
            <Space wrap size={32}>
              {map(
                sortBy(palettes, (color: string) => getColorStep(color)),
                (color: string) => (
                  <div
                    className="demo-color-item"
                    style={{ backgroundColor: color }}
                    key={color}
                  ></div>
                ),
              )}
            </Space>
          </div>
        );
      })}
    </Space>
  );
};

export default Palette;
