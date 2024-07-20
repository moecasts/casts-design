import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const WifiFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-wifi-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M.69 6.997A17.925 17.925 0 0 1 12 3c4.285 0 8.22 1.497 11.31 3.997L21.425 9.33A14.938 14.938 0 0 0 12 6C8.43 6 5.15 7.248 2.575 9.33L.689 6.997Zm3.141 3.89A12.946 12.946 0 0 1 12 8c3.094 0 5.936 1.081 8.169 2.886l-1.886 2.334A9.958 9.958 0 0 0 12 11c-2.38 0-4.567.832-6.284 2.22l-1.885-2.334Zm3.142 3.89A7.966 7.966 0 0 1 12 13c1.904 0 3.653.665 5.027 1.776l-1.885 2.334A4.979 4.979 0 0 0 12 16c-1.19 0-2.283.416-3.142 1.11l-1.885-2.334Zm3.142 3.89A2.988 2.988 0 0 1 12 18c.714 0 1.37.25 1.885.666L12 21l-1.885-2.334Z" />
    </svg>
  );
};
export { WifiFill };
