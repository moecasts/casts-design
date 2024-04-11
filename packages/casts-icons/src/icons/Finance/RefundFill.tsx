import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const RefundFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-refund-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M22.005 7h-20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3Zm0 2v11a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V9h20Zm-11 5v-2.5l-4.5 4.5h10.5v-2h-6Z" />
    </svg>
  );
};
export { RefundFill };
