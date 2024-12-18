import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const AccessibilityFill = (initProps: IconProps) => {
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
    `${prefixCls}-accessibility-fill`,
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
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.5-15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-6.871 3.428.742-1.857c1.45.572 3.072.929 4.629.929 1.56 0 3.173-.361 4.626-.928.003 0 .758 1.851.733 1.861a16.5 16.5 0 0 1-3.36.897c0 .87-.084 1.764.318 2.567l1.577 3.156-1.789.894-1.552-3.105a.618.618 0 0 0-1.106 0l-1.553 3.105-1.789-.894 1.578-3.156c.402-.803.317-1.697.317-2.567-1.143-.183-2.295-.472-3.371-.902" />
    </svg>
  );
};
export { AccessibilityFill };
