import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Swap2Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-swap2-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m17.207 2.293-1.414 1.414L18.086 6H13v2h5.086l-2.293 2.293 1.414 1.414L21.914 7zM7 11.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M5.914 18l2.293 2.293-1.414 1.414L2.086 17l4.707-4.707 1.414 1.414L5.914 16H11v2zM14 13a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z" />
    </svg>
  );
};
export { Swap2Fill };
