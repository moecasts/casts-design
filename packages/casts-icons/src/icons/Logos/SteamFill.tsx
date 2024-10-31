import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SteamFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-steam-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12.005 2c-5.25 0-9.556 4.05-9.964 9.198l5.36 2.214a2.82 2.82 0 0 1 1.593-.491q.08.001.157.005l2.384-3.452v-.049c0-2.08 1.69-3.77 3.77-3.77a3.776 3.776 0 0 1 3.77 3.773c0 2.08-1.691 3.77-3.77 3.77h-.087l-3.397 2.426q.002.065.003.133A2.826 2.826 0 0 1 9 18.587a2.844 2.844 0 0 1-2.775-2.273l-3.838-1.589C3.574 18.923 7.428 22 12.006 22c5.522 0 9.998-4.477 9.998-10S17.527 2 12.005 2M7.08 16.667c.218.452.595.832 1.095 1.041a2.126 2.126 0 0 0 2.78-2.77 2.123 2.123 0 0 0-2.712-1.178l1.269.526a1.565 1.565 0 0 1-1.204 2.889zm10.74-7.245a2.516 2.516 0 0 0-2.513-2.512 2.513 2.513 0 1 0 2.513 2.512M15.312 7.53A1.89 1.89 0 0 1 17.2 9.418a1.89 1.89 0 0 1-1.888 1.888 1.887 1.887 0 1 1 0-3.776" />
    </svg>
  );
};
export { SteamFill };
