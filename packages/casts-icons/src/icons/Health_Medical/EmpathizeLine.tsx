import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const EmpathizeLine = (initProps: IconProps) => {
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
    `${prefixCls}-empathize-line`,
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
      <path d="M18.364 10.98a4 4 0 0 1 0 5.656l-5.657 5.657a1 1 0 0 1-1.414 0l-5.657-5.657a4 4 0 1 1 5.657-5.657l.707.707.707-.707a4 4 0 0 1 5.657 0M7.051 12.392a2 2 0 0 0 0 2.829l4.95 4.95 4.95-4.95a2 2 0 1 0-2.83-2.827l-2.123 2.118-2.119-2.12a2 2 0 0 0-2.828 0M12 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
    </svg>
  );
};
export { EmpathizeLine };
