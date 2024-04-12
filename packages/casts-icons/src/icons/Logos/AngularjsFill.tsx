import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const AngularjsFill = (initProps: IconProps) => {
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
    `${prefixCls}-angularjs-fill`,
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
      <path d="m12 2 9.3 3.32-1.418 12.31L12 22 4.12 17.63 2.7 5.32 12 2Zm0 2.21L6.186 17.26h2.168l1.169-2.92h4.935l1.168 2.92h2.168L12 4.21Zm1.698 8.33h-3.396L12 8.45l1.698 4.09Z" />
    </svg>
  );
};
export { AngularjsFill };
