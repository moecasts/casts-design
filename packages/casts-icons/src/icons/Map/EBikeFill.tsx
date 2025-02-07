import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const EBikeFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-e-bike-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M15.5 6.937A7 7 0 0 1 19 13v8h-4.17a3.001 3.001 0 0 1-5.66 0H5v-8a7 7 0 0 1 3.5-6.063A4 4 0 0 1 8.125 6H5V4h3.126a4.002 4.002 0 0 1 7.748 0H19v2h-3.126q-.13.497-.373.937M12 14a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1m0-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </svg>
  );
};
export { EBikeFill };
