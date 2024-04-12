/**
 * Clamps a number between a minimum and maximum value.
 */
export const clampNumber = (value: number, min: number, max: number) => {
  return value < min ? min : value > max ? max : value;
};
