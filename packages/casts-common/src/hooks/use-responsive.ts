import {
  CdsBreakpointLarge,
  CdsBreakpointMedium,
  CdsBreakpointSmall,
  CdsBreakpointXlarge,
  CdsBreakpointXsmall,
  CdsBreakpointXxlarge,
} from '@casts/theme';
import { configResponsive, useResponsive } from 'ahooks';

import { isCanUseDocument } from '../utils';

if (isCanUseDocument()) {
  configResponsive({
    xsmall: parseInt(CdsBreakpointXsmall),
    small: parseInt(CdsBreakpointSmall),
    medium: parseInt(CdsBreakpointMedium),
    large: parseInt(CdsBreakpointLarge),
    xlarge: parseInt(CdsBreakpointXlarge),
    xxlarge: parseInt(CdsBreakpointXxlarge),
  });
}

export const useAdaptive = useResponsive;
