import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FileHwpLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-file-hwp-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m16 2 5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2zm0 6.667H8V7.333h3.333V6h1.334l-.001 1.333h2.333L15 4H5v16h14V8l-3-.001zm-6.667 6v1.999H16V18H8v-3.333zM12 14.333a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 9a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 1.333a1.167 1.167 0 1 0 0 2.334 1.167 1.167 0 0 0 0-2.334" />
    </svg>
  );
};
export { FileHwpLine };
