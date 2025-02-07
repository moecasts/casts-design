import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BallPenFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-ball-pen-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m17.85 11.805-.708-.707-9.9 9.9H3v-4.243L14.314 5.44l5.657 5.657a1 1 0 0 1 0 1.414L12.9 19.583l-1.415-1.414zm.706-9.192 2.829 2.828a1 1 0 0 1 0 1.414L19.97 8.27l-4.243-4.242 1.414-1.414a1 1 0 0 1 1.414 0" />
    </svg>
  );
};
export { BallPenFill };
