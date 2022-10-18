import { useMemo } from 'react';
import { capitalize, groupBy, map, pickBy, sortBy } from '@casts/common';
import { Space } from '@casts/space';
import * as tokens from '@casts/theme';
import { Heading } from '@casts/typography';

import './palette.scss';

const categories = [
  'brand',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  'neutral',
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

  return (
    <Space direction="vertical" size={40}>
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
