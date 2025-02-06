import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Inbox2Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-inbox2-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M5 3a1 1 0 0 0-.976.783l-2 9A1 1 0 0 0 2 13v7a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7q0-.11-.024-.217l-2-9A1 1 0 0 0 19 3zm14.753 9H15a3 3 0 1 1-6 0H4.247l1.555-7h12.396z" />
    </svg>
  );
};
export { Inbox2Fill };
