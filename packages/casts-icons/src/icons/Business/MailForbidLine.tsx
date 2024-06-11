import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MailForbidLine = (initProps: IconProps) => {
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
    `${prefixCls}-mail-forbid-line`,
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
      <path d="m20 7.238-7.928 7.1L4 7.216V19h7.07c.102.706.308 1.378.604 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.255a6.972 6.972 0 0 0-2-.965V7.238ZM19.501 5H4.511l7.55 6.662L19.502 5Zm-2.794 15.708a3 3 0 0 0 4.001-4.001l-4.001 4Zm-1.415-1.415 4.001-4a3 3 0 0 0-4.001 4.001ZM18 23a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" />
    </svg>
  );
};
export { MailForbidLine };
