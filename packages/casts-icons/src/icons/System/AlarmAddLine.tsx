import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const AlarmAddLine = (initProps: IconProps) => {
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
    `${prefixCls}-alarm-add-line`,
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
      <path d="M3 13a9 9 0 1 0 18 0 9 9 0 0 0-18 0m16 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0M5.283 2.747 1.747 6.283l1.414 1.414L6.697 4.16zm16.97 3.536-3.535-3.536-1.415 1.414 3.536 3.536zM11 9v3H8v2h3v3h2v-3h3v-2h-3V9z" />
    </svg>
  );
};
export { AlarmAddLine };
