import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MicroscopeLine = (initProps: IconProps) => {
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
    `${prefixCls}-microscope-line`,
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
      <path d="m13.196 2.268 3.25 5.63a1 1 0 0 1-.366 1.365l-1.3.75 1.001 1.732-1.732 1-1-1.733-1.299.751a1 1 0 0 1-1.366-.366L8.546 8.215a5 5 0 0 0-3.222 6.56A4.97 4.97 0 0 1 8 14c1.684 0 3.174.833 4.08 2.109l7.688-4.439 1 1.733-7.878 4.548a5 5 0 0 1 .01 2.05L21 20v2l-17 .001A4.98 4.98 0 0 1 3 19c0-1.007.298-1.945.81-2.73a7.003 7.003 0 0 1 3.717-9.82l-.393-.682a2 2 0 0 1 .732-2.732l2.598-1.5a2 2 0 0 1 2.732.732M8 16a3 3 0 0 0-2.83 4h5.66A3 3 0 0 0 8 16m3.464-12.732-2.598 1.5 2.75 4.763 2.598-1.5z" />
    </svg>
  );
};
export { MicroscopeLine };
