export type GutterObject = {
  xsmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  xxlarge: number;
};

export type Gutter = number | GutterObject | Array<GutterObject | number>;
