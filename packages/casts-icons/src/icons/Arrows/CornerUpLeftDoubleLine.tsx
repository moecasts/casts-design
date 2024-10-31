import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CornerUpLeftDoubleLine = (initProps: IconProps) => {
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
    `${prefixCls}-corner-up-left-double-line`,
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
      <path d="M20 10v9h-2v-7h-6.172l3.95 3.95-1.414 1.414L8 11l6.364-6.364 1.414 1.414-3.95 3.95zM8.75 4.636l1.414 1.414L5.214 11l4.95 4.95-1.414 1.414L2.386 11z" />
    </svg>
  );
};
export { CornerUpLeftDoubleLine };
