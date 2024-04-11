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
      <path d="M12 15a8.001 8.001 0 0 1 7.939 7H4.062a8.001 8.001 0 0 1 7.939-7Zm-1.813 2.28A6.022 6.022 0 0 0 6.803 20h5.199l-1.813-2.72Zm3.627 0L12.001 20h5.198a6.022 6.022 0 0 0-3.385-2.72ZM18.001 2v6A6 6 0 0 1 6 8V2h12ZM8 8a4 4 0 0 0 8 0H8Zm8-4H8v2h8V4Z" />
    </svg>
  );
};
export { NurseLine };
