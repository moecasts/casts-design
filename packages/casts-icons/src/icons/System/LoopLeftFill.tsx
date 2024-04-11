import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const LoopLeftFill = (initProps: IconProps) => {
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
    `${prefixCls}-loop-left-fill`,
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
      <path d="M12 4a7.986 7.986 0 0 0-6.357 3.143L8 9.5H2v-6l2.219 2.219A9.982 9.982 0 0 1 12 2c5.523 0 10 4.477 10 10h-2a8 8 0 0 0-8-8Zm-8 8a8 8 0 0 0 14.357 4.857L16 14.5h6v6l-2.219-2.219A9.982 9.982 0 0 1 12 22C6.477 22 2 17.523 2 12h2Z" />
    </svg>
  );
};
export { LoopLeftFill };
