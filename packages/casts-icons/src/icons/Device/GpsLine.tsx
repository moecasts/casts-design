import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const GpsLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-gps-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M7.132 20.737A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-5.132 8.737l-.896-1.791a8 8 0 1 0-7.945 0zm1.792-3.584a6 6 0 1 1 6.151 0l-.898-1.797a4 4 0 1 0-4.354 0zM12 16l3 6H9z" />
    </svg>
  );
};
export { GpsLine };
