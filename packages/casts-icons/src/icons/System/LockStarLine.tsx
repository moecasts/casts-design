import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const LockStarLine = (initProps: IconProps) => {
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
    `${prefixCls}-lock-star-line`,
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
      <path d="M6 7a6 6 0 1 1 12 0v1h1.5A1.5 1.5 0 0 1 21 9.5V13h-2v-3H5v10h8v2H4.5A1.5 1.5 0 0 1 3 20.5v-11A1.5 1.5 0 0 1 4.5 8H6zm10 0a4 4 0 0 0-8 0v1h8zm4.64 13.195.505 2.946L18.5 21.75l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L18.5 15l1.323 2.68 2.957.43z" />
    </svg>
  );
};
export { LockStarLine };
