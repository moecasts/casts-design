import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CashFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-cash-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M3.005 4.003h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1ZM6.5 6H4v2.5A2.5 2.5 0 0 0 6.5 6Zm11 0A2.5 2.5 0 0 0 20 8.5V6h-2.5ZM4 15.5V18h2.5A2.5 2.5 0 0 0 4 15.5ZM17.5 18H20v-2.5a2.5 2.5 0 0 0-2.5 2.5ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    </svg>
  );
};
export { CashFill };
