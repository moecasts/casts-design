import { SpaceDirection, SpaceProps } from './types';

export const defaultSpaceProps = {
  size: '16px',
  direction: SpaceDirection.HORIZONTAL,
} satisfies Partial<SpaceProps>;
