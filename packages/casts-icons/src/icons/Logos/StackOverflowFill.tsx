import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const StackOverflowFill = (initProps: IconProps) => {
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
    `${prefixCls}-stack-overflow-fill`,
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
      <path d="M18.001 20.003v-5.334h2v7.334h-16v-7.334h2v5.334h12ZM7.6 14.736l.313-1.98 8.837 1.7-.113 1.586L7.6 14.736Zm1.2-4.532.732-1.6 7.998 3.733-.733 1.6-7.998-3.733Zm2.265-3.932 1.133-1.333 6.798 5.665-1.133 1.333-6.798-5.665Zm4.332-4.132 5.265 7.064-1.4 1.067-5.264-7.065 1.4-1.066ZM7.333 18.668v-2h9.33v2h-9.33Z" />
    </svg>
  );
};
export { StackOverflowFill };
