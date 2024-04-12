import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Settings5Fill = (initProps: IconProps) => {
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
    `${prefixCls}-settings5-fill`,
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
      <path d="M2.131 13.63a9.942 9.942 0 0 1 .001-3.26c1.101.026 2.092-.502 2.477-1.431.385-.93.058-2.003-.74-2.763a9.942 9.942 0 0 1 2.306-2.307c.76.798 1.834 1.125 2.763.74.93-.385 1.458-1.376 1.431-2.477a9.942 9.942 0 0 1 3.261 0c-.026 1.102.502 2.092 1.431 2.477.93.385 2.003.058 2.763-.74a9.943 9.943 0 0 1 2.307 2.306c-.798.76-1.125 1.834-.74 2.764.385.93 1.376 1.458 2.477 1.43a9.94 9.94 0 0 1 0 3.262c-1.102-.027-2.092.501-2.477 1.43-.385.93-.058 2.004.74 2.764a9.94 9.94 0 0 1-2.306 2.306c-.76-.798-1.834-1.125-2.764-.74-.93.385-1.458 1.376-1.43 2.478a9.939 9.939 0 0 1-3.262-.001c.027-1.101-.502-2.092-1.43-2.477-.93-.385-2.004-.058-2.764.74a9.943 9.943 0 0 1-2.306-2.306c.798-.76 1.125-1.834.74-2.763-.385-.93-1.376-1.458-2.478-1.431ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  );
};
export { Settings5Fill };
