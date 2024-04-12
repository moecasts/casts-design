import { BaseComponentProps } from '@casts/common';

export type FlexType = number | 'none' | 'auto' | string;

export type UseColStylesProps = BaseColProps & {
  className?: BaseComponentProps['className'];

  style?: BaseComponentProps['style'];
} & {
  /**
   * < 576px responsive grid, which can be a number of grids or an object containing other attributes
   */
  xsmall?: number | BaseColProps;
  /**
   * ≥ 576px responsive grid, which can be a number of grids or an object containing other properties
   */
  small?: number | BaseColProps;
  /**
   * ≥ 768px responsive grid, which can be a number of grids or an object containing other properties
   */
  medium?: number | BaseColProps;
  /**
   * ≥ 992px responsive grid, which can be a number of grids or an object containing other properties
   */
  large?: number | BaseColProps;
  /**
   * ≥ 1200px responsive grid, which can be a number of grids or an object containing other properties
   */
  xlarge?: number | BaseColProps;
  /**
   * ≥ 1600px responsive grid, which can be a number of grids or an object containing other properties
   */
  xxlarge?: number | BaseColProps;
};

export type BaseColProps = {
  /**
   * The number of interval cells on the left side of a grid. There can be no grid in the interval.
   */
  offset?: number;
  /**
   * Grid order, effective in `flex` layout mode
   */
  order?: number;
  /**
   * The grid moves to the left
   */
  pull?: number;
  /**
   * The grid moves to the right
   */
  push?: number;
  /**
   * The number of grid spaces is equivalent to `display: none` when it is 0
   */
  span?: number;

  /**
   * Flex layout style
   */
  flex?: FlexType;
};

export type ColProps = BaseComponentProps &
  UseColStylesProps & {
    /**
     * custom tag
     * @default div
     */
    tag?: string;
  };
