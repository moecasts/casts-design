import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Equalizer2Line = (initProps: IconProps) => {
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
    `${prefixCls}-equalizer2-line`,
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
      <path d="M5 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM12 8h8V6h-8v2Zm4 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM4 16v2h8v-2H4Z" />
    </svg>
  );
};
export { Equalizer2Line };
