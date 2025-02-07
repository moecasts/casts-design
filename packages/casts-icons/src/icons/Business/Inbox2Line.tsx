import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Inbox2Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-inbox2-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M4.024 3.783A1 1 0 0 1 5 3h14a1 1 0 0 1 .976.783l2 9Q22 12.89 22 13v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7a1 1 0 0 1 .024-.217zM5.802 5l-1.555 7H9a3 3 0 1 0 6 0h4.753l-1.555-7zm10.782 9a5.001 5.001 0 0 1-9.168 0H4v5h16v-5z" />
    </svg>
  );
};
export { Inbox2Line };
