import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PoliceBadgeLine = (initProps: IconProps) => {
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
    `${prefixCls}-police-badge-line`,
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
      <path d="M16.475 4.935c.505-.025.962-.09 1.351-.168l1.732 1.98c-.39.82-.612 1.602-.695 2.377-.124 1.157.089 2.143.245 2.863l.007.033c.162.744.269 1.234.253 1.809-.015.541-.147 1.256-.657 2.277-1.1 2.201-3.695 2.666-5.715 3.675-.326.164-.662.35-.996.569a10 10 0 0 0-.996-.569c-2.02-1.01-4.614-1.474-5.715-3.675-.51-1.02-.642-1.736-.657-2.277-.016-.575.09-1.065.253-1.81l.007-.032c.156-.72.369-1.706.245-2.863-.083-.775-.305-1.558-.695-2.377l1.732-1.98c.389.078.846.143 1.351.168C8.79 4.998 10.402 4.81 12 3.918c1.598.892 3.21 1.08 4.475 1.017m4.612 6.739c-.323-1.479-.626-2.866.913-5.174l-3.5-4S15 4 12 1.5c-3 2.5-6.5 1-6.5 1L2 6.5c1.539 2.308 1.236 3.695.913 5.174-.306 1.404-.63 2.89.587 5.326 1.577 3.154 4.708 3.51 6.943 4.745.6.332 1.134.726 1.557 1.255.423-.529.958-.923 1.558-1.255C15.792 20.51 18.923 20.154 20.5 17c1.218-2.435.893-3.922.587-5.326m-6.71 1.099.562 3.272-2.94-1.545-2.938 1.545.561-3.273-2.377-2.317 3.285-.478L12 7l1.47 2.977 3.285.478z" />
    </svg>
  );
};
export { PoliceBadgeLine };
