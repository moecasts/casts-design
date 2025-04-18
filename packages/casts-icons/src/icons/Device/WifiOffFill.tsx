import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const WifiOffFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-wifi-off-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12 18c.714 0 1.37.25 1.886.666L12 21l-1.886-2.334A3 3 0 0 1 12 18M2.808 1.393l17.677 17.678-1.414 1.414-3.682-3.68-.246.306A4.98 4.98 0 0 0 12 16c-1.19 0-2.283.416-3.141 1.11l-1.885-2.334a7.96 7.96 0 0 1 4.622-1.766l-1.773-1.772a9.96 9.96 0 0 0-4.106 1.982L3.83 10.887A13 13 0 0 1 7.416 8.83L5.885 7.3a15 15 0 0 0-3.31 2.031L.689 6.997c.915-.74 1.903-1.391 2.952-1.942L1.393 2.808zM16.084 11.87l-3.867-3.867L12 8c3.095 0 5.937 1.081 8.17 2.887l-1.886 2.333a10 10 0 0 0-2.2-1.35M12 3c4.285 0 8.22 1.498 11.31 3.998L21.426 9.33A14.94 14.94 0 0 0 12 6q-.858 0-1.69.094L7.724 3.511C9.095 3.177 10.527 3 12 3" />
    </svg>
  );
};
export { WifiOffFill };
