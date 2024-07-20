import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ColorFilterFill = (initProps: IconProps) => {
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
    `${prefixCls}-color-filter-fill`,
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
      <path d="M16.572 8.027a5 5 0 1 0-5.101 2.945 6.994 6.994 0 0 1 5.1-2.945Zm-3.418 9.92a6.995 6.995 0 0 0 0-5.892 5 5 0 1 1 0 5.89Zm-6.88-7.92a6.995 6.995 0 0 0 5.1 2.946 5 5 0 1 1-5.1-2.946Z" />
    </svg>
  );
};
export { ColorFilterFill };
