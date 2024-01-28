import { CSSProperties } from 'react';
import { formatSizeUnit } from '@casts/common';

import { defaultSpaceProps } from '../default-props';
import { SpaceAlign, SpaceDirection, SpaceSize, SpaceSizeEnum } from '../types';

export const getGapBySizeEnum = (size: SpaceSize): string => {
  if (size === SpaceSizeEnum.SMALL) {
    return '8px';
  }

  if (size === SpaceSizeEnum.LARGE) {
    return '40px';
  }

  return '16px';
};

export const getFlexDirectionBySpaceDirection = (
  direction?: `${SpaceDirection}`,
): CSSProperties['flexDirection'] => {
  if (direction === SpaceDirection.VERTICAL) {
    return 'column';
  }

  if (direction === SpaceDirection.HORIZONTAL) {
    return 'row';
  }

  return 'initial';
};

export const getAlignItemsBySpaceAlign = (align?: `${SpaceAlign}`) => {
  if (align === SpaceAlign.START || align === SpaceAlign.END) {
    return `flex-${align}`;
  }

  return align;
};

export const getGap = (size?: SpaceSize) => {
  if (!size && size !== 0) {
    return defaultSpaceProps.size as string;
  }

  if (Object.values(SpaceSizeEnum).includes(size as SpaceSizeEnum)) {
    return getGapBySizeEnum(size);
  }

  if (Array.isArray(size)) {
    return size.map((item) => formatSizeUnit(item)).join(' ');
  }

  return formatSizeUnit(size);
};
