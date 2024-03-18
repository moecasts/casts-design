import { extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';

import { tintsAndShades } from './methods/tints-and-shades';

extend([mixPlugin]);

export const runColors = () => {
  const baseColors = ['#CA56DA'];

  const colors = baseColors.map((color) => {
    return tintsAndShades(color);
  });

  return colors;
};

export * from './methods/tints-and-shades';
