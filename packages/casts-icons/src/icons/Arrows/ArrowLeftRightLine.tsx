import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ArrowLeftRightLine = (initProps: IconProps) => {
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
    `${prefixCls}-arrow-left-right-line`,
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
      <path d="M16.05 12.05 21 17l-4.95 4.95-1.414-1.415L17.172 18H4v-2h13.172l-2.536-2.535zm-8.1-10 1.414 1.414-2.536 2.535H20v2H6.828l2.536 2.536L7.95 11.95 3 7z" />
    </svg>
  );
};
export { ArrowLeftRightLine };
