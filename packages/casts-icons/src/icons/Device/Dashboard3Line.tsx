import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Dashboard3Line = (initProps: IconProps) => {
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
    `${prefixCls}-dashboard3-line`,
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m3.833 3.337a.596.596 0 0 1 .763.067.59.59 0 0 1 .063.76q-3.27 4.569-3.598 4.897a1.5 1.5 0 0 1-2.122-2.122q.56-.56 4.894-3.602M17.5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-11 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m2.318-3.596a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414M12 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
    </svg>
  );
};
export { Dashboard3Line };
