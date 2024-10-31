import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BloggerLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-blogger-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M3 9.009a6.01 6.01 0 0 1 6.01-6.01H12a6.01 6.01 0 0 1 6.01 5.982h.943c1.15 0 2.047.896 2.047 2.047v3.962A6.01 6.01 0 0 1 14.99 21H9.01A6.01 6.01 0 0 1 3 14.99zm6.01-4.01A4.01 4.01 0 0 0 5 9.01v5.981A4.01 4.01 0 0 0 9.01 19h5.98A4.01 4.01 0 0 0 19 14.99V11h-1c-1.076 0-2-.924-2-2 0-2.214-1.786-4-4-4zM8 9a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" />
    </svg>
  );
};
export { BloggerLine };
