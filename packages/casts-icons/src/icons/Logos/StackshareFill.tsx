import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const StackshareFill = (initProps: IconProps) => {
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
    `${prefixCls}-stackshare-fill`,
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
      <path d="M21.001 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18Zm-4.208 2.621a2.222 2.222 0 0 0-2.133 1.6h-1.998l-2.46 4.185H8.764a2.222 2.222 0 1 0 0 1.242h1.471l2.417 4.134h2.018a2.222 2.222 0 1 0 0-1.243h-1.317l-2.056-3.537 2.053-3.538h1.31a2.222 2.222 0 1 0 2.133-2.843Zm.011 9.427a1.168 1.168 0 1 1-1.145 1.394s-.03-.226 0-.453c.107-.535.58-.94 1.145-.94Zm-10.152-4.21a1.169 1.169 0 0 1 0 2.335 1.168 1.168 0 0 1 0-2.335Zm10.15-4.209a1.168 1.168 0 0 1 0 2.335 1.169 1.169 0 0 1-1.144-.941c-.026-.206 0-.446 0-.446a1.168 1.168 0 0 1 1.144-.948Z" />
    </svg>
  );
};
export { StackshareFill };
