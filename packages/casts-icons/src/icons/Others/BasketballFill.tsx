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
      <path d="m12.366 13.366 1.775 1.025a9.98 9.98 0 0 0-.311 7.44A10 10 0 0 1 12 22a10 10 0 0 1-4.11-.88zm3.518 2.032 4.233 2.444a10.03 10.03 0 0 1-4.363 3.43 8 8 0 0 1 .008-5.57zm-7.025-4.056 1.775 1.024-4.476 7.75a10.03 10.03 0 0 1-3.59-4.785 9.98 9.98 0 0 0 6.085-3.713zm13.046-.726Q22 11.297 22 12a10 10 0 0 1-.88 4.11l-4.236-2.445a7.99 7.99 0 0 1 4.866-3.021zM2.881 7.892l4.235 2.445a8 8 0 0 1-5.021 3.05A10 10 0 0 1 2 12c0-1.465.315-2.856.88-4.11m14.961-4.008a10.03 10.03 0 0 1 3.59 4.785 9.98 9.98 0 0 0-6.086 3.715l-.205.276-1.775-1.025zM12 2c1.465 0 2.856.315 4.11.88l-4.476 7.754L9.859 9.61a9.98 9.98 0 0 0 .311-7.442A10 10 0 0 1 12 2m-3.753.73a8 8 0 0 1-.01 5.57l-.12.303-4.234-2.445a10.04 10.04 0 0 1 4.164-3.346z" />
    </svg>
  );
};
export { BasketballFill };
