import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MetaFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-meta-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M16.92 4.5c-1.851 0-3.298 1.394-4.608 3.165C10.512 5.373 9.007 4.5 7.206 4.5 3.534 4.5.72 9.28.72 14.338c0 3.165 1.531 5.162 4.096 5.162 1.846 0 3.174-.87 5.535-4.997 0 0 .984-1.737 1.66-2.934q.356.574.75 1.238l1.107 1.862c2.156 3.608 3.358 4.831 5.534 4.831 2.5 0 3.89-2.024 3.89-5.255 0-5.297-2.877-9.745-6.372-9.745m-8.37 8.886c-1.913 3-2.575 3.673-3.64 3.673-1.097 0-1.749-.963-1.749-2.68 0-3.672 1.831-7.427 4.014-7.427 1.182 0 2.17.682 3.683 2.848-1.437 2.204-2.307 3.586-2.307 3.586m7.224-.377L14.45 10.8a45 45 0 0 0-1.032-1.608c1.193-1.841 2.176-2.759 3.347-2.759 2.43 0 4.375 3.58 4.375 7.976 0 1.676-.549 2.649-1.686 2.649-1.09 0-1.61-.72-3.68-4.05" />
    </svg>
  );
};
export { MetaFill };
