import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const VipCrown2Fill = (initProps: IconProps) => {
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
    `${prefixCls}-vip-crown2-fill`,
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
      <path d="M2.806 5.2 7.005 8l4.186-5.861a1 1 0 0 1 1.628 0l4.186 5.86 4.2-2.799a1 1 0 0 1 1.547.949L21.11 20.116a1 1 0 0 1-.993.884H3.894a1 1 0 0 1-.993-.884L1.258 6.15A1 1 0 0 1 2.806 5.2Zm9.2 9.8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
};
export { VipCrown2Fill };
