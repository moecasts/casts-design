import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BasketballFill = (initProps: IconProps) => {
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
    `${prefixCls}-basketball-fill`,
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
      <path d="m12.366 13.366 1.775 1.025a9.98 9.98 0 0 0-.311 7.44A9.91 9.91 0 0 1 12 22a9.964 9.964 0 0 1-4.11-.88l4.476-7.754Zm3.518 2.032 4.233 2.444a10.033 10.033 0 0 1-4.363 3.43 7.988 7.988 0 0 1 .008-5.57l.121-.304Zm-7.025-4.056 1.775 1.024-4.476 7.75a10.026 10.026 0 0 1-3.59-4.785 9.977 9.977 0 0 0 6.085-3.713l.206-.276Zm13.046-.726c.063.453.095.915.095 1.384a9.964 9.964 0 0 1-.88 4.11l-4.236-2.445a7.985 7.985 0 0 1 4.866-3.021l.155-.027ZM2.881 7.892l4.235 2.445a7.99 7.99 0 0 1-5.021 3.05A10.138 10.138 0 0 1 2 12c0-1.465.315-2.856.88-4.11Zm14.961-4.008a10.026 10.026 0 0 1 3.59 4.785 9.984 9.984 0 0 0-6.086 3.715l-.205.276-1.775-1.025 4.476-7.75ZM12 2c1.465 0 2.856.315 4.11.88l-4.476 7.754L9.859 9.61a9.98 9.98 0 0 0 .311-7.442A9.921 9.921 0 0 1 12 2Zm-3.753.73a7.992 7.992 0 0 1-.01 5.57l-.12.303-4.234-2.445a10.036 10.036 0 0 1 4.164-3.346l.2-.083Z" />
    </svg>
  );
};
export { BasketballFill };
