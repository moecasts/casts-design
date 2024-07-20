import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PlanetFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-planet-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M5.322 5.966A9.152 9.152 0 0 1 7.2 4.386a4.483 4.483 0 0 0-.844-.157c-.572-.043-.823.093-.93.2-.106.106-.242.357-.2.93.015.183.047.386.097.607Zm15.404 8.245c.061.123.12.245.177.366.476 1.02.791 2.017.859 2.913.067.892-.106 1.82-.78 2.495-.674.674-1.603.847-2.495.78-.78-.06-1.637-.306-2.52-.684l-.003.002a13.258 13.258 0 0 1-.462-.208c-2.033-.963-4.359-2.654-6.542-4.838-2.181-2.181-3.872-4.505-4.835-6.536-.073-.155-.143-.31-.209-.463l.001-.002c-.379-.885-.626-1.745-.685-2.527-.068-.892.105-1.82.78-2.495.673-.674 1.602-.847 2.494-.78.896.068 1.892.383 2.913.86.124.057.248.117.373.18a8.996 8.996 0 0 1 8.572 2.362 8.996 8.996 0 0 1 2.362 8.575Zm-1.113 2.593a9.03 9.03 0 0 1-1.576 1.871c.218.05.419.081.6.095.573.043.824-.093.93-.2.108-.106.244-.357.2-.93a4.468 4.468 0 0 0-.154-.836Zm-13.977 1.56a8.993 8.993 0 0 1-2.417-8.342c1.082 1.981 2.705 4.1 4.68 6.076 1.977 1.977 4.098 3.6 6.08 4.683a8.993 8.993 0 0 1-8.343-2.417Z" />
    </svg>
  );
};
export { PlanetFill };
