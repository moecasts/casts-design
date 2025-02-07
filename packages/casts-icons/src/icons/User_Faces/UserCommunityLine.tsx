import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const UserCommunityLine = (initProps: IconProps) => {
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
    `${prefixCls}-user-community-line`,
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
      <path d="M5.234 7.73A8 8 0 0 1 12 4a8 8 0 0 1 6.767 3.73l1.69-1.07A10 10 0 0 0 12 2a10 10 0 0 0-8.456 4.66zM12 20a8 8 0 0 1-6.766-3.73l-1.69 1.07A10 10 0 0 0 12 22a10 10 0 0 0 8.457-4.66l-1.69-1.07A8 8 0 0 1 12 20m0-12a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 4a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 3a2 2 0 0 0-2 2H8a4 4 0 0 1 8 0h-2a2 2 0 0 0-2-2m-9-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0m20 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
    </svg>
  );
};
export { UserCommunityLine };
