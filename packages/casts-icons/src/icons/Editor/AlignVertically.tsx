import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const AlignVertically = (initProps: IconProps) => {
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
    `${prefixCls}-align-vertically`,
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
      <path d="M3 11h18v2H3v-2Zm15 7v3h-2v-3h-3l4-4 4 4h-3ZM8 18v3H6v-3H3l4-4 4 4H8ZM18 6h3l-4 4-4-4h3V3h2v3ZM8 6h3l-4 4-4-4h3V3h2v3Z" />
    </svg>
  );
};
export { AlignVertically };
