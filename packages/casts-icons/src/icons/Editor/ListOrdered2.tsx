import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ListOrdered2 = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-list-ordered2`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M5.75 3.5H4.717l-1.467.393v1.553l1-.268V8.5H3V10h4V8.5H5.75v-5ZM10 4h11v2H10V4Zm0 7h11v2H10v-2Zm0 7h11v2H10v-2Zm-7.125-2.375a2.125 2.125 0 1 1 3.812 1.292l-.004.006L5.316 18.5H7V20H3v-1.121l2.472-2.844a.625.625 0 1 0-1.094-.466l-.013.306h-1.49v-.25Z" />
    </svg>
  );
};
export { ListOrdered2 };
