import bezier from 'bezier-easing';
import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';

extend([mixPlugin]);

const easing = bezier(0, 0, 1, 1);

export const tintsAndShades = (color: string) => {
  const colorObj = colord(color);

  const steps = 10;

  const primaryStep = Math.round(steps / 2);

  const beforeSteps = Array(primaryStep)
    .fill(null)
    .map((_, idx) => idx);

  const afterSteps = Array(steps - primaryStep - 1)
    .fill(null)
    .map((_, idx) => primaryStep + idx + 1);

  const totalSteps = [...beforeSteps, primaryStep, ...afterSteps];

  const factors = totalSteps.map((step) => {
    const factor = easing(step / (steps - 1));

    return factor;
  });

  // const colors = totalSteps.map((step) => {
  //   let currentColorObj = colorObj;
  //
  //   if (step !== primaryStep) {
  //     const amount = primaryStep - step;
  //
  //     if (amount > 0) {
  //       currentColorObj = currentColorObj.lighten(Math.abs(amount) / 12);
  //     } else {
  //       currentColorObj = currentColorObj.darken(Math.abs(amount) / 12);
  //     }
  //   }
  //
  //   return currentColorObj.toHex();
  // });

  const colors = [
    ...colorObj
      .tints(beforeSteps.length + 1 + 1)
      .slice(1, beforeSteps.length + 1)
      .reverse()
      .map((color) => color.toHex()),
    colorObj.toHex(),
    ...colorObj
      .shades(afterSteps.length + 1 + 1)
      .slice(1, afterSteps.length + 1)
      .map((color) => color.toHex()),
  ];

  console.log('debug2 xxx', { totalSteps, colors, factors, colorObj });

  return colors;
};

export const runColors = () => {
  const baseColors = ['#CA56DA'];

  const colors = baseColors.map((color) => {
    return tintsAndShades(color);
  });

  return colors;
};

// runColors();
