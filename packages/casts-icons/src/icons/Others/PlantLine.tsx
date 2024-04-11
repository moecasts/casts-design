import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PlantLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-plant-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M5.998 2a6.999 6.999 0 0 1 6.197 3.741A6.491 6.491 0 0 1 17.498 3h3.5v2.5a6.5 6.5 0 0 1-6.5 6.5h-1.5v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-2h-2a7 7 0 0 1-7-7V2h4Zm10 13h-8v5h8v-5Zm3-10h-1.5a4.5 4.5 0 0 0-4.5 4.5v.5h1.5a4.5 4.5 0 0 0 4.5-4.5V5Zm-13-1h-2a5 5 0 0 0 5 5h2a5 5 0 0 0-5-5Z" />
    </svg>
  );
};
export { PlantLine };
