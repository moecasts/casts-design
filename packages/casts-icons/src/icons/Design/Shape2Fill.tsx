import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Shape2Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-shape2-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M2 2h5v5H2V2Zm0 15h5v5H2v-5ZM17 2h5v5h-5V2Zm0 15h5v5h-5v-5ZM8 4h8v2H8V4ZM4 8h2v8H4V8Zm14 0h2v8h-2V8ZM8 18h8v2H8v-2Z" />
    </svg>
  );
};
export { Shape2Fill };
