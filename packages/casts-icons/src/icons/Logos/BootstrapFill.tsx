import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BootstrapFill = (initProps: IconProps) => {
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
    `${prefixCls}-bootstrap-fill`,
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
      <path d="M5.423 3.038c-1.284 0-2.233 1.124-2.19 2.342.04 1.171-.013 2.688-.395 3.924-.383 1.24-1.03 2.026-2.088 2.127v1.138c1.058.101 1.705.887 2.088 2.127.382 1.237.435 2.753.394 3.924-.042 1.218.907 2.342 2.192 2.342h13.154c1.284 0 2.234-1.124 2.192-2.342-.041-1.171.012-2.687.393-3.924.384-1.24 1.03-2.026 2.087-2.127v-1.138c-1.058-.101-1.703-.887-2.087-2.127-.381-1.236-.434-2.753-.393-3.924.042-1.218-.908-2.342-2.192-2.342H5.423Zm10.581 11.033c0 1.678-1.251 2.696-3.328 2.696H9.14a.381.381 0 0 1-.382-.381V7.614a.381.381 0 0 1 .382-.38h3.515c1.732 0 2.869.937 2.869 2.378 0 1.01-.765 1.916-1.739 2.074v.053c1.326.145 2.22 1.064 2.22 2.332ZM12.29 8.442h-2.016v2.848h1.698c1.313 0 2.036-.529 2.036-1.474 0-.885-.622-1.374-1.718-1.374Zm-2.016 3.977v3.139h2.09c1.367 0 2.09-.549 2.09-1.58 0-1.03-.743-1.559-2.178-1.559h-2.002Z" />
    </svg>
  );
};
export { BootstrapFill };
