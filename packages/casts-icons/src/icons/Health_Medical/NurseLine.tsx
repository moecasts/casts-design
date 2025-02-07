import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const NurseLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-nurse-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12 15a8 8 0 0 1 7.939 7H4.063A8 8 0 0 1 12 15m-1.812 2.28A6.02 6.02 0 0 0 6.802 20h5.199zm3.626 0L12.001 20h5.198a6.02 6.02 0 0 0-3.385-2.72M18.001 2v6A6 6 0 0 1 6 8V2zM8 8a4 4 0 0 0 8 0zm8-4H8v2h8z" />
    </svg>
  );
};
export { NurseLine };
