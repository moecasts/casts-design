import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ServiceBellLine = (initProps: IconProps) => {
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
    `${prefixCls}-service-bell-line`,
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
      <path d="M15 3H9v2h2v1.05C5.947 6.55 2 10.814 2 16v1h20v-1c0-5.185-3.947-9.449-9-9.95V5h2zm-3 5a8 8 0 0 1 7.938 7H4.062A8 8 0 0 1 12 8m11 12v-2H1v2z" />
    </svg>
  );
};
export { ServiceBellLine };
