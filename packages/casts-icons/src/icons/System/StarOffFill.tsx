import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const StarOffFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-star-off-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m23.413 8.792-5.392 4.986L9.71 5.467 12 .5l3.386 7.34zm-4.79 11.244 2.57 2.57 1.414-1.414L2.808 1.393 1.394 2.808l5.264 5.264-6.07.72 5.934 5.488-1.575 7.928 7.054-3.948 7.053 3.948z" />
    </svg>
  );
};
export { StarOffFill };
