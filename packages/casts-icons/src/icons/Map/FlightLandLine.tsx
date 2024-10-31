import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FlightLandLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(
    `${prefixCls}`,
    `${prefixCls}-flight-land-line`,
    className,
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M20.949 14.888a1.5 1.5 0 0 1-1.837 1.06L3.445 11.752a1 1 0 0 1-.74-.983l.09-5.403 1.449.388.915 3.351 5.095 1.366-.37-8.382 1.933.518 2.81 9.035 5.261 1.41a1.5 1.5 0 0 1 1.061 1.837M4 19h16v2H4z" />
    </svg>
  );
};
export { FlightLandLine };
