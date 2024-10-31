import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BasketballLine = (initProps: IconProps) => {
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
    `${prefixCls}-basketball-line`,
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m.366 11.366-3.469 6.01a8.056 8.056 0 0 0 4.459.51 9.94 9.94 0 0 1 .784-5.494zm3.518 2.031a7.96 7.96 0 0 0-.587 3.894 8 8 0 0 0 3.078-2.456zm-7.025-4.055a9.95 9.95 0 0 1-4.365 3.428 8 8 0 0 0 2.671 3.605l3.469-6.009zm11.103-.13-.258.12a7.95 7.95 0 0 0-2.82 2.333l2.492 1.439a8 8 0 0 0 .586-3.893M4 12q0 .4.038.789a7.95 7.95 0 0 0 3.078-2.453L4.624 8.897A8 8 0 0 0 4 12m12.835-6.374-3.469 6.008 1.775 1.025a9.95 9.95 0 0 1 4.366-3.43 8 8 0 0 0-2.419-3.402zM12 4q-.695.001-1.357.115a9.93 9.93 0 0 1-.784 5.494l1.775 1.025 3.469-6.01A8 8 0 0 0 12 4m-3.297.71-.191.088a8 8 0 0 0-2.886 2.367l2.49 1.438a7.96 7.96 0 0 0 .587-3.893" />
    </svg>
  );
};
export { BasketballLine };
