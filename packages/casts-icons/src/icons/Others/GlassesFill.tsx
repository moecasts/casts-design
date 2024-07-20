import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const GlassesFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-glasses-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M1 12a5 5 0 0 1 8.192-3.848A3.987 3.987 0 0 1 12 7c1.095 0 2.086.44 2.808 1.152a5 5 0 1 1-1.264 1.578A1.996 1.996 0 0 0 12 9c-.62 0-1.177.283-1.544.73A5 5 0 1 1 1 12Z" />
    </svg>
  );
};
export { GlassesFill };
