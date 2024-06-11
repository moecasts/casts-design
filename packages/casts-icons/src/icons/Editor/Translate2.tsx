import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Translate2 = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-translate2`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m18.5 10 4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2ZM10 2v2h6v2h-1.968a18.221 18.221 0 0 1-3.62 6.301 14.865 14.865 0 0 0 2.335 1.707l-.75 1.878A17.016 17.016 0 0 1 9 13.725a16.677 16.677 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.031 16.031 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2Zm7.5 10.885L16.253 16h2.492L17.5 12.885Z" />
    </svg>
  );
};
export { Translate2 };
