import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const NotificationSnoozeLine = (initProps: IconProps) => {
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
    `${prefixCls}-notification-snooze-line`,
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
      <path d="M22 17h-2v-7a8 8 0 1 0-16 0v7H2v2h20zm-4-7v7H6v-7a6 6 0 1 1 12 0m-3 13v-2H9v2zM9 9h3.586L9 12.586V15h6v-2h-3.586L15 9.414V7H9z" />
    </svg>
  );
};
export { NotificationSnoozeLine };
