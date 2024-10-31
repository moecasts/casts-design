import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const AccountBox2Line = (initProps: IconProps) => {
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
    `${prefixCls}-account-box2-line`,
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
      <path d="M4.995 3A1.995 1.995 0 0 0 3 4.995v14.01C3 20.107 3.893 21 4.995 21h14.01A1.995 1.995 0 0 0 21 19.005V4.995A1.995 1.995 0 0 0 19.005 3zM5 19V5h14v14zm7-11a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 4a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 3a2 2 0 0 0-2 2H8a4 4 0 0 1 8 0h-2a2 2 0 0 0-2-2" />
    </svg>
  );
};
export { AccountBox2Line };
