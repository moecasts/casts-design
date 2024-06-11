import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ListIndefinite = (initProps: IconProps) => {
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
    `${prefixCls}-list-indefinite`,
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
      <path d="M13 4h8v2h-8V4Zm0 7h8v2h-8v-2Zm0 7h8v2h-8v-2Zm-6.5 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 6v3h3V6H5ZM3 4h7v7H3V4Z" />
    </svg>
  );
};
export { ListIndefinite };
