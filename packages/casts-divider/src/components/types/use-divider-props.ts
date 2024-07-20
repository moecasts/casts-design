import type {
  Align,
  BaseComponentProps,
  Direction,
  WithRequired,
} from '@casts/common';

export type UseDividerProps = WithRequired<
  BaseComponentProps,
  'getPrefixCls'
> & {
  /**
   * Divider Direction
   * @default vertical
   */
  layout?: Direction;

  /**
   * Content Align Mode
   * @default center
   */
  align?: Align;
};
