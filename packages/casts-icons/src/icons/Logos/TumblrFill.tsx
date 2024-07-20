import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const TumblrFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-tumblr-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M6.27 7.63A5.76 5.76 0 0 0 10.817 2h3.03v5.152h3.637v3.636h-3.637v5.454c0 .515.198 1.207.91 1.667.474.307 1.484.458 3.03.455V22h-4.243a4.546 4.546 0 0 1-4.545-4.546v-6.666H6.27V7.63Z" />
    </svg>
  );
};
export { TumblrFill };
