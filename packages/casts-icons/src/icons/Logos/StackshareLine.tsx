import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const StackshareLine = (initProps: IconProps) => {
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
    `${prefixCls}-stackshare-line`,
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
      <path d="M9.537 13H7.33a3.001 3.001 0 0 1-5.829-1 3 3 0 0 1 5.83-1h2.206l3.464-6h3.17a3.001 3.001 0 0 1 5.83 1 3 3 0 0 1-5.829 1h-2.017l-2.886 4.999L14.156 17h2.016A3.001 3.001 0 0 1 22 18a3 3 0 0 1-5.829 1h-3.171zm9.464 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-14.5-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m14.5-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </svg>
  );
};
export { StackshareLine };
