import { CSSProperties } from 'react';
import { formatSizeUnit, isObject } from '@casts/common';

import { Gutter, GutterObject } from '../types';

const calcGutterSize = (payload: { gutter?: Gutter; size?: string }) => {
  const { gutter, size } = payload;

  let gutterSize = 0;
  if (typeof gutter === 'number') {
    gutterSize = gutter / 2;
  } else if (
    size &&
    isObject(gutter) &&
    (gutter as Record<PropertyKey, number>)[size]
  ) {
    gutterSize = (gutter as Record<PropertyKey, number>)[size] / 2;
  }

  return gutterSize;
};

export const calcColGutterStyles = (payload: {
  gutter?: Gutter;
  size?: keyof GutterObject;
}) => {
  const { gutter, size } = payload;
  const gutterStyles: CSSProperties = {};

  if (gutter) {
    const gutterSize = calcGutterSize({
      gutter,
      size,
    });

    Object.assign(gutterStyles, {
      paddingLeft: formatSizeUnit(gutterSize),
      paddingRight: formatSizeUnit(gutterSize),
    });
  }

  return gutterStyles;
};

export const calcRowGutterStyles = (payload: {
  gutter?: Gutter;
  size?: keyof GutterObject;
}) => {
  const { gutter, size } = payload;
  const gutterStyles: CSSProperties = {};

  const rowGutter = Array.isArray(gutter) && gutter.length ? gutter[0] : gutter;
  if (rowGutter) {
    const gutterSize = calcGutterSize({
      gutter: rowGutter,
      size,
    });
    Object.assign(gutterStyles, {
      marginLeft: `-${formatSizeUnit(gutterSize)}`,
      marginRight: `-${formatSizeUnit(gutterSize)}`,
    });
  }

  // @ts-ignore
  if (gutter?.[1]) {
    const gutterSize = calcGutterSize({
      // @ts-ignore
      gutter: gutter[1],
      size,
    });
    Object.assign(gutterStyles, {
      rowGap: formatSizeUnit(gutterSize * 2),
    });
  }

  return gutterStyles;
};
