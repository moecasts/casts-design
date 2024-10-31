import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Settings3Line = (initProps: IconProps) => {
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
    `${prefixCls}-settings3-line`,
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
      <path d="M3.34 17a10 10 0 0 1-.979-2.326 3 3 0 0 0 .003-5.347 10 10 0 0 1 2.5-4.337 3 3 0 0 0 4.632-2.674 10 10 0 0 1 5.007.003 3 3 0 0 0 4.632 2.671c.578.59 1.093 1.262 1.525 2.01.432.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 10 10 0 0 1-2.501 4.337 3 3 0 0 0-4.632 2.674 10 10 0 0 1-5.007-.002 3 3 0 0 0-4.631-2.672A10 10 0 0 1 3.339 17m5.66.196a5 5 0 0 1 2.25 2.77q.75.07 1.499.002a5 5 0 0 1 2.25-2.772 5 5 0 0 1 3.526-.564q.435-.614.748-1.298A5 5 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8 8 0 0 0-.75-1.298A5 5 0 0 1 15 6.804a5 5 0 0 1-2.25-2.77q-.75-.071-1.5-.001A5 5 0 0 1 9 6.804a5 5 0 0 1-3.526.564q-.436.614-.747 1.298A5 5 0 0 1 6 12c0 1.26-.471 2.437-1.273 3.334a8 8 0 0 0 .75 1.298A5 5 0 0 1 9 17.196M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </svg>
  );
};
export { Settings3Line };
