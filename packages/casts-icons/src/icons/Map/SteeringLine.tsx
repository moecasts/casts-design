import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SteeringLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-steering-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M21.8 14.001a10.009 10.009 0 0 1-8.401 7.902v-2.025A8.01 8.01 0 0 0 19.747 14l2.052.001Zm-17.548 0a8.01 8.01 0 0 0 6.247 5.859v2.028a10.01 10.01 0 0 1-8.3-7.887h2.053ZM17.999 11v2h-3a2 2 0 0 0-1.994 1.85l-.006.15v3h-2v-3a2 2 0 0 0-1.85-1.995L8.999 13H6v-2h12Zm-6-9c5.186 0 9.45 3.947 9.951 9h-2.012A8.001 8.001 0 0 0 4.06 11H2.05c.502-5.053 4.765-9 9.95-9Z" />
    </svg>
  );
};
export { SteeringLine };
