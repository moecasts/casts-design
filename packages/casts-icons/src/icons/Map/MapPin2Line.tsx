import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MapPin2Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-map-pin2-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m12 23.728-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728Zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95ZM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
    </svg>
  );
};
export { MapPin2Line };
