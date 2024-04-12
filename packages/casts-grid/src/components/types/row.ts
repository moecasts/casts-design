import { BaseComponentProps } from '@casts/common';

import { Gutter, GutterObject } from './common';

export type RowContextProps = {
  /**
   * Grid interval, can be written as pixel value or support responsive object writing { xs: 8, sm: 16, md: 24}
   */
  gutter?: Gutter;
  /**
   * current media size
   * @default medium
   */
  size?: keyof GutterObject;
};

export type UseRowStylesProps = {
  size?: RowContextProps['size'];

  className?: BaseComponentProps['className'];

  style?: BaseComponentProps['style'];
} & {
  /**
   * Grid interval, can be written as pixel value or support responsive object writing { xs: 8, sm: 16, md: 24}
   */
  gutter?: Gutter;

  /**
   * Horizontal arrangement under flex layout
   * @default start
   */
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';

  /**
   * Vertical alignment under flex layout
   * @default top
   */
  align?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'baseline'
    | 'top'
    | 'middle'
    | 'bottom';
};

export type RowProps = BaseComponentProps &
  Omit<UseRowStylesProps, 'size'> & {
    /**
     * Custom tag
     * @default div
     * */
    tag?: string;
  };
