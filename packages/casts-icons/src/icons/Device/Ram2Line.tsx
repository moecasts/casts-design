import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Ram2Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-ram2-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M2 5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1v2a1 1 0 0 0 1 1h7.414l1-1h1.172l1 1H21a1 1 0 0 0 1-1v-2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2Zm18 11v1h-5.586l-1-1H20Zm-9.414 0-1 1H4v-1h6.586ZM3 14V7h18v7H3Zm2-5h2v3H5V9Zm6 0H9v3h2V9Zm2 0h2v3h-2V9Zm6 0h-2v3h2V9Z" />
    </svg>
  );
};
export { Ram2Line };
