import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ListOrdered = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-list-ordered`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M8 4h13v2H8V4ZM5 3v3h1v1H3V6h1V4H3V3h2ZM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1H3Zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2v-.5ZM8 11h13v2H8v-2Zm0 7h13v2H8v-2Z" />
    </svg>
  );
};
export { ListOrdered };
