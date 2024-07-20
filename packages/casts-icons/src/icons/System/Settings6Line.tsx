import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Settings6Line = (initProps: IconProps) => {
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
    `${prefixCls}-settings6-line`,
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
      <path d="M17.5 2.474 23 12l-5.5 9.526h-11L1 12l5.5-9.526h11Zm-1.155 2h-8.69L3.309 12l4.346 7.526h8.69L20.691 12l-4.346-7.526ZM8.634 8.17l1.732-1 5 8.66-1.732 1-5-8.66Z" />
    </svg>
  );
};
export { Settings6Line };
