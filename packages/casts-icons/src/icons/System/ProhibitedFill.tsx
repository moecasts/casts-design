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
      <path d="M19.743 18.329A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10a9.96 9.96 0 0 0-6.329 2.257zM4.257 5.67A9.96 9.96 0 0 0 2 12c0 5.523 4.477 10 10 10a9.96 9.96 0 0 0 6.329-2.257z" />
    </svg>
  );
};
export { ProhibitedFill };
