import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const LoopRightFill = (initProps: IconProps) => {
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
    `${prefixCls}-loop-right-fill`,
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
      <path d="M12 4c2.59 0 4.894 1.23 6.357 3.143L16 9.5h6v-6l-2.219 2.219A9.98 9.98 0 0 0 12 2C6.477 2 2 6.477 2 12h2a8 8 0 0 1 8-8m8 8a8 8 0 0 1-14.357 4.857L8 14.5H2v6l2.219-2.219A9.98 9.98 0 0 0 12 22c5.523 0 10-4.477 10-10z" />
    </svg>
  );
};
export { LoopRightFill };
