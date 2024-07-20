import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Replay30Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-replay30-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M22 12c0-5.523-4.477-10-10-10a9.977 9.977 0 0 0-7.553 3.446L2 3v6h4.75v1h2.625a.625.625 0 1 1 0 1.25H7.5v1.5h1.875a.625.625 0 1 1 0 1.25H6.75v1.5h2.625a2.125 2.125 0 0 0 1.62-3.5 2.125 2.125 0 0 0-1.62-3.5H7.5L5.865 6.865A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10Zm-9.5-1.25a2.5 2.5 0 0 1 5 0v2.5a2.5 2.5 0 0 1-5 0v-2.5Zm2.5-1a1 1 0 0 0-1 1v2.5a1 1 0 1 0 2 0v-2.5a1 1 0 0 0-1-1Z" />
    </svg>
  );
};
export { Replay30Fill };
