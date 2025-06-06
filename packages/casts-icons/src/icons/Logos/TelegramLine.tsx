import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const TelegramLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-telegram-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8 10c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m.358-12.618q-1.458.607-5.831 2.513-.711.282-.744.552c-.038.304.343.424.862.587l.218.07c.51.166 1.198.36 1.555.368q.486.01 1.084-.4 4.086-2.76 4.218-2.789c.063-.014.149-.032.207.02.059.052.053.15.047.177-.038.161-1.534 1.552-2.308 2.271q-.344.324-.683.653c-.474.457-.83.8.02 1.36.861.568 1.73 1.134 2.57 1.733.414.296.786.56 1.246.519.267-.025.543-.276.683-1.026.332-1.77.983-5.608 1.133-7.19a1.8 1.8 0 0 0-.017-.393.42.42 0 0 0-.142-.27c-.12-.098-.305-.118-.387-.117-.376.007-.953.207-3.73 1.362" />
    </svg>
  );
};
export { TelegramLine };
