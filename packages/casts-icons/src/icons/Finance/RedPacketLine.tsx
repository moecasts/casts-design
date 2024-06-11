import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const RedPacketLine = (initProps: IconProps) => {
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
    `${prefixCls}-red-packet-line`,
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
      <path d="M14.178 9.766a9.981 9.981 0 0 0 4.827-2.622V4.003h-14v3.141a9.98 9.98 0 0 0 4.827 2.622 2.5 2.5 0 0 1 4.346 0Zm.208 2a2.501 2.501 0 0 1-4.762 0 11.941 11.941 0 0 1-4.62-2.015v10.252h14V9.75a11.942 11.942 0 0 1-4.618 2.016ZM4.005 2.004h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1Z" />
    </svg>
  );
};
export { RedPacketLine };
