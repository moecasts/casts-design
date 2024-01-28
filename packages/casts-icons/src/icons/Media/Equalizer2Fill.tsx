import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Equalizer2Fill = (initProps: IconProps) => {
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
    `${prefixCls}-equalizer2-fill`,
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
      <path d="M3 7a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm17 1h-8V6h8v2Zm-6 9a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm-2-1v2H4v-2h8Z" />
    </svg>
  );
};
export { Equalizer2Fill };
