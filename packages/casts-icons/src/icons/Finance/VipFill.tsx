import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const VipFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-vip-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M3.005 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 5.5v7h2v-7h-2Zm-.285 0H8.606l-1.497 4.113L5.612 8.5H3.498l2.611 6.964h2L10.72 8.5Zm5.285 5h1.5a2.5 2.5 0 0 0 0-5h-3.5v7h2v-2Zm0-2v-1h1.5a.5.5 0 0 1 0 1h-1.5Z" />
    </svg>
  );
};
export { VipFill };
