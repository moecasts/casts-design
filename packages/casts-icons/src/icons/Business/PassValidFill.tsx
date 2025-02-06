import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PassValidFill = (initProps: IconProps) => {
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
    `${prefixCls}-pass-valid-fill`,
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
      <path d="M2 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm7 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-5.473 7.025-1.414-1.414A5.49 5.49 0 0 1 8.003 14c1.518 0 2.894.617 3.888 1.61l-1.414 1.415A3.49 3.49 0 0 0 8.002 16c-.967 0-1.84.39-2.475 1.025m14.68-6.318-4 4-.707.707-.707-.707-2.5-2.5 1.414-1.414 1.793 1.793 3.293-3.293z" />
    </svg>
  );
};
export { PassValidFill };
