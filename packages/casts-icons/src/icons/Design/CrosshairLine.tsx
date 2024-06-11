import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CrosshairLine = (initProps: IconProps) => {
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
    `${prefixCls}-crosshair-line`,
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
      <path d="M13 19.938A8.004 8.004 0 0 0 19.938 13H17v-2h2.938A8.004 8.004 0 0 0 13 4.062V7h-2V4.062A8.004 8.004 0 0 0 4.062 11H7v2H4.062A8.004 8.004 0 0 0 11 19.938V17h2v2.938ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
    </svg>
  );
};
export { CrosshairLine };
