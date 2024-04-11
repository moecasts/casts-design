import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const UserForbidFill = (initProps: IconProps) => {
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
    `${prefixCls}-user-forbid-fill`,
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
      <path d="M12 13a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm3 5a3 3 0 0 1 4.293-2.708l-4 4.001A2.988 2.988 0 0 1 15 18Zm1.707 2.708 4-4.001a3 3 0 0 1-4.001 4.001ZM18 13a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-6 1c.084 0 .168.001.252.004A6.968 6.968 0 0 0 11 18c0 1.487.464 2.866 1.255 4H4a8 8 0 0 1 8-8Z" />
    </svg>
  );
};
export { UserForbidFill };
