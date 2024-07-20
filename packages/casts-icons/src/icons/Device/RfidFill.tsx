import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const RfidFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-rfid-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M18.364 18.364a9 9 0 0 0 0-12.728l1.414-1.414c4.296 4.296 4.296 11.26 0 15.556l-1.414-1.414ZM5.636 5.636a9 9 0 0 0 0 12.728l-1.414 1.414c-4.296-4.295-4.296-11.26 0-15.556l1.414 1.414Zm9.9 9.9a5 5 0 0 0 0-7.072L16.95 7.05a7 7 0 0 1 0 9.9l-1.414-1.414ZM8.463 8.463a5 5 0 0 0 0 7.072L7.05 16.95a7 7 0 0 1 0-9.9l1.414 1.414ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
};
export { RfidFill };
