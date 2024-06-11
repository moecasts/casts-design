import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FileHwpFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-file-hwp-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m16 2 5 5v13.992A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.998 2H16ZM9.333 14.667H8V18h8v-1.333l-6.667-.001v-2ZM12 14.333a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 1.333a1.167 1.167 0 1 1 0 2.334 1.167 1.167 0 0 1 0-2.334ZM12.667 6h-1.334v1.333H8v1.334h8V7.333h-3.334V6Z" />
    </svg>
  );
};
export { FileHwpFill };
