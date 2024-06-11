import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ProhibitedFill = (initProps: IconProps) => {
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
    `${prefixCls}-prohibited-fill`,
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
      <path d="M19.743 18.329A9.958 9.958 0 0 0 22 12c0-5.523-4.477-10-10-10a9.959 9.959 0 0 0-6.329 2.257L19.743 18.33ZM4.257 5.67A9.959 9.959 0 0 0 2 12c0 5.523 4.477 10 10 10a9.958 9.958 0 0 0 6.329-2.257L4.257 5.67Z" />
    </svg>
  );
};
export { ProhibitedFill };
