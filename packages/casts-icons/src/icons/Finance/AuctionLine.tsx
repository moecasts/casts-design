import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const AuctionLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-auction-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M14.005 20.003v2h-12v-2h12ZM14.59.689l7.778 7.778-1.414 1.414-1.061-.353-2.475 2.475 5.657 5.657-1.414 1.414-5.657-5.657-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.414-1.415 1.132.283 6.293-6.293-.353-1.06L14.59.688Zm.707 3.536-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536Z" />
    </svg>
  );
};
export { AuctionLine };
