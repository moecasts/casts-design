import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Brush4Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-brush4-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M9 4.997v6.272H7V4.997H5v9h14v-9zm11 11H4v2h16zm-17-2v-10a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10h1v5a1 1 0 0 1-1 1h-8v3h-2v-3H3a1 1 0 0 1-1-1v-5z" />
    </svg>
  );
};
export { Brush4Line };
