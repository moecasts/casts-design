import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const H3 = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-h3`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m22 8-.002 2-2.505 2.883a3.752 3.752 0 0 1-.993 7.367 3.751 3.751 0 0 1-3.682-3.033l1.964-.382a1.75 1.75 0 1 0 .924-1.895l-1.307-1.547L19.35 10H15V8h7ZM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2Z" />
    </svg>
  );
};
export { H3 };
