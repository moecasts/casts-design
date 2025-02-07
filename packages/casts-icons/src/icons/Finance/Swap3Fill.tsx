import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Swap3Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-swap3-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M6 5.914 3.707 8.207 2.293 6.793 7 2.086l4.707 4.707-1.414 1.414L8 5.914V11H6zM12.5 7a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m9.207 10.207-1.414-1.414L18 18.086V13h-2v5.086l-2.293-2.293-1.414 1.414L17 21.914zM11 14a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z" />
    </svg>
  );
};
export { Swap3Fill };
