import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Settings4Fill = (initProps: IconProps) => {
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
    `${prefixCls}-settings4-fill`,
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
      <path d="M5.334 4.545a10 10 0 0 1 3.542-2.048A4 4 0 0 0 12 4a4 4 0 0 0 3.124-1.502 10 10 0 0 1 3.542 2.048 4 4 0 0 0 .262 3.454 4 4 0 0 0 2.863 1.955 10 10 0 0 1 0 4.09c-1.16.178-2.23.86-2.863 1.955a4 4 0 0 0-.262 3.455 10 10 0 0 1-3.542 2.047A4 4 0 0 0 12 20a4 4 0 0 0-3.124 1.503 10 10 0 0 1-3.542-2.048 4 4 0 0 0-.262-3.455 4 4 0 0 0-2.863-1.954 10 10 0 0 1 0-4.091 4 4 0 0 0 2.863-1.955 4 4 0 0 0 .262-3.454M13.5 14.597a3 3 0 1 0-3-5.196 3 3 0 0 0 3 5.196" />
    </svg>
  );
};
export { Settings4Fill };
