import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ChatQuoteFill = (initProps: IconProps) => {
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
    `${prefixCls}-chat-quote-fill`,
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
      <path d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h18ZM10.515 7.412C8.728 8.187 7.5 9.755 7.5 11.505c0 .995.277 1.609.792 2.155.324.345.837.59 1.374.59a1.75 1.75 0 0 0 1.75-1.75 1.76 1.76 0 0 0-1.614-1.745 2.104 2.104 0 0 0-.479.01v-.092c.006-.44.1-1.74 1.639-2.573l-.447-.688Zm5 0c-1.787.775-3.015 2.343-3.015 4.093 0 .995.277 1.609.792 2.155.324.345.837.59 1.374.59a1.75 1.75 0 0 0 1.75-1.75 1.76 1.76 0 0 0-1.614-1.745 2.104 2.104 0 0 0-.479.01v-.092c.006-.44.1-1.74 1.639-2.573l-.447-.688Z" />
    </svg>
  );
};
export { ChatQuoteFill };
