import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PriceTag2Line = (initProps: IconProps) => {
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
    `${prefixCls}-price-tag2-line`,
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
      <path d="m3.005 7 8.445-5.63a1 1 0 0 1 1.11 0L21.005 7v14a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1zm2 1.07V20h14V8.07l-7-4.667zm3 7.93h8v2h-8zm0-3h8v2h-8zm4-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </svg>
  );
};
export { PriceTag2Line };
