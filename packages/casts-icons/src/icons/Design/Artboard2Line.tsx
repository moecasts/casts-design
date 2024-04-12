import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Artboard2Line = (initProps: IconProps) => {
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
    `${prefixCls}-artboard2-line`,
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
      <path d="M8 8v8h8V8H8ZM6 6h12v12H6V6Zm0-4h2v3H6V2Zm0 17h2v3H6v-3ZM2 6h3v2H2V6Zm0 10h3v2H2v-2ZM19 6h3v2h-3V6Zm0 10h3v2h-3v-2ZM16 2h2v3h-2V2Zm0 17h2v3h-2v-3Z" />
    </svg>
  );
};
export { Artboard2Line };
