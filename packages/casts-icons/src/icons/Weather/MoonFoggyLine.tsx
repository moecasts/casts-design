import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MoonFoggyLine = (initProps: IconProps) => {
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
    `${prefixCls}-moon-foggy-line`,
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
      <path d="M16 20.334v-2.199a7.523 7.523 0 0 0 3.623-4.281 9 9 0 0 1-10.622-8.99A7.518 7.518 0 0 0 5.151 10H3.117a9.505 9.505 0 0 1 8.538-7.963 7 7 0 0 0 10.316 8.728A9.503 9.503 0 0 1 16 20.335ZM7 20h7v2H7v-2Zm-3-8h6v2H4v-2Zm-2 4h10v2H2v-2Z" />
    </svg>
  );
};
export { MoonFoggyLine };
