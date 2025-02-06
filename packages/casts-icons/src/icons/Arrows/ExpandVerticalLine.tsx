import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ExpandVerticalLine = (initProps: IconProps) => {
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
    `${prefixCls}-expand-vertical-line`,
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
      <path d="m12 .5 4.95 4.95-1.415 1.413-2.536-2.535V10h-2V4.328L8.467 6.86 7.052 5.447zM11 14v5.67l-2.536-2.535L7.05 18.55 12 23.5l4.95-4.95-1.414-1.414L13 19.672v-5.673z" />
    </svg>
  );
};
export { ExpandVerticalLine };
