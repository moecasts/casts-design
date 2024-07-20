import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const AncientGateLine = (initProps: IconProps) => {
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
    `${prefixCls}-ancient-gate-line`,
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
      <path d="M6.964 3h10.072a3.5 3.5 0 0 0 4.445 2.86A3.5 3.5 0 0 1 18 9H6a3.5 3.5 0 0 1-3.482-3.14A3.5 3.5 0 0 0 6.964 3ZM16.9 6.658A5.43 5.43 0 0 1 15.59 5H8.411A5.43 5.43 0 0 1 7.1 6.658 5.976 5.976 0 0 1 6.667 7h10.666a6.007 6.007 0 0 1-.434-.342ZM21.5 11.5c.538 0 1.042-.142 1.479-.39A3.5 3.5 0 0 1 21 14.663V21h-7v-2a2 2 0 1 0-4 0v2H3v-6.336a3.5 3.5 0 0 1-1.979-3.553 2.999 2.999 0 0 0 4.077-1.11h13.803a2.999 2.999 0 0 0 2.599 1.5Zm-2.537 1.309a4.99 4.99 0 0 1-1.038-.81H6.075a5.094 5.094 0 0 1-1.66 1.121L5 13.4V19h3c0-1.105.39-2.047 1.172-2.828A3.854 3.854 0 0 1 12 15c1.105 0 2.047.39 2.828 1.172A3.854 3.854 0 0 1 16 19h3v-5.6l.585-.278a5.092 5.092 0 0 1-.622-.312Z" />
    </svg>
  );
};
export { AncientGateLine };
