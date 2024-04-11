import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const HardDrive3Line = (initProps: IconProps) => {
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
    `${prefixCls}-hard-drive3-line`,
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
      <path d="M4.508 2.876A1 1 0 0 1 5.5 2h13a1 1 0 0 1 .992.876l1.5 12c.005.041.008.083.008.124v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 .008-.124l1.5-12ZM6.383 4l-1.25 10h13.734l-1.25-10H6.383ZM19 16H5v4h14v-4Zm-4 1h2v2h-2v-2Zm-2 0h-2v2h2v-2Z" />
    </svg>
  );
};
export { HardDrive3Line };
