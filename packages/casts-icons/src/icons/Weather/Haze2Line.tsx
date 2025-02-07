import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Haze2Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-haze2-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m7.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 7a5 5 0 0 1 0 10q-2.765 0-5-3.121Q9.765 16.999 7 17A5 5 0 0 1 7 7q2.765 0 5 3.121Q14.235 7.001 17 7M7 9a3 3 0 1 0 0 6c1.254 0 2.51-.875 3.759-2.854l.089-.147-.09-.145c-1.197-1.896-2.4-2.78-3.601-2.85zm10 0c-1.254 0-2.51.875-3.759 2.854l-.09.146.09.146c1.198 1.896 2.4 2.78 3.602 2.85L17 15a3 3 0 1 0 0-6m-5-7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M4.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </svg>
  );
};
export { Haze2Line };
