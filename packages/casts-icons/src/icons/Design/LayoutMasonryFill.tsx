import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const LayoutMasonryFill = (initProps: IconProps) => {
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
    `${prefixCls}-layout-masonry-fill`,
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
      <path d="M22 9.999V20a1 1 0 0 1-1 1h-8V9.999h9Zm-11 6V21H3a1 1 0 0 1-1-1v-4.001h9ZM11 3v10.999H2V4a1 1 0 0 1 1-1h8Zm10 0a1 1 0 0 1 1 1v3.999h-9V3h8Z" />
    </svg>
  );
};
export { LayoutMasonryFill };
