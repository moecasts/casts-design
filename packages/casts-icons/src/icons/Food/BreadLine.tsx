import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BreadLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-bread-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M5 3a4 4 0 0 0-2 7.465V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8.535A4 4 0 0 0 19 3zm2 17a1 1 0 0 1-1-1V9.122l-.667-.236A2.001 2.001 0 0 1 6 5h13a2 2 0 0 1 .667 3.886L19 9.122V19a1 1 0 0 1-1 1z" />
    </svg>
  );
};
export { BreadLine };
