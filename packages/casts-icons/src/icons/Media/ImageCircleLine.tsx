import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ImageCircleLine = (initProps: IconProps) => {
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
    `${prefixCls}-image-circle-line`,
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
      <path d="m19.576 14.576-3.87-3.869a1 1 0 0 0-1.413 0l-7.428 7.428a8 8 0 1 1 12.711-3.558ZM8.59 19.24l6.41-6.41 3.639 3.638A7.993 7.993 0 0 1 12 20a7.964 7.964 0 0 1-3.41-.761ZM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm-1-12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </svg>
  );
};
export { ImageCircleLine };
