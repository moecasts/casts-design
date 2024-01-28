import { SubMenuExpandType } from '../types';

export const isExpandPopup = (expandType?: SubMenuExpandType): boolean =>
  expandType === 'popup';

export const isExpandNormal = (expandType?: SubMenuExpandType): boolean =>
  expandType === 'normal';
