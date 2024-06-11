import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ExpandUpDownLine = (initProps: IconProps) => {
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
    `${prefixCls}-expand-up-down-line`,
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
      <path d="M18.207 9.043 12 2.836 5.793 9.043l1.414 1.414L12 5.664l4.793 4.793 1.414-1.414ZM5.793 14.957 12 21.164l6.207-6.207-1.414-1.414L12 18.336l-4.793-4.793-1.414 1.414Z" />
    </svg>
  );
};
export { ExpandUpDownLine };
