import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ChatUnreadFill = (initProps: IconProps) => {
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
    `${prefixCls}-chat-unread-fill`,
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
      <path d="M21 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 2q.515 0 1-.1V18a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h13.1q-.1.486-.1 1a5 5 0 0 0 5 5" />
    </svg>
  );
};
export { ChatUnreadFill };
