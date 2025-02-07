import {
  CdsBreakpointLarge,
  CdsBreakpointMedium,
  CdsBreakpointSmall,
  CdsBreakpointXlarge,
  CdsBreakpointXxlarge,
} from '@casts/theme';

import { GutterObject } from '../types';

export const calcSize = (width: number): keyof GutterObject => {
  const smallWidth = parseInt(CdsBreakpointSmall);
  const mediumWidth = parseInt(CdsBreakpointMedium);
  const largeWidth = parseInt(CdsBreakpointLarge);
  const xlargeWidth = parseInt(CdsBreakpointXlarge);
  const xxlargeWidth = parseInt(CdsBreakpointXxlarge);

  let size: keyof GutterObject = 'xsmall';
  if (width >= xxlargeWidth) {
    size = 'xxlarge';
  } else if (width >= xlargeWidth) {
    size = 'xlarge';
  } else if (width >= largeWidth) {
    size = 'large';
  } else if (width >= mediumWidth) {
    size = 'medium';
  } else if (width >= smallWidth) {
    size = 'small';
  } else {
    size = 'xsmall';
  }

  return size;
};
