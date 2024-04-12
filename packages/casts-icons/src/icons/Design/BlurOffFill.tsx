import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BlurOffFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-blur-off-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M5.432 6.843 1.394 2.804 2.808 1.39l19.799 19.8-1.415 1.413-3.038-3.038A9 9 0 0 1 5.432 6.843Zm2.811-2.817L12 .269l6.364 6.364a9.002 9.002 0 0 1 2.05 9.564L8.244 4.026Z" />
    </svg>
  );
};
export { BlurOffFill };
