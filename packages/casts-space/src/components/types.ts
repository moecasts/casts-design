import { CSSProperties, MouseEvent, ReactNode } from 'react';

export enum SpaceSizeEnum {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export type SpaceSizeType = `${SpaceSizeEnum}` | number | string;

// dumi is not support [SpaceSizeType, SpaceSizeType], so use SpaceSizeType[]
export type SpaceSize = SpaceSizeType | SpaceSizeType[];

export enum SpaceDirection {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

export enum SpaceAlign {
  NORMAL = 'normal',
  CENTER = 'center',
  START = 'start',
  END = 'end',
  BASELINE = 'baseline',
}

export type SpaceProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  align?: `${SpaceAlign}`;
  size?: SpaceSize;
  wrap?: boolean;
  direction?: `${SpaceDirection}`;
  onClick?: (e?: MouseEvent<HTMLElement>) => void;
};
