import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const UserForbidLine = (initProps: IconProps) => {
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
    `${prefixCls}-user-forbid-line`,
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
      <path d="M8 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m3 17a3 3 0 0 1 4.293-2.708l-4 4.001A3 3 0 0 1 15 18m1.707 2.708 4-4.001a3 3 0 0 1-4.001 4.001M18 13a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-6 1q.126 0 .252.004a7 7 0 0 0-.975 2.04A6 6 0 0 0 6 22H4a8 8 0 0 1 8-8" />
    </svg>
  );
};
export { UserForbidLine };
