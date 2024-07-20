import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ThermometerLine = (initProps: IconProps) => {
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
    `${prefixCls}-thermometer-line`,
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
      <path d="M20.556 3.444a4 4 0 0 1 0 5.657l-8.2 8.2a4 4 0 0 1-2.386 1.147l-3.38.374-2.297 2.3a1 1 0 1 1-1.414-1.415l2.298-2.299.375-3.377A4 4 0 0 1 6.7 11.644l8.2-8.2a4 4 0 0 1 5.658 0Zm-4.242 1.414-8.2 8.2a2 2 0 0 0-.574 1.194l-.276 2.484 2.485-.276a2 2 0 0 0 1.193-.574l.422-.422L9.95 14.05l1.414-1.414 1.414 1.414 1.414-1.414-1.414-1.414 1.415-1.414 1.414 1.414 1.414-1.415-1.414-1.414L17.02 6.98l1.414 1.414.707-.707a2 2 0 0 0-2.828-2.828Z" />
    </svg>
  );
};
export { ThermometerLine };
